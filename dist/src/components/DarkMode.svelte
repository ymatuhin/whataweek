<script lang="ts">
  import { storeLense } from "@ymatuhin/store-lense";
  export let className: string = "";
  export { className as class };

  const preferDarkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  let darkStore = storeLense("dark-mode");
  let darkMode = darkStore.get() ?? preferDarkMode;
  let svgClasses = "w-full h-full fill-current";

  function toggleDarkMode() {
    darkMode = !darkMode;
    darkStore.set(darkMode);
  }

  $: {
    const method = darkMode ? "add" : "remove";
    document.documentElement.classList[method]("dark");
  }
</script>

<button type="button" class="w-4 h-4 p-2 -m-2 box-content {className}" on:click={toggleDarkMode}>
  {#if darkMode}
    <svg
      class={svgClasses}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style="color: #f7d070"
      ><path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0a1 1 0 011 1v1a1 1 0 01-2 0V1a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0h-.001zM15 9a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.05 4.464A1 1 0 004.465 3.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM2 9a1 1 0 000-2H1a1 1 0 000 2h1z"
      />
    </svg>
  {:else}
    <svg class="{svgClasses} text-gray-900" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
      ><path d="M15.293 11.293A8 8 0 014.707.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  {/if}
</button>
