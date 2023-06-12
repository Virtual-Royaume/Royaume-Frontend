<script lang="ts">
  import type { Page } from "./navbar.type";

  export let pages: Page[];

  console.log(pages);
</script>

<div class="p-2 bg-[#000000]/50 fixed h-16 w-full backdrop-blur-md">
  <div class="flex mt-2 items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="icon">
      <a href="/">
        <img src="/images/royaume-logo.png" alt="Logo" class="h-8 w-8" />
      </a>
    </div>
    <ul class="flex items-center gap-4 text-white">
      {#each pages as page}
        <li>
          <a href="/{page.link}" target={page.target} class="flex -mt-1 focus:outline-none">{page.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>