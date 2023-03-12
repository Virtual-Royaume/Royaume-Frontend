<script lang="ts">
  import { pushNotification } from "$lib/components/special/notification";
  
  let textElement: HTMLParagraphElement;

  const copy = () => {
    navigator.clipboard.writeText(textElement.textContent || "");
    pushNotification("Vous avez bien copié la commande !");
  }
</script>

<div class="h-screen w-screen flex items-center justify-center">
  <div class="w-10/12 bg-white p-5 rounded shadow relative">
    <p bind:this={textElement}>
      winget install --id=Valve.Steam -e  && winget install --id=EpicGames.EpicGamesLauncher -e  && winget install --id=Parsec.Parsec -e  && winget install --id=RARLab.WinRAR -e  && winget install --id=Oracle.JavaRuntimeEnvironment -e  && winget install --id=Discord.Discord -e  && winget install --id=Microsoft.PowerToys -e  && winget install --id=File-New-Project.EarTrumpet -e  && winget install --id=Microsoft.WindowsTerminal -e  && winget install --id=voidtools.Everything -e  && winget install --id=Malwarebytes.Malwarebytes -e  && winget install --id=Nvidia.GeForceExperience -e  && winget install --id=OBSProject.OBSStudio -e  && winget install --id=Nvidia.PhysX -e  && winget install --id=OpenVPNTechnologies.OpenVPN -e  && winget install --id=Figma.Figma -e
    </p>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img 
      src="/icons/clipboard.svg" 
      alt="copy to clipboard" 
      class="absolute top-2 right-2 cursor-pointer transition-opacity hover:opacity-75"
      on:click={copy}
    />
  </div>
</div>