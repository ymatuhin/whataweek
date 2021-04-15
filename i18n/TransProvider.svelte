<script lang="ts">
  import type { I18n } from "./types";
  import { setContext } from "svelte";
  import { log } from "./logger";

  export let i18n: I18n<string>;

  log("setContext", $i18n);
  setContext("i18n", i18n);
</script>

<slot />
