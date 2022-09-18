<script lang="ts">
    import Button from '@components/elements/forms/Button.svelte';
    import PostAuthor from '@components/layouts/post/PostAuthor.svelte';
    import Heading from '@components/layouts/typography/Heading.svelte';
    import { onMount } from 'svelte';

    export let data: any;
    const post = data.post;

    let article: HTMLElement;

    let tableOfContent: { id: string, name: string, active: boolean }[] = [];
    let activeHeading: string | null = null;

    let lastScrollY = 0;

    onMount(() => {
        lastScrollY = window.pageYOffset;

        for (const child of article.children) {
            if (child.tagName === 'H2' && child.textContent) {
                child.id = child.textContent.split(' ').join('_').toLowerCase();
                tableOfContent = [...tableOfContent, {
                    id: child.id,
                    name: child.textContent,
                    active: false
                }];
            }
        }
    });

    const onScroll = (event: MouseEvent) => {
        let tocLenght = tableOfContent.length;
        const children = Array.from(article.children).filter((child) => child.tagName === 'H2');
       
        while (tocLenght--) {

            if (lastScrollY > window.pageYOffset) {
                const child = children[children.length - (tocLenght + 1)];
                const { top } = child.getBoundingClientRect();


                if (top < 0) continue;

                if (activeHeading !== child.id) {
                    activeHeading = child.id;
                    
                    tableOfContent = tableOfContent.map((item) => {
                        item.active = item.id === child.id;
                        return item;
                    });
                }
            }

            if (lastScrollY < window.pageYOffset) {
                const child = children[tocLenght];
                const { top } = child.getBoundingClientRect();


                if (top > 750) continue;

                if (activeHeading !== child.id) {
                    activeHeading = child.id;
                    
                    tableOfContent = tableOfContent.map((item) => {
                        item.active = item.id === child.id;
                        return item;
                    });
                }
            }

            break;
        }

        lastScrollY = window.pageYOffset;
    }
</script>

<svelte:window on:scroll={onScroll} />

<div class="container">
    <div class="mt-16">
        <Button type="text" href="/">Retour</Button>
    </div>
    <div class="grid grid-cols-[3fr_1fr] gap-12 mt-4">
        <div>
            <div class="rounded-md">
                <img src={post.thumbnail} alt="Post Thumbnail" class="rounded-md shadow-xl shadow-primary/20 object-cover h-[400px] w-full">
            </div>
            <div class="text-center mt-12">
                <Heading>{post.title}</Heading>
            </div>
    
            <div class="mt-16">
                <article class="prose prose-invert max-w-none" bind:this={article}>
                    {@html data.content}
                </article>
            </div>

            <div class="mt-16">
                <PostAuthor author={post.author} />
            </div>
        </div>
    
        <div>
            <div class="sticky top-12 p-4">
                <h3 class="text-neutral-200 font-semibold text-xl">Table des matières</h3>

                <div class="mt-4">
                    {#each tableOfContent as tag}
                        <a href={`#${tag.id}`} class={`block  mb-2 last:mb-0 ${tag.active ? 'text-primary' : 'text-neutral-400'}`}>{tag.name}</a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
