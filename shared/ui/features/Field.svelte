<script lang="ts">
  export let value: string;
  export let type: string = "text";

  const handleInput = (event) => {
    value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  };
</script>

<input
  {value}
  {type}
  {...$$restProps}
  on:input={handleInput}
  on:change={handleInput}
  class="{$$props.class} bg-transparent block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand focus-outline"
/>
