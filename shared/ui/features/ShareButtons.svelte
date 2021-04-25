<script lang="ts">
  import VkIcon from "shared/ui/features/icons/social/Vk.svelte";
  import TelegramIcon from "shared/ui/features/icons/social/Telegram.svelte";
  import FacebookIcon from "shared/ui/features/icons/social/Facebook.svelte";
  import TwitterIcon from "shared/ui/features/icons/social/Twitter.svelte";
  import ViberIcon from "shared/ui/features/icons/social/Viber.svelte";
  import WhatsappIcon from "shared/ui/features/icons/social/Whatsapp.svelte";

  const text = encodeURIComponent(document.title);
  const url = encodeURIComponent(location.href);

  const services = [
    {
      name: "ВКонтакте",
      url: `https://vk.com/share.php?title=${text}&url=${url}`,
      component: VkIcon,
      color: "hocus:bg-vk dark:hocus:bg-vk",
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?text=${text}&url=${url}`,
      component: TelegramIcon,
      color: "hocus:bg-telegram dark:hocus:bg-telegram",
    },
    {
      name: "Facebook",
      url: `https://facebook.com/sharer/sharer.php?u=${url}&title={title}`,
      component: FacebookIcon,
      color: "hocus:bg-facebook dark:hocus:bg-facebook",
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet/?text=${text}&url=${url}`,
      component: TwitterIcon,
      color: "hocus:bg-twitter dark:hocus:bg-twitter",
    },
    {
      name: "Viber",
      url: `viber://forward?text=${text} ${url}`,
      component: ViberIcon,
      color: "hocus:bg-viber dark:hocus:bg-viber",
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${text} ${url}`,
      component: WhatsappIcon,
      color: "hocus:bg-whatsapp dark:hocus:bg-whatsapp",
    },
  ];
</script>

<div class="inline-flex flex-wrap justify-center">
  {#each services as service}
    <a
      class="flex w-7 h-7 p-[2px] mr-1 transition transform rounded hocus:scale-125 hocus:text-gray-100 bg-gray-200 text-gray-600 dark:text-gray-200 dark:bg-gray-700 {service.color}"
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Поделиться через {service.name}"
    >
      <svelte:component this={service.component} class="p-1" />
    </a>
  {/each}
</div>
