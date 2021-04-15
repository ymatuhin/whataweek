<script context="module">
  let hasTypes = { yandex: false, google: false };
</script>

<script lang="ts">
  type IProvider = "yandex" | "google";
  import { onMount } from "svelte";

  export let type: IProvider;

  if (!hasTypes[type]) {
    hasTypes[type] = true;
  }

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

<svelte:head>
  {#if type === "google"}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  {/if}
</svelte:head>

{#if type === "google"}
  <ins
    class={className}
    style="display:block"
    data-ad-client={import.meta.env.VITE_ADS_GOOGLE_ID}
    data-ad-slot={import.meta.env.VITE_ADS_GOOGLE_SLOT}
    data-ad-format="auto"
  />
{/if}
