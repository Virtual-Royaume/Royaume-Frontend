<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let title: string;
    export let tags: { id: number, name: string }[] = [];

    let selectedTags: number[] = [];

    onMount(() => {
        const values = $page.url.searchParams.get(title.toLocaleLowerCase())?.split(' ');

        tags?.forEach((tag) => {            
            if (!values?.includes(tag.name.toLowerCase().split(' ').join('_'))) return;

            selectedTags = [tag.id, ...selectedTags];;
        });
    });

    const toggleTag = (id: number) => {
        if (!selectedTags.includes(id)) {
            selectedTags = [id, ...selectedTags];
        } else {
            selectedTags = selectedTags.filter((tagId) => tagId !== id);
        }

        const searchParams = new URLSearchParams($page.url.searchParams);
        if (selectedTags.length > 0) {
            searchParams.set(title.toLowerCase(), tags.filter((tag) => selectedTags.includes(tag.id)).map((tag) => tag.name.toLowerCase().split(' ').join('_')).join(' '));
        } else {
            searchParams.delete(title.toLowerCase());
        }

        goto($page.url.pathname + '?' + searchParams.toString(), {
            noscroll: true
        });
    }

</script>

<div class="mb-4">
    <h4 class="text-neutral-300 font-medium text-lg">{title}</h4>
    <div class="flex flex-wrap gap-2 mt-2">
        {#each tags as tag}
            <span on:click={() => toggleTag(tag.id)} class="bg-primary p-1 rounded-md whitespace-nowrap text-neutral-300 cursor-pointer border border-transparent" class:border-neutral-400={selectedTags.includes(tag.id)}>{tag.name}</span>
        {/each}
    </div>
</div>