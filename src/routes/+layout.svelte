<script lang="ts">
  import { Notification } from "$lib/components/molecules/notification";
  import "$lib/styles/reset.css";
  import "$lib/styles/font.css";
  import "$lib/styles/tailwind.css";
</script>

<main class="h-screen bg-black">
  <slot />
</main>

<Notification />