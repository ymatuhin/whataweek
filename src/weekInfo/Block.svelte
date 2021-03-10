<script lang="ts">
  export let isEven: boolean;
  export let overline: string = "";
  export let underline: string = "";
  export let isVacation: boolean = false;

  let className = "";
  export { className as class };
</script>

<div class="inline-block leading-none {className}">
  {#if overline}
    <div class="text-sm color-caption">{overline}</div>
  {/if}
  <div class="uppercase typo-h2">
    {#if isVacation}
      отдых
    {:else}
      {#if !isEven}<span class="color-red-text">Нe</span>{/if}четная
    {/if}
  </div>
  {#if underline}
    <small class="flex text-center w-full p-1 color-pane-bg color-pane-text">
      {#if isEven !== undefined}
        <span>{isEven ? "↓" : "↑"}</span>
      {/if}
      <span class="flex-1">{underline}</span>
    </small>
  {/if}
</div>
