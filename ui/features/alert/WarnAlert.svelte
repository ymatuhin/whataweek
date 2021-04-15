<script lang="ts">
  import Alert from "./Alert.svelte";
  import ExclamationFill from "../icons/ExclamationFill.svelte";
</script>

<Alert classIcon="bg-yellow-500" classTitle="text-yellow-500 dark:text-yellow-400" {...$$restProps}>
  <div class="w-6 h-6" slot="icon">
    <ExclamationFill />
  </div>
  <slot />
</Alert>
