<script lang="ts">
  import type { IAds } from "../features/ads";
  import Ads from "../features/ads/Ads.svelte";

  type AdsTypes = [IAds, IAds, IAds];
  export let adsTypes: AdsTypes = ["google", "google", "google"];
</script>

<div class="top-space / m-4 sm:mx-6 2xl:mx-4"><Ads type={adsTypes[0]} /></div>
<div class="flex justify-center m-4 sm:mx-6 2xl:mx-4">
  <div class="vertical-space / hidden 2xl:block flex-1"><Ads type={adsTypes[1]} /></div>
  <div class="flex-1 max-w-2xl 2xl:mx-4 my-4">
    <slot />
  </div>
  <div class="vertical-space / hidden 2xl:block flex-1"><Ads type={adsTypes[2]} /></div>
</div>

<style lang="postcss">
  .top-space {
    height: 50px;
  }

  @screen md {
    .top-space {
      height: 90px;
    }
  }

  .vertical-space {
    min-width: 200px;
    max-width: 336px;
  }
</style>
