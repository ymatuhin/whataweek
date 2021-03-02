<script lang="ts">
  import { colors, typo, spaces } from "../styles";
  import { storeLense } from "@ymatuhin/store-lense";
  import { type, formatted, isEven } from "../model";
  import Checkbox from "./Сheckbox.svelte";
  import Block from "./Block.svelte";

  export let className: string = "";
  export { className as class };

  const invertedLense = storeLense("inverted");
  let invert = invertedLense.get() || false;
  const blockClass = "flex-initial mr-8 mb-8";

  $: isEvenFinal = invert ? !$isEven : $isEven;
  $: invertedLense.set(invert);
</script>

<div class="flex flex-wrap -mb-8 {className}">
  {#if $type === "default"}
    <Block class={blockClass} overline="Сейчас" underline={$formatted.range} isEven={isEvenFinal} />
  {/if}

  {#if $type === "weekend"}
    <Block
      class={blockClass}
      overline="Заканчивается"
      underline={$formatted.range}
      isEven={isEvenFinal}
    />
    <Block
      class={blockClass}
      overline="Начинается"
      underline={$formatted.nextRange}
      isEven={!isEvenFinal}
    />
  {/if}

  {#if $type === "vacation"}
    <Block class={blockClass} underline={$formatted.vacationUntil} isVacation={true} />
    <Block class={blockClass} underline={$formatted.nextStudyRange} isEven={false} />
  {/if}
</div>

<div class="{typo.overline} {spaces.headingSection}">Настройки</div>

<Checkbox bind:checked={invert}>
  <p>альтернативный режим</p>
  <p class={typo.caption}>включите если четность не совпадает для вашего заведения</p>
</Checkbox>
