import type { I18nStore } from "./types";
import get from "lodash/get";

type CountObj = { [key: string]: number } & { ordinal?: boolean };

export const t = (store: I18nStore<string>, path: string, count?: CountObj) => {
  if (count) return withCount(store, path, count);
  else return translate(store, path);
};

function translate(store: I18nStore<string>, path: string) {
  const result = get(store, "translation." + path, null);
  if (result == null) console.warn(`No translation for "${path}"`);
  return result || "";
}

function withCount(store: I18nStore<string>, path: string, countObj: CountObj) {
  const trans = translate(store, path);
  const { ordinal, ...rest } = countObj;
  const format = new Intl.PluralRules(store.locale, {
    type: ordinal ? "ordinal" : "cardinal",
  });

  return Object.entries(rest).reduce((acc, [name, value]) => {
    const pluralObj = translate(store, `${path}:${name}`);

    if (typeof pluralObj === "object") {
      const pluralType = format.select(value);
      const stringValue = pluralObj[pluralType] || pluralObj.other || "";
      if (!stringValue) console.warn(`No translation for "${path}:${name}.${pluralType}"`);
      const stringReplaces = stringValue.replaceAll(`{${name}}`, String(value));
      acc = acc.replaceAll(`{${name}}`, stringReplaces);
    } else {
      acc = acc.replaceAll(`{${name}}`, String(value));
    }

    return acc;
  }, trans);
}
