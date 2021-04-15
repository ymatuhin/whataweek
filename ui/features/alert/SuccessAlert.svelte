<script lang="ts">
  import Alert from "./Alert.svelte";
  import CheckCircleFill from "../icons/CheckCircleFill.svelte";
</script>

<Alert classIcon="bg-green-500" classTitle="text-green-500 dark:text-green-400" {...$$restProps}>
  <div class="w-6 h-6" slot="icon">
    <CheckCircleFill />
  </div>
  <slot />
</Alert>
