<script lang="ts">
  import { Notification } from "$lib/components/special/notification";
  import "$lib/styles/tailwind.css";
</script>

<main class="h-screen bg-black">
  <slot />
</main>

<Notification />