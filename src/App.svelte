<script lang="ts">
  import { version } from "../package.json";
  import {
    Header,
    BaseLayout,
    Metrica,
    Footer,
    ShareButtons,
    Comments,
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

<Header>
  <svg
    class="transition"
    slot="logo"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="512" height="512" rx="64" />
    <path
      d="M200.52 78V236.84H172.344V168.895C160.239 181.176 145.63 187.316 128.516 187.316C114.95 187.316 104.306 183.491 96.5833 175.841C88.8611 168.191 85 157.42 85 143.529V78H113.176V141.113C113.176 149.569 115.158 155.809 119.124 159.836C123.089 163.862 129.037 165.875 136.968 165.875C143.438 165.875 149.908 164.365 156.378 161.346C162.848 158.125 168.17 153.897 172.344 148.663V78H200.52Z"
      fill="currentColor"
      class="text-contrast"
    />
    <path
      d="M397.976 433.44V369.201H338.504V433.44H310.48V289.04H338.504V349.71H397.976V289.04H426V433.44H397.976Z"
      class="text-contrast"
      fill="currentColor"
    />
    <path
      d="M279.366 96.8799L306.04 102.545L231.634 400.12L204.96 394.455L279.366 96.8799Z"
      class="text-brand"
      fill="currentColor"
    />
  </svg>
</Header>
<BaseLayout>
  <main class="w-full">
    <h2 class="mb-3.5 typo-overline text-brand">Четная или нечетная</h2>
    <h1 class="mb-8 typo-h1">Какая сейчас <br /> учебная неделя?</h1>

    <p class="text-lg">
      Во многих учебных заведениях, в зависимости от четности учебной недели, есть разное
      расписание. Когда я был студентом, я всегда забывал какая сейчас учебная неделя и решил
      сделать этот сайт.
    </p>

    <p class="mt-4">
      В разных учебных заведениях четность может считаться по разному. Если четность не совпадает,
      то включите «альтернативный режим» ниже.
    </p>

    <WeekInfo class="space-section" />
    <!-- 
    <h2 class="typo-h3 space-heading-section">Как определятся четность</h2>

    <p class="mb-3">
      Четность учебной недели считается особым образом. Общепринято считать, что первая учебная
      неделя в учебном году считается нечетной, далее они чередуются.
    </p>
    <p class="mb-3">
      К сожалению разные заведения по разному следуют этому правилу, например если первое сентября
      выпадает на воскресенье.
    </p>
    <p>
      Если четность на сайте не совпадает с четностью в вашем заведении, включите «альтернативный
      режим». Браузер запомнит ваш выбор и при следующем посещении, с того-же браузера, вам не нужно
      будет включать его еще раз.
    </p> -->
  </main>
  <aside>
    <div class="flex items-center space-section">
      <h2 class="inline-block mr-3 text-contrast">Поделиться</h2>
      <ShareButtons />
    </div>
    <Comments class="space-section" />
    <Metrica />
  </aside>
</BaseLayout>

<Footer title="Какая сейчас учебная неделя" from="2015" {version} />
