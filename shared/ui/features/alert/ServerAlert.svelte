<script lang="ts">
  import type { ApiStore } from "../../../api";
  import type { I18n } from "../../../i18n/types";

  import { getContext } from "svelte";
  import { t } from "../../../i18n";
  import ErrorAlert from "./ErrorAlert.svelte";
  import TextButton from "../TextButton.svelte";

  const i18n = getContext<I18n<string>>("i18n");
  export let apiStore: ApiStore;

  $: errType = $apiStore.error?.type;

  function getNotes({ error }) {
    let array = [];
    let code = error.code ? `${error.code} • ` : "";
    if (error.message) return `${code}${error.message}`;

    if (Array.isArray(error.data)) array = error.data;
    else if (error.data === Object(error.data)) array = Object.values(error.data);
    else array = [error.data];
    return code + array.join(", ");
  }
</script>

{#if $apiStore.status === "error"}
  <ErrorAlert
    title={t($i18n, `serverError.${errType}.title`)}
    message={t($i18n, `serverError.${errType}.message`)}
    notes={getNotes($apiStore)}
    {...$$restProps}
  >
    <TextButton class="mt-2 text-contrast" on:click={apiStore.retry}>
      {t($i18n, `serverError.retry`)}
    </TextButton>
  </ErrorAlert>
{/if}
