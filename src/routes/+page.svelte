<script lang="ts">
  import { Button } from "$lib/components/atoms/button";
  import { ExternalIcon } from "$lib/components/icons";
  import { error, info, success } from "$lib/components/providers/notification";
</script>

<div class="h-full flex items-center justify-center flex-col">
  <img src="/favicon.png" alt="Royaume logo" class="h-64 animate-pulse" />

  <a class="flex items-center gap-2 text-white text-xl hover:brightness-90" href="./discord/pro">
    <span>LE ROYAUME</span>

    <ExternalIcon color="white" size={24} />
  </a>

  <div class="flex gap-2 mt-2">
    <Button color="success" onClick={() => success("C'est une bonne notification")}>Bonne notification</Button>
    <Button color="error" onClick={() => error("C'est une mauvaise notification")}>Mauvaise notification</Button>
    <Button color="primary" onClick={() => info("C'est une notification d'information")}>Notification</Button>
  </div>
</div>