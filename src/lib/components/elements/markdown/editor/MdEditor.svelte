<script lang="ts">
    import { fromMarkdown } from "mdast-util-from-markdown";
    import type { Content } from "mdast";

    let inputRef: HTMLDivElement;
    let value: string;

    const onType = (event: any) => { 
        event.preventDefault();
        const children = fromMarkdown(event.target.innerText).children;


        let content = '';
        children.forEach((child: Content) => {            
            content += getTag(child);
            content += '<p><br /></p>'
        });

        event.target.innerHTML = content;
    }

    const getCleanText = (txt: string): string => {
        let sanitizedText = txt.replace(/^\s*\n/gm, '<p><br /></p>');

        sanitizedText = sanitizedText.replace(/<\/?span[^>]*>/g, '');

        sanitizedText =  sanitizedText.replace(/class='[a-zA-Z0-9:;\\.\\s\\(\\)\\-\\,]*'/g, '');

        return sanitizedText;
    }


    const onPaste = (event: ClipboardEvent) => {
        event.preventDefault();

        const pastedText = event.clipboardData?.getData('text');
        if (!pastedText) return;

        document.execCommand('insertHTML', false, getCleanText(pastedText));
    }

    const getTag = (element: Content, parent: Content | null = null): string => {
        if (parent) {
            if (parent.type === 'heading' && element.type === 'text') {
                if (parent.depth === 1) {
                    return '<span class="font-bold text-2xl">' + element.value + '</span>';
                } else {
                    return '<span class="font-bold text-xl">' + element.value + '</span>';
                }
            }

            return '';
        } else {
            if (element.type === 'heading' || element.type === 'blockquote') {
                return getTag(element.children[0], element);
            }
            if (element.type === 'paragraph') {
                return (
                    '<span>' + 
                        element.children.map((child) => getTag(child, element))
                    + '</span>'
                );
            }

            return '';
        }
    }
</script>

<div bind:this={inputRef} bind:textContent={value} contenteditable on:paste={onPaste} on:input={onType} class="w-full text-neutral-400 outline-none resize-none bg-neutral-800 p-2 rounded-b-md border border-neutral-600 focus:border-lightprimary">
</div>