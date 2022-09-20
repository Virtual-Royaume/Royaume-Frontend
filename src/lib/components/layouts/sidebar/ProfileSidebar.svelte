<script lang="ts">
    import Button from "@components/elements/forms/Button.svelte";
    import SidebarGroup from "./SidebarGroup.svelte";
    import SideLink from "./SideLink.svelte";

</script>

<div class="bg-primary w-[300px] fixed h-full flex flex-col justify-between">
    <div>
        <a href="/" class="flex items-center justify-center no-underline py-2 m-4 rounded-md transition-all hover:bg-darkprimary">
            <div class="mr-3">
                <img src="/images/favicon.png" alt="Royaume Logo" class="rounded-2xl h-14 w-14">
            </div>
            <h1 class="text-xl font-bold text-gray-300 uppercase tracking-wide">Profil</h1>
        </a>
    
        <div class="px-4">
            <SidebarGroup title="Réglages" id="settings">
                <SideLink href="/">Modifier le profil</SideLink>
                <SideLink href="/">Changer le mot de passe</SideLink>
            </SidebarGroup>
            <SidebarGroup title="Blog" id="blog">
                <SideLink href="/">Vos posts</SideLink>
            </SidebarGroup>
        </div>
    </div>

    <div class="p-4">
        <Button variant="contained" href="/" extend>
            <div class="flex items-center justify-center">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-neutral-200 h-5 w-5 mr-2">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                  </svg>
                Retour à l'accueil
            </div>
        </Button>
    </div>
</div>