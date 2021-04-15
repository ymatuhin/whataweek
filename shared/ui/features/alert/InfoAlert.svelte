<script lang="ts">
  import Alert from "./Alert.svelte";
  import InformationCircleFill from "../icons/InformationCircleFill.svelte";
</script>

<Alert classIcon="bg-blue-500" classTitle="text-blue-500 dark:text-blue-400" {...$$restProps}>
  <div class="w-6 h-6" slot="icon">
    <InformationCircleFill />
  </div>
  <slot />
</Alert>
