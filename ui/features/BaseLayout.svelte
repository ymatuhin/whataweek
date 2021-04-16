<div class="flex justify-center mx-[7%] my-12 md:my-16 lg:mx-16">
  <div class="justify-end flex-1 hidden mr-4 vertical-space 2xl:flex">
    <slot name="left" />
  </div>
  <div class="flex-shrink-0 w-full max-w-full lg:max-w-3xl">
    <div class="max-w-xl mx-auto">
      <slot />
    </div>
  </div>
  <div class="justify-start flex-1 hidden ml-4 vertical-space 2xl:flex">
    <slot name="right" />
  </div>
</div>

<style lang="postcss">
  .vertical-space {
    min-width: 200px;
    max-width: 340px;
  }
</style>
