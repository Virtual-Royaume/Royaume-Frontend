<script lang="ts">
    import Heading from '@components/layouts/typography/Heading.svelte';
    import articles from '$lib/data/articles.json';
    import MyPostPreview from '@components/layouts/post/MyPostPreview.svelte';
    import Button from '@components/elements/forms/Button.svelte';
</script>

<div>
    <div class="mb-16">
        <Heading>Vos posts</Heading>
    </div>
    <div>
        <div class="flex justify-end mb-6">
            <Button variant="contained">Nouvel article</Button>
        </div>
        <div class="flex flex-col gap-4">
            {#each articles as article}
            <MyPostPreview {...article} />
            {/each}
        </div>
    </div>
</div>