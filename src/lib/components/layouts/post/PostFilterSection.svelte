<script lang="ts">
    export let title: string;
    export let tags: { id: number, name: string }[] = [];

    let selectedTags: number[] = [];

    const toggleTag = (id: number) => {
        if (!selectedTags.includes(id)) {
            selectedTags = [id, ...selectedTags];
            return;
        }

        selectedTags = selectedTags.filter((tagId) => tagId !== id);
    }

</script>

<div class="mt-4">
    <h4 class="text-neutral-300 font-medium text-lg">{title}</h4>
    <div class="flex flex-wrap gap-2 mt-2">
        {#each tags as tag}
            <span on:click={() => toggleTag(tag.id)} class="bg-primary p-1 rounded-md whitespace-nowrap text-neutral-300 cursor-pointer border border-transparent" class:border-neutral-400={selectedTags.includes(tag.id)}>{tag.name}</span>
        {/each}
    </div>
</div>