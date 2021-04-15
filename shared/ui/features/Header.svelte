<script lang="ts">
  import { DarkMode } from "./darkMode";
</script>

<header class="flex items-center mx-[7%] my-10 md:my-16 lg:mx-16">
  <a
    href="/"
    class="inline-flex w-12 h-12 align-top transition transform focus-outline hocus:scale-90"
  >
    <slot name="logo" />
  </a>

  <!-- <nav class="ml-auto mr-6 border-r-1 text-pale">
    <a href="#" class="mr-6">Об игре</a>
    <a href="#" class="mr-6">FAQ</a>
    <a href="#" class="mr-6">Донаты</a>
  </nav> -->
  <DarkMode class="ml-auto" />
  <!-- <button class="burger">
    <div />
  </button> -->
</header>

<style lang="postcss">
  .burger {
    width: 30px;
    height: 30px;
  }

  .burger div {
    position: relative;
    height: 2px;
    background: gray;
  }

  .burger div::before,
  .burger div::after {
    content: "";
    left: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    background: gray;
  }
  .burger div::before {
    top: 9px;
  }
  .burger div::after {
    bottom: 9px;
  }
</style>
