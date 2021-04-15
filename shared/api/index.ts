import type { Writable } from "svelte/store";

import { writable } from "svelte/store";
import { createLogger } from "@ymatuhin/debug";
import flatry from "flatry";

const log = createLogger("📶 api");

type BaseParams = { baseUrl: string; fetch?: RequestInit };
type Status = "initial" | "pending" | "success" | "error";
type Error = {
  type: string;
  code?: number;
  message?: string;
  data?: any;
};
type Store<Data> = {
  status: Status;
  data: Data | null;
  error: Error | null;
};

export type ApiStore<Data = any> = Writable<Store<Data>> & {
  request(data: any): void;
  retry(): void;
  abort: AbortController["abort"];
};

export const createApi = (baseParams: BaseParams) => {
  return {
    get: makeMethod("GET", baseParams),
    post: makeMethod("POST", baseParams),
    put: makeMethod("PUT", baseParams),
    patch: makeMethod("PATCH", baseParams),
    delete: makeMethod("DELETE", baseParams),
    options: makeMethod("OPTIONS", baseParams),
  };
};

function makeMethod(method: string, baseParams: BaseParams) {
  const { signal, abort } = new AbortController();

  return <Data>(url: string, methodFetchParams?: RequestInit): ApiStore<Data> => {
    const finalUrl = url.indexOf("http") === 0 ? url : baseParams.baseUrl + url;
    const fetchParams = { ...baseParams.fetch, ...methodFetchParams };
    let lastData;

    const $store = writable<Store<Data>>({
      status: "initial",
      data: null,
      error: null,
    });

    log.store(`${url} ${method.toLowerCase()}`, $store);

    async function request(data?: Object) {
      log(`${url} ${method.toLowerCase()} 🌍`, data);
      lastData = data;
      $store.update((state) => ({ ...state, status: "pending" }));
      const params = {
        ...fetchParams,
        signal,
        method,
        headers: {
          ...fetchParams.headers,
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
      };

      let json;
      let parseError;
      const [fetchError, response] = await flatry(fetch(finalUrl, params));
      if (response) [parseError, json] = await flatry(response.json());

      const isError = fetchError || parseError || !response?.ok;
      const jsonMessage = json && typeof json === "object" ? json.message : "";
      const error = {
        type: fetchError ? "network" : "server",
        code: response?.status,
        message: fetchError?.message || parseError?.message || jsonMessage,
        data: json,
      };

      $store.update((state) => ({
        ...state,
        error: isError ? error : null,
        data: isError ? null : json,
        status: isError ? "error" : "success",
      }));
    }

    return {
      ...$store,
      request,
      abort,
      retry: () => request(lastData),
    };
  };
}
