<script lang="ts">
  import data from "../temp/members.json";

  interface Member {
    profilePicture: string;
  }

  export let members: Member[] = [];

  for (let i = 0; i < data.data.members.length; i++) {

    if (data.data.members[i].profilePicture == "https://i.ytimg.com/vi/Ug9Xh-xNecM/maxresdefault.jpg") {
      continue;
    }

    members.push({
      profilePicture: data.data.members[i].profilePicture,
    });
  }
</script>

<div class="flex sm:flex-row flex-col mx-auto w-full justify-center items-center">
  <div class="mt-10 basis-1/2 flex flex-col justify-center mr-5">
    <h3 class="font-black text-white md:text-2xl">LE ROYAUME</h3>
    <p class="text-white font-extralight md:text-1xl">Rejoignez notre communauté de développeurs talentueux ou devenez le prochain.</p>

    <a href="/discord/pro" class="gap-3 w-36 mt-5 bg-discord-primary hover:bg-discord-primary-2 transition-colors text-white text-normal font-semibold py-1 px-3 rounded-lg flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" class="w-6 h-6">
        <defs>
          <style>
            .cls-1 {
              fill:#fff;
            }
          </style>
        </defs>
        <g id="图层_2" data-name="图层 2">
          <g id="Discord_Logos" data-name="Discord Logos">
            <g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White">
              <path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </g>
          </g>
        </g>
      </svg>
      Rejoindre
    </a>
  </div>

  <div class="mt-10 bg-blue-500 rounded-full w-64 h-64 flex justify-center items-center">
    <img src="https://cdn.discordapp.com/attachments/1064617747008471180/1091085620400631908/crownn_1-removebg-preview.png">
  </div>
</div>

<div class="flex flex-col justify-center items-center mt-10">
  <div class="justify-center items-center flex flex-col mt-10 basis-1/2">
    <h3 class="font-black text-white md:text-xl">DÉCOUVREZ NOS SPÉCIALITÉES</h3>
    <p class="font-normal text-center text-white w-4/5 mt-1 md:text-normal">Voici ce qu'on sait faire de mieux chez nous, et si vous ne savez pas, ce n'est pas un soucis on peut vous apprendre et vous tenir la main !</p>
  </div>

  <!-- 3 grids -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
    <div class="flex flex-row justify-center items-center">
      <div class="flex flex-col justify-center items-center mr-5 bg-[#151517] rounded-lg w-64 h-64 p-5 border-t-[3px] border-[#39279C]">
        <div class="bg-blue-500 rounded-full w-52 flex justify-center items-center">
          <img src="/images/presentation/SvelteKit.png" alt="SvelteKit" class="w-16 mt-4 md:mt-0">
        </div>
        <h3 class="font-normal text-[#999999] md:text-large mt-5">SvelteKit</h3>
        <p class="font-normal text-center text-[#626262] w-4/3 mt-1 md:text-normal">Nous avons des spécialistes qui adorent travailler avec cette technologie du futur !</p>

        <a href="/projects?type=sveltekit" class="bg-[#1D1D1F] text-[#626262] text-normal py-2 w-36 text-center rounded-lg mt-5">
          Décrouvrir
        </a>
      </div>
    </div>

    <div class="flex flex-row justify-center items-center">
      <div class="flex flex-col justify-center items-center mr-5 bg-[#151517] rounded-lg w-64 h-64 p-5 border-t-[3px] border-[#39279C]">
        <div class="bg-blue-500 rounded-full w-52 flex justify-center items-center">
          <img src="/images/presentation/React.png" alt="React" class="w-16 mt-4 md:-mt-6">
        </div>
        <h3 class="font-normal text-[#999999] md:text-large mt-5">React</h3>
        <p class="font-normal text-center text-[#626262] w-4/3 mt-1 md:text-normal">On a des professionnels du domaine qui sauront vous aider dans n’importe quel contexte</p>

        <a href="/projects?type=react" class="bg-[#1D1D1F] text-[#626262] text-normal py-2 w-36 text-center rounded-lg mt-5">
          Décrouvrir
        </a>
      </div>
    </div>

    <div class="flex flex-row justify-center items-center">
      <div class="flex flex-col justify-center items-center mr-5 bg-[#151517] rounded-lg w-64 h-64 p-5 border-t-[3px] border-[#39279C]">
        <div class="bg-blue-500 rounded-full w-52 flex justify-center items-center">
          <img src="/images/presentation/Supabase.png" alt="Supabase" class="w-16 mt-6 md:-mt-6">
        </div>
        <h3 class="font-normal text-[#999999] md:text-large mt-5">Supabase</h3>
        <p class="font-normal text-center text-[#626262] w-4/3 mt-1 md:text-normal">Ce n’est pas qu’une base de données, c’est une plateforme qui révolutionne ce qu’on connais</p>

        <!-- Fixed to the top of card -->
        <a href="/projects?type=supabase" class="bg-[#1D1D1F] text-[#626262] text-normal py-2 w-36 text-center rounded-lg mt-5">
          Décrouvrir
        </a>
      </div>
    </div>
  </div>
</div>

<div class="mt-10">
  <div class="grid [grid-template-areas:'stack']">
    <div class="[grid-area:stack] grid grid-cols-[repeat(20,1fr)] z-10">
      {#each members as member, i}
        <div class="odd:translate-y-4 even:-translate-y-4 flex flex-col justify-center gap-1">
          <img src="{member.profilePicture}" class="w-16 h-16 rounded-full">
        </div>
      {/each}
    </div>
    <div class="[grid-area:stack z-40"></div>
    <div class="[grid-area:stack] grid place-content-center z-50 text-center">
      <h2 class="text-white text-4xl font-bold">Lorem ipsum dolor sit.</h2>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis!</p>
    </div>
  </div>
</div>