<script lang="ts">
  export let id: string = "";
  export let group: string;
  export let value: string;
  export let disabled: boolean = false;

  export let className: string = "";
  export { className as class };
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="inline-flex select-none {className}">
  <input
    {id}
    {disabled}
    {value}
    bind:group
    class="flex-shrink-0 mt-1 mr-3 bg-transparent border-gray-300 shadow-sm dark:border-gray-600 text-brand focus:border-brand focus-outline checked:border-0"
    type="radio"
  />
  <div><slot /></div>
</label>
