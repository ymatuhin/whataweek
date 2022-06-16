<script lang="ts">
  import { version } from "../package.json";
  import {
    DarkMode,
    BaseLayout,
    Metrica,
    Footer,
    ShareButtons,
    Favicons,
  } from "shared/ui/features";
  import WeekInfo from "./weekInfo/WeekInfo.svelte";

  let title = `Чет/нечет: Какая сейчас учебная неделя?`;
  let description =
    "Сервис для определения четности учебной недели в вашем учебном заведении онлайн. Четная или нечетная?";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <Favicons />
</svelte:head>

<BaseLayout>
  <script src="https://ymatuhin.ru/ads/ads.js" defer></script>
  <div data-ads slot="top" />

  <main class="w-full limit-children">
    <DarkMode class="mb-4" />
    <h2 class="typo-overline">Четная или нечетная</h2>
    <h1 class="mb-4 typo-h1">Какая сейчас <br /> учебная неделя?</h1>

    <p class="text-lg">
      Во многих учебных заведениях занятия чередуются раз в 2 недели, для этого
      придумали чередовать учебные недели и называть их «четная» и «нечетная»
      соответственно.
    </p>

    <WeekInfo class="space-section" />

    <h2 class="typo-h3 space-heading-section">Как определятся четность</h2>

    <p class="mb-3">
      Четность учебной недели считается особым образом. Общепринято считать, что
      первая учебная неделя в учебном году считается нечетной, далее они
      чередуются.
    </p>
    <p class="mb-3">
      К сожалению разные заведения по разному следуют этому правилу, например
      если первое сентября выпадает на воскресенье.
    </p>
    <p>
      Если четность на сайте не совпадает с четностью в вашем заведении,
      включите «альтернативный режим». Браузер запомнит ваш выбор и при
      следующем посещении, с того-же браузера, вам не нужно будет включать его
      еще раз.
    </p>
  </main>

  <aside>
    <h2 class="mb-2 typo-overline space-section">Поделиться</h2>
    <ShareButtons />

    <Footer
      class="space-section"
      title="Чет/нечет: Какая сейчас учебная неделя"
      from="2015"
      {version}
    />
    <Metrica />
  </aside>
</BaseLayout>

<style lang="postcss">
  .limit-children > * {
    max-width: theme("maxWidth.xl");
  }
</style>
