<script lang="ts">
  export let buttonType: "button" | "submit" = "button";
</script>

<button type={buttonType} on:click class="inline-flex typo-button {$$props.class}">
  <slot />
</button>
