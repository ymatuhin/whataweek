<script lang="ts">
  export let isEven: boolean;
  export let overline: string = "";
  export let underline: string = "";
  export let isVacation: boolean = false;

  let className = "";
  export { className as class };
</script>

<div class="pane py-3 px-5 inline-block leading-none {className}">
  {#if overline}
    <div class="text-sm">{overline}</div>
  {/if}
  <div class="text-center uppercase typo-h2">
    {#if isVacation}
      отдых
    {:else}
      {#if !isEven}<span class="text-brand">Нe</span>{/if}четная
    {/if}
  </div>
  {#if underline}
    <small class="flex w-full text-center bg-pane text-pale">
      <span class="mr-2">{underline}</span>
      {#if isEven !== undefined}
        <span class="ml-auto">{isEven ? "нижняя" : "верхняя"}</span>
      {/if}
    </small>
  {/if}
</div>
