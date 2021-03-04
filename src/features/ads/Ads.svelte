<script lang="ts">
  import type { IAds } from "./index";
  import { onMount } from "svelte";
  import { loadScriptOnce } from "./loadScript";
  export let type: IAds = "google";

  onMount(() => {
    const isPrerender = navigator.userAgent == "ReactSnap";

    if (!isPrerender) {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    if (type === "google" && !isPrerender) {
      const src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      loadScriptOnce(src, { defer: true });
    }
  });

  let className = "";
  export { className as class };
</script>

{#if type === "google"}
  <ins
    class={className}
    style="display:block"
    data-ad-client={import.meta.env.VITE_ADS_GOOGLE_ID}
    data-ad-slot={import.meta.env.VITE_ADS_GOOGLE_SLOT}
    data-ad-format="auto"
  />
{/if}
