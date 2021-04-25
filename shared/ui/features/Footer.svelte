<script lang="ts">
  import TwitterIcon from "shared/ui/features/icons/social/Twitter.svelte";
  import TelegramIcon from "shared/ui/features/icons/social/Telegram.svelte";
  import GithubIcon from "shared/ui/features/icons/social/Github.svelte";

  export let title: string;
  export let from: string;
  export let version: string;
  export let className: string = "";
  export { className as class };

  const year = new Date().getFullYear();
</script>

<footer
  class="px-[7%] text-pale py-10 lg:px-16  border-t dark:border-t-0 text-sm bg-gray-100 dark:bg-gray-950 border-gray-900 border-opacity-5 {className}"
>
  <div class="flex flex-wrap justify-between lg:flex-nowrap lg:space-x-8">
    <div class="w-1/2 lg:w-1/4">
      <svg
        class="w-12 mb-4 transition"
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
      <p class="max-w-sm mb-1">Чет/нечет: онлайн сервис для определения четности учебной недели</p>
    </div>
    <div class="w-1/2 lg:w-1/4">
      <p class="mb-2 text-xs typo-overline text-faint">Навигация</p>
      <ul class="leading-snug">
        <li class="mb-2">
          <a href="#" class="">Четная или нечетная </a>
        </li>
        <li class="mb-2">
          <a href="#" class="">Как определяется четность</a>
        </li>
        <li class="mb-2">
          <a href="#" class="">Вопросы и ответы</a>
        </li>
        <li class="">
          <a href="#" class="">Поддержать проект&nbsp; 🍩</a>
        </li>
      </ul>
    </div>
    <div class="w-1/2 mt-8 lg:w-1/4 lg:mt-0">
      <p class="mb-2 text-xs typo-overline text-faint">Другие проекты</p>
      <ul class="leading-snug">
        <li class="mb-2">
          <a href="#" class="">Бегущий динозаврик</a>
        </li>
        <li class="mb-2">
          <a href="#" class="">Цветные линии 98</a>
        </li>
        <li class="mb-2">
          <a href="#" class="">Сайт с рекламой</a>
        </li>
        <li class="">
          <a href="#" class="">Автопрефиксер</a>
        </li>
      </ul>
    </div>
    <div class="w-1/2 mt-8 lg:w-1/4 lg:mt-0">
      <p class="mb-2 text-xs typo-overline text-faint">Контакты</p>
      <p class="">
        Делитесь вашим мнением в комментариях, соц.сетях или пишите на эл.почту
        <a href="mailto:ym@ymatuhin.ru?subject={location.hostname}" class="text-neutral"
          >ym@ymatuhin.ru</a
        >
      </p>

      <div class="flex mt-4 text-faint">
        <a href="#" class="mr-5 hocus:text-neutral">
          <TelegramIcon class="w-4 h-4" />
        </a>
        <a href="#" class="mr-4 hocus:text-neutral">
          <TwitterIcon class="w-4 h-4" />
        </a>
        <a href="#" class="hocus:text-neutral">
          <GithubIcon class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
  <div class="flex pt-4 mt-12 text-xs border-t border-gray-200 dark:border-gray-800 text-faint">
    <p class="">
      {from} — {year} © {title}
      &bull;
      <a href="https://ymatuhin.ru" class="text-pale">Юрий Матюхин</a>
    </p>
    <span class="ml-auto "> версия&nbsp;{version}</span>
  </div>
</footer>
