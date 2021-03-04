<script lang="ts">
  import { typo } from "../styles";
  import { version } from "../../package.json";
  export let className: string = "";
  export { className as class };

  const year = new Date().getFullYear();
</script>

<footer class="max-w-full text-sm / {className}">
  <p>
    2015 — {year} ©
    <a href="/" class={typo.link}>Чет/нечет: Какая сейчас учебная неделя</a>
    <span class="text-xs">(версия {version})</span>
  </p>
  <p>
    Сделал с любовью <a href="https://ymatuhin.ru" class={typo.link}>Юрий Матюхин</a>, эл. почта
    <a href="mailto:ym@ymatuhin.ru?subject=Какая сейчас учебная неделя" class={typo.link}
      >ym@ymatuhin.ru</a
    >
  </p>
</footer>
