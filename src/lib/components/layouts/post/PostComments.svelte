<script lang="ts">
    import { timeAgo } from '$lib/utils/date-ago';
    import Button from '@components/elements/forms/Button.svelte';
    import { comment } from 'postcss';

    export let user: any;
    export let comments: { id: number, author: any, content: string, createdAt: string }[];

    let commentInputTouched = false;
	let commentInput: HTMLTextAreaElement;

    const textAreaAdjust = () => {
        commentInput.style.height = '5px';
		commentInput.style.height = (commentInput.scrollHeight) + 'px';

        console.log(commentInput.scrollHeight)
    }

    const commentOff = () => {
        commentInputTouched = false;
        commentInput.value = '';
        textAreaAdjust();
    }
</script>

<div>
    <h2 class="text-neutral-200 font-semibold text-2xl">{comments.length} Commentaire(s)</h2>

    <form on:submit|preventDefault={null} class="grid grid-cols-[45px_1fr] gap-4 mt-5">
        <div>
            <img class="rounded-full h-[45px] w-[45px]" src={user?.avatar ?? 'https://www.fau.edu/engineering/research/c2a2/images/personnel/balloun.jpg'} alt="Avatar">
        </div>

        <div>
            <div class="border-b border-neutral-700">
                <textarea name="content" rows="1" placeholder="Ajouter un commentaire" 
                            class="resize-none border-none outline-none rounded-md w-full bg-transparent text-neutral-300"
                            on:input={textAreaAdjust} on:click={() => commentInputTouched = true} bind:this={commentInput}></textarea>
            </div>

            {#if commentInputTouched}
            <div class="flex w-full items-center justify-end mt-3 gap-2">
                <Button variant="text" type="button" onClick={commentOff}>Annuler</Button>
                <Button variant="contained" type="submit">Envoyer le commentaire</Button>
            </div>
            {/if}
        </div>
    </form>

    {#if comments.length > 0}
    <div class="mt-16">
        {#each comments as comment}
        <div class="grid grid-cols-[45px_1fr] gap-4 mb-10 last:mb-0">
            <a href="/" class="flex items-start">
                <img class="rounded-full h-[45px] w-[45px]" src={comment.author.avatar} alt="Comment Author Avatar">
            </a>
            <div>
                <div class="flex items-center mb-1">
                    <a href="/" class="text-neutral-100 font-medium text-sm mr-4">{comment.author.username}</a>
                    <span class="text-sm text-neutral-500">{timeAgo(new Date(comment.createdAt))}</span>
                </div>

                <p class="text-sm text-neutral-400">
                    {@html comment.content}
                </p>
            </div>
        </div>
        {/each}
    </div>    
    {/if}
</div>