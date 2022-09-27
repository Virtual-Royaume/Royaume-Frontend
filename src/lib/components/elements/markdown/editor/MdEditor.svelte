<script lang="ts">
    import { marked } from 'marked';
    import { element } from 'svelte/internal';

    let inputRef: HTMLDivElement;
    let value: string;

    const onType = (event: any) => { 
        const children = marked.lexer(event.target.innerText);

        console.log(children)

        let content = '';
        children.forEach((child: marked.Token) => {
            content += getTag(child);
        })

    }

    const getTag = (element: marked.Token): string => {
        if (element.type === 'heading') {
            if (element.depth === 1) {
                return '<span class="font-bold text-2xl">' + element.raw + '</span>';
            }
            if (element.depth === 2) {
                return '<span class="font-bold text-xl">' + element.raw + '</span>';
            }
            return '<span class="font-bold text-2xl">' + element.raw + '</span>';
        }

        if (element.type === 'space') {
            return '<br>'
        }


        return element.raw;
    }
</script>

<div bind:this={inputRef} bind:textContent={value} contenteditable on:input={onType} class="w-full text-neutral-400 outline-none resize-none bg-neutral-800 p-2 rounded-b-md border border-neutral-600 focus:border-lightprimary">
</div>