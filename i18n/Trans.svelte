<script lang="ts">
  import type { I18n } from "./types";
  import { getContext } from "svelte";
  import { t } from "./t";

  const i18n = getContext<I18n<string>>("i18n");

  export let key: string;
</script>

{t($i18n, key, $$restProps)}
