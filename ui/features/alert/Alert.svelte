<script lang="ts">
  export let type: "pane" | "border" = "pane";
  export let title: string = "";
  export let message: string = "";
  export let notes: string = "";

  export let classIcon = "";
  export let classTitle = "";

  $: typeClass = type === "pane" ? "pane" : "rounded border-1 border-gray-200 dark:border-gray-700";
</script>

<div class="flex w-full overflow-hidden bg-white dark:bg-gray-700 {typeClass} {$$props.class}">
  {#if $$slots.icon}
    <div class="flex items-center justify-center px-4 py-2 text-white {classIcon}">
      <slot name="icon" />
    </div>
  {:else}
    <div class="w-2 bg-gray-700" />
  {/if}

  <div class="flex items-center w-full px-4 py-2">
    <div>
      {#if title}
        <p class="font-semibold {classTitle}">{title}</p>
      {/if}
      {#if message}
        <p class="">{message}</p>
      {/if}
      {#if notes}
        <p class="text-sm text-pale">{notes}</p>
      {/if}
      <slot />
    </div>
  </div>
</div>
