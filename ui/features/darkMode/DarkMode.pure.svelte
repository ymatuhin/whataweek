<script lang="ts">
  export let active: boolean = false;
  export let className: string = "";
  export { className as class };

  let svgClasses = "absolute inline-block fill-current";
  $: labelClasses = active ? "bg-gray-100" : "bg-gray-900";
  $: ballClasses = active ? "translate-x-5 bg-gray-900" : "bg-gray-100";
</script>

<label
  class="focus-within-outline cursor-pointer transition relative flex items-center box-content w-[50px] h-[26px]  rounded-full {labelClasses} {className} "
>
  <div class="transform transition z-10 rounded-full mx-[3px] w-4 h-4 {ballClasses}" />
  <svg
    class="{svgClasses} w-[14px] text-gray-100 right-[6px]"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    ><path d="M15.293 11.293A8 8 0 014.707.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
  <svg
    class="{svgClasses} w-[16px] text-gray-900 left-[5px]"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 0a1 1 0 011 1v1a1 1 0 01-2 0V1a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0h-.001zM15 9a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.05 4.464A1 1 0 004.465 3.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM2 9a1 1 0 000-2H1a1 1 0 000 2h1z"
    />
  </svg>
  <input
    class="pointer-events-none absolute inset-0 opacity-0"
    type="checkbox"
    bind:checked={active}
  />
</label>
