<script lang="ts">
    import convertToSlug from "$lib/utils/convert-to-slug";

    export let id: number;
    export let category: string;
    export let title: string;
    export let description: string;
    export let thumbnail: string;

    export let author: any;

    export let createdAt: string;
</script>

<a href={convertToSlug(id, title)} class="flex flex-col bg-neutral-800 shadow-md p-3 rounded-md transition-all hover:scale-105 hover:shadow-xl">
    <div>
        <img src={thumbnail} alt="Post thumbnail" class="rounded-md">
    </div>

    <div class="mt-3">
        <p class="text-neutral-500 uppercase text-sm">{category}</p>
        <div class="mt-4">
            <p class="text-neutral-300 font-semibold text-lg">{title}</p>
            <p class="text-neutral-400 text-sm text-justify mt-2 line-clamp-3">{description}</p>
        </div>
    </div>

    <div class="flex h-full mt-5">
        <div class="mt-auto flex items-center">
            <img src={author.avatar} alt={`${author.username} Avatar`} class="rounded-full h-10 w-10">

            <div class="ml-3 ">
                <p class="text-neutral-300 font-medium text-sm leading-4">{author.username}</p>
                <p class="text-neutral-500 font-medium text-sm">{(new Date(createdAt)).toLocaleDateString('fr-FR', {
                     year: "numeric", 
                     month: 'short', 
                     day: 'numeric'
                 })}</p>
            </div>
        </div>
    </div>
</a>
