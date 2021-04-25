<script lang="ts">
  export let isEven: boolean;
  export let overline: string = "";
  export let underline: string = "";
  export let isVacation: boolean = false;

  let className = "";
  export { className as class };
</script>

<div class="relative pane py-3 px-5 inline-block leading-none {className}">
  {#if overline}
    <div
      class="absolute top-0 -ml-2 px-2 pt-0.5 pb-1 mb-1 font-medium transform -translate-y-1/2 pane text-sm text-pale"
    >
      {overline}
    </div>
    <div class="mt-1" />
  {/if}
  <div class="tracking-wide uppercase typo-h2">
    {#if isVacation}
      отдых
    {:else}
      {#if !isEven}<span class="text-brand">Нe</span>{/if}четная
    {/if}
  </div>
  {#if underline}
    <div class="flex w-full mt-1 text-sm bg-pane text-pale">
      <span class="">{underline}</span>
      {#if isEven !== undefined}
        &nbsp;<span class="ml-auto">
          <span class="text-faint">(</span>{isEven ? "↓" : "↑"}<span class="text-faint">)</span>
        </span>
      {/if}
    </div>
  {/if}
</div>
