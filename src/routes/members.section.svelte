<script lang="ts">
  import data from "../temp/members.json";
  interface Member {
    profilePicture: string;
    username: string;
    id: string;
  }

  export let members: Member[] = [];

  for (let i = 0; i < data.data.members.length; i++) {

    if (data.data.members[i].profilePicture == "https://i.ytimg.com/vi/Ug9Xh-xNecM/maxresdefault.jpg") {
      continue;
    }

    members.push({
      profilePicture: data.data.members[i].profilePicture,
      username: data.data.members[i].username,
      id: data.data.members[i].id
    });
  }
</script>

<div class="mt-16 sm:mx-auto sm:w-4/5">
  <div class="grid [grid-template-areas:'stack']">
    <div class="[grid-area:stack] grid grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(20,1fr)]">
      {#each members as member, i}
        <div class="odd:translate-y-4 even:-translate-y-4 -z-[1] flex flex-col justify-center gap-1">
          <a href="/member/{member.id}" class="hover:underline">
            <img src="{member.profilePicture}" class="w-16 h-16 rounded-full hover:border-[2px] hover:border-[#39279C]" alt="{member.username}">
          </a>
        </div>
      {/each}
    </div>
    <div class="[grid-area:stack z-10"></div>
  </div>
</div>