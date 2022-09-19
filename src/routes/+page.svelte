<script>
    import PostFilter from "@components/layouts/post/PostFilter.svelte";
    import PostPreview from "@components/layouts/post/PostPreview.svelte";
    import Heading from "@components/layouts/typography/Heading.svelte";
    import SubHeading from "@components/layouts/typography/SubHeading.svelte";

    import posts from '$lib/data/articles.json';

</script>

<div class="flex flex-col items-center container">
    <div class="my-28 text-center">
        <Heading>Le blog</Heading>
        <SubHeading>du Royaume</SubHeading>
    </div>

    <div class="grid grid-cols-[4fr_1fr] gap-12">
        <div class="grid grid-cols-3 gap-8">
            {#each posts as post}
                <PostPreview {...post} />
            {/each}
        </div>

        <div>
            <div class="sticky top-12">
                <PostFilter />
            </div>
        </div>
    </div>
</div>