<script lang="ts">
  import { darkMode } from "./darkMode";

  let opened = false;
</script>

<hr class={$$restProps.class} />
<div class="flex py-4">
  {#if !opened}
    <button class="p-12 mx-auto text-lg group text-contrast" on:click={() => (opened = true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block w-8 h-8 mr-2 text-faint group-hocus:text-brand"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>

      Посмотреть комментарии
    </button>
  {:else}
    <div class="pane">
      {#key $darkMode}
        <!-- https://comments.app/manage?website=yMOZrnaQ -->
        <script
          async
          src="https://comments.app/js/widget.js?3"
          data-comments-app-website="yMOZrnaQ"
          data-limit="5"
          data-color={$darkMode ? "fa554a" : "bd3430"}
          data-dark={$darkMode ? "1" : "0"}></script>
      {/key}
    </div>
  {/if}
</div>

<!-- <hr /> -->
