<script>
    import Button from "@components/elements/forms/Button.svelte";
    import SearchBar from "../search-bar/SearchBar.svelte";

</script>

<div class="bg-primary shadow-lg">
    <div class="grid grid-cols-[1fr_2fr_1fr] py-2 px-6">

        <div>
            <a href="/" class="flex items-center w-fit px-2 rounded-md transition-all hover:bg-darkprimary">
                <div class="mr-3">
                    <img src="/images/favicon.png" alt="Royaume Logo" class="rounded-2xl h-14 w-14">
                </div>
                <h1 class="text-xl font-bold text-gray-300 uppercase tracking-wide">Blog</h1>
            </a>
        </div>

        <div class="flex items-center w-full">
            <SearchBar />
        </div>

        <div class="flex items-center justify-end">
            {#if false}
                <Button variant="contained" href="/connection/login">Connexion</Button>
            {:else}
                <Button variant="contained" href="/profile/settings/edit">
                    <div class="flex items-center">
                        <svg class="fill-neutral-200 h-6 w-6 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M80,71.2V74c0,3.3-2.7,6-6,6H26c-3.3,0-6-2.7-6-6v-2.8c0-7.3,8.5-11.7,16.5-15.2c0.3-0.1,0.5-0.2,0.8-0.4
                                        c0.6-0.3,1.3-0.3,1.9,0.1C42.4,57.8,46.1,59,50,59c3.9,0,7.6-1.2,10.8-3.2c0.6-0.4,1.3-0.4,1.9-0.1c0.3,0.1,0.5,0.2,0.8,0.4
                                        C71.5,59.5,80,63.9,80,71.2z"/>
                                </g>
                                <g>
                                    <ellipse cx="50" cy="36.5" rx="14.9" ry="16.5"/>
                                </g>
                            </g>
                        </svg>
                        RomainSav
                    </div>
                </Button>
            {/if}
        </div>
    </div>
</div>