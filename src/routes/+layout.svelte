<script lang="ts">
  import { Notification } from "$lib/components/special/notification";
  import "$lib/styles/tailwind.css";
</script>

<main class="h-screen bg-gradient-to-r from-primary-1 to-primary-2">
  <slot />
</main>

<Notification />