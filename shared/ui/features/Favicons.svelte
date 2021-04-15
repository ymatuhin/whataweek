<script lang="ts">
  const isDev = process.env.NODE_ENV === "development";
  export let preview = false;
  export let emoji: string = "🔥";
</script>

{#if isDev && !preview}
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22> {emoji} </text></svg>"
  />
{:else}
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.webmanifest" />
{/if}
