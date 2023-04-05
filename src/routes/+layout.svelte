<script lang="ts">
  import { Notification } from "$lib/components/providers/notification";
  import { Navbar } from "$lib/components/layouts/navbar";
  import "$lib/styles/reset.css";
  import "$lib/styles/font.css";
  import "$lib/styles/tailwind.css";
</script>

<Navbar />
<main class="h-screen flex flex-col">
  <slot />
</main>

<Notification />