<script lang="ts">
  import { darkMode } from "./darkMode";
</script>

{#key $darkMode}
  <div>
    <!-- https://comments.app/manage?website=yMOZrnaQ -->
    <script
      async
      src="https://comments.app/js/widget.js?3"
      data-comments-app-website="yMOZrnaQ"
      data-limit="5"
      data-color={$darkMode ? "fa554a" : "bd3430"}
      data-dark={$darkMode ? "1" : "0"}></script>
  </div>
{/key}
