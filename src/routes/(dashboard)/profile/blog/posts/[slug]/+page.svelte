<script lang="ts">
    import Button from '@components/elements/forms/Button.svelte';
    import TextInput from '@components/elements/forms/input/TextInput.svelte';
    import TextArea from '@components/elements/forms/TextArea.svelte';
    import MdEditor from '@components/elements/markdown/editor/MdEditor.svelte';
    import Heading from "@components/layouts/typography/Heading.svelte";
    import { marked } from 'marked';

    import type { PageData } from './$types';
    
    export let data: PageData;
    const post = data.post;

    let source: string = '';
    $: markdown = marked(source);
</script>

<div>
    <div class="mb-16">
        <Heading>Modifier un article</Heading>
    </div>
    <div>
        <label class="group cursor-pointer">
            <img src={post.thumbnail} alt="Post Thumbnail" class="rounded-md mb-6 group-hover:brightness-50 transition-all duration-300">
            <input type="file" class="hidden">

            <svg class="fill-neutral-200 absolute w-24 h-24 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
                <g>
                    <g>
                        <g>
                            <path d="M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                                c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                                C262.1,7.6,254.5,0,245,0z"/>
                            <path d="M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                                s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </label>

        <form>
            <TextInput name="title" label="Titre" value={post.title} />
    
            <div class="mt-6">
                <TextArea name="description" label="Description" rows={3} value={post.description} />
            </div>
    
            <div class="mt-6">
                <span class="text-neutral-200 font-medium uppercase text-sm text-left mb-1">Contenu</span>
    
                <div class="flex flex-col gap-4">
                    <div class="overflow-y-auto h-[400px] bg-neutral-800 p-2 rounded-md border border-neutral-600">
                        <div class="prose prose-invert max-w-none prose-img:max-h-96 prose-img:w-auto prose-img:max-w-[95%]">
                            {@html markdown}
                        </div>
                    </div>
                    <div>
                        <textarea class="w-full h-[275px] text-neutral-400 outline-none resize-none bg-neutral-800 p-2 rounded-md border border-neutral-600 focus:border-lightprimary" bind:value={source} name="content"></textarea>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <MdEditor />
            </div>
    
            <div class="flex justify-end mt-3">
                <Button variant="contained" type="submit">Modifier l'article</Button>
            </div>
        </form>
    </div>
</div>