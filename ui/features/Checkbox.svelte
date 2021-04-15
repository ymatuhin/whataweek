<script lang="ts">
  export let id: string = "";
  export let checked: boolean = false;
  export let disabled: boolean = false;

  export let className: string = "";
  export { className as class };
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="inline-flex select-none {className}">
  <div
    class="relative text-brand flex w-5 h-5 mt-1 mr-3 focus-within-outline transition-colors rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
  >
    <input
      {id}
      {disabled}
      bind:checked
      class="pointer-events-none absolute inset-0 opacity-0"
      type="checkbox"
    />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div><slot /></div>
</label>

<style>
  input + svg {
    visibility: hidden;
  }
  input:checked + svg {
    visibility: visible;
  }
</style>
