<script lang="ts">
    import Button from '@components/elements/forms/Button.svelte';
    import PostAuthor from '@components/layouts/post/PostAuthor.svelte';
    import Heading from '@components/layouts/typography/Heading.svelte';
    import { onMount } from 'svelte';

    export let data: any;
    const post = data.post;

    let article: HTMLElement;
    let toc: HTMLElement;
    let tocBar: HTMLElement;

    let tableOfContent: { id: string, name: string, active: boolean }[] = [];
    let activeHeading: string | null = null;

    let lastScrollY = -1;

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

        onScroll();
    });

    const onScroll = () => {
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

                    moveTocLine(child.id);
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

                    moveTocLine(child.id);
                }
            }

            break;
        }

        lastScrollY = window.pageYOffset;
    }

    const moveTocLine = (id: string) => {
        const step = toc.offsetHeight / tableOfContent.length + 1;
        const index = tableOfContent.findIndex((item) => item.id === id);

        tocBar.style.transform = `translateY(${step * (index)}px)`;
    }

    const scrollToElement = (id: string) => {
        const heading = document.getElementById(id);
        if (!heading) return;

        heading.scrollIntoView({ block: 'start' });
    }
</script>

<svelte:window on:scroll={onScroll} />

<div class="container">
    <div class="mt-16">
        <Button variant="text" onClick={() => history.back()}>Retour</Button>
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
                <article class="prose prose-invert max-w-none prose-img:max-h-96 prose-img:w-auto prose-img:max-w-[95%]" bind:this={article}>
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

                <div class="mt-4 relative" bind:this={toc}>
                    <span class="absolute h-5 w-[3px] rounded-md bg-primary top-[2px] transition-transform" class:opacity-0={!tableOfContent.find((item) => item.active === true)} bind:this={tocBar}></span>

                    <div>
                        {#each tableOfContent as tag}
                            <li on:click={() => scrollToElement(tag.id)} class={`cursor-pointer line-clamp-1 block pl-3 mb-2 last:mb-0 ${tag.active ? 'text-primary' : 'text-neutral-400'}`}>{tag.name}</li>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
