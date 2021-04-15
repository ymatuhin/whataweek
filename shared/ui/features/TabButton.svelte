<script lang="ts">
  export let active: string;
  export let type: string;

  $: activeClass = active === type ? "bg-brand bg-opacity-10 dark:bg-opacity-10 text-brand" : "";
</script>

<button
  type="button"
  class="px-3 py-1 rounded focus-outline text-pale {activeClass} {$$props.class}"
  on:click={() => (active = type)}
>
  <slot /></button
>
