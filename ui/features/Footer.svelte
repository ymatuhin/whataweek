<script lang="ts">
  export let title: string;
  export let from: string;
  export let version: string;
  export let className: string = "";
  export { className as class };

  const year = new Date().getFullYear();
</script>

<footer class="mx-[7%] my-12 md:my-16 lg:mx-16 text-sm text-faint {className}">
  <p>
    {from} — {year} ©
    <a href="/" class="text-pale hocus:text-contrast">{title}</a>
    <span class="text-xs">(версия {version})</span>
  </p>
  <p>
    Сделал с любовью <a href="https://ymatuhin.ru" class="text-pale hocus:text-contrast"
      >Юрий Матюхин</a
    >, эл. почта
    <a
      href="mailto:ym@ymatuhin.ru?subject={location.hostname}"
      class="text-pale hocus:text-contrast">ym@ymatuhin.ru</a
    >
  </p>
</footer>
