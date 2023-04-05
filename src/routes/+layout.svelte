<script lang="ts">
  import { Navbar } from "$lib/components/layouts/navbar";
  import "$lib/styles/reset.css";
  import "$lib/styles/font.css";
  import "$lib/styles/tailwind.css";
</script>

<Navbar pages={
  [
    { name: "Blog", link: "/", target: "self" },
    { name: "Membres", link: "/", target: "self" }
  ]
} />

<main class="h-screen flex flex-col">
  <slot />
</main>