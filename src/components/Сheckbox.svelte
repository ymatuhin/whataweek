<script lang="ts">
  export let id: string = "";
  export let checked: boolean = false;

  export let className: string = "";
  export { className as class };
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="inline-flex select-none {className}">
  <div class="relative flex-shrink-0 w-5 h-5 mt-1 mr-4">
    <input
      {id}
      bind:checked
      class="input absolute inset-0 appearance-none border-2 border-gray-900 dark:border-gray-200"
      type="checkbox"
    />
    <svg
      class="w-full h-full fill-current text-gray-900 dark:text-gray-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78 78"
      ><path
        d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z"
      /></svg
    >
  </div>
  <div><slot /></div>
</label>

<style>
  svg {
    padding: 0.3rem;
    visibility: hidden;
  }
  .input:checked + svg {
    visibility: visible;
  }
</style>
