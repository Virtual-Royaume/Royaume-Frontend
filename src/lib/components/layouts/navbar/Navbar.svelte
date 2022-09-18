<script>
    import SearchBar from "../search-bar/SearchBar.svelte";

</script>

<div class="bg-primary shadow-lg">
    <div class="container flex py-2">

        <div class="flex items-center">
            <a href="/" class="mr-3">
                <img src="/images/favicon.png" alt="Royaume Logo" class="rounded-2xl h-14 w-14">
            </a>
            <h1 class="text-xl font-bold text-gray-300 uppercase tracking-widest">News</h1>
        </div>

        <div class="flex items-center ml-auto">
            <SearchBar />
        </div>
    </div>
</div>