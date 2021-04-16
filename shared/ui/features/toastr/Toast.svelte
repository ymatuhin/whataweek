<script lang="ts">
  import type { Type } from "./types";

  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";

  export let type: Type = "info";
  export let progress: number = 50;
  export let title: string;
  export let message: string;
  export let retry: boolean;

  const dispatch = createEventDispatcher();
  const colors = {
    default: "gray",
    success: "green",
    error: "red",
    warning: "yellow",
    info: "blue",
  };

  $: color = colors[type];
</script>

<div on:click class="relative flex bg-{color}-400 text-{color}-900 w-full text-xs">
  <div class="flex items-center flex-1 px-3 py-3">
    <Icon class="flex-shrink-0 w-6 h-6 mr-3" {type} />
    <div class="flex-1">
      {#if title}
        <p class="font-medium leading-tight">{title}</p>
      {/if}
      {#if message}
        <p class="text-opacity-80">{message}</p>
      {/if}
    </div>
  </div>

  {#if retry}
    <button
      type="button"
      class="flex w-12 bg-{color}-900 bg-opacity-20 focus:outline-none"
      on:click={() => dispatch("retry")}
    >
      <Icon class="m-auto w-6 h-6 flex-shrink-0 text-{color}-900" type="retry" />
    </button>
  {/if}

  <div
    class="absolute bottom-0 left-0 h-1 bg-{color}-900 bg-opacity-50"
    style="width:{100 - progress}%"
  />
</div>
