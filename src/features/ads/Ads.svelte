<script lang="ts">
  import type { IAds } from "./index";
  import { onMount } from "svelte";
  export let type: IAds;

  if (type === "google") {
    onMount(() => {
      const isPrerender = navigator.userAgent == "ReactSnap";
      if (isPrerender) return;
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

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
