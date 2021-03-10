<script lang="ts">
  import { Checkbox } from "shared/ui/features";

  import { type, formatted, isEven, inverted } from "./model";
  import Block from "./Block.svelte";

  export let className: string = "";
  export { className as class };

  const blockClass = "flex-initial mr-8 mb-8";
</script>

<div class="flex flex-wrap -mb-8 {className}">
  {#if $type === "default"}
    <Block class={blockClass} underline={$formatted.range} isEven={$isEven} />
  {/if}

  {#if $type === "weekend"}
    <Block
      class={blockClass}
      overline="Заканчивается"
      underline={$formatted.range}
      isEven={$isEven}
    />
    <Block
      class={blockClass}
      overline="Начинается"
      underline={$formatted.nextRange}
      isEven={!$isEven}
    />
  {/if}

  {#if $type === "vacation"}
    <Block class={blockClass} underline={$formatted.vacationUntil} isVacation={true} />
    <Block class={blockClass} underline={$formatted.nextStudyRange} isEven={false} />
  {/if}
</div>

<div class="typo-overline space-heading-section">Настройки</div>

<Checkbox bind:checked={$inverted}>
  <p class="leading-none mt-1 pb-1">альтернативный режим</p>
  <p class="typo-caption">включите если четность не совпадает для вашего заведения</p>
</Checkbox>
