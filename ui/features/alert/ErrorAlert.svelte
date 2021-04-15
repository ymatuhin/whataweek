<script lang="ts">
  import Alert from "./Alert.svelte";
  import ExclamationCircleFill from "../icons/ExclamationCircleFill.svelte";
</script>

<Alert classIcon="bg-red-500" classTitle="text-red-500 dark:text-red-400" {...$$restProps}>
  <div class="w-6 h-6" slot="icon">
    <ExclamationCircleFill />
  </div>
  <slot />
</Alert>
