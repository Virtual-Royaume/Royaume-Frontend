<script>
    import { BrandDiscord } from "$lib/components/icons";

</script>
<div class="flex sm:flex-row flex-col mx-auto w-full justify-center items-center">
  <div class="mt-16 px-6 md:mt-10 basis-1/2 flex flex-col justify-center mr-5">
    <h3 class="font-black text-white text-xl md:text-2xl">LE ROYAUME</h3>
    <p class="text-white font-extralight md:text-1xl">Rejoignez notre communauté de développeurs talentueux ou devenez le prochain.</p>

    <a href="/discord/pro" class="gap-3 w-36 mt-5 bg-discord-primary hover:bg-discord-primary-2 transition-colors text-white text-normal font-semibold py-1 px-3 rounded-lg flex items-center">
      <BrandDiscord />
      <!-- https://github.com/tabler/tabler-icons/issues/608 -->
      Rejoindre
    </a>
  </div>

  <div class="mt-10 bg-blue-500 rounded-full w-64 h-64 hidden md:flex justify-center items-center">
    <img src="https://cdn.discordapp.com/attachments/1064617747008471180/1091085620400631908/crownn_1-removebg-preview.png" alt="tgm">
  </div>
</div>