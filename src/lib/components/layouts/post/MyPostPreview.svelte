<script lang="ts">
    import convertToSlug from "$lib/utils/convert-to-slug";

    export let id: number;
    export let title: string;
    export let description: string;
    export let thumbnail: string;

    export let createdAt: string;
</script>

<a href={`/profile/blog/posts/${convertToSlug(id, title)}`} class="grid grid-cols-[250px_1fr] gap-4 bg-neutral-800 shadow-md p-3 rounded-md transition-all hover:scale-105 hover:shadow-xl">
    <div class="w-[250px]">
        <img src={thumbnail} alt="Post Thumbnail" class="rounded-md w-full aspect-video object-cover">
    </div>

    <div class="flex flex-col justify-between">
        <div>
            <h3 class="text-neutral-200 font-semibold mb-1">{title}</h3>
            <p class="flex text-neutral-400 text-sm">{description}</p>
        </div>

        <div>
            <p class="text-neutral-500 font-medium text-sm">{(new Date(createdAt)).toLocaleDateString('fr-FR', {
                year: "numeric", 
                month: 'short', 
                day: 'numeric'
            })}</p>
        </div>
    </div>
</a>