<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let baseValue: null | string = null;
    onMount(() => {
        baseValue = $page.url.searchParams.get('q') ?? null;
    });

    const submitForm = (event: SubmitEvent) => {
        const searchParams = new URLSearchParams($page.url.searchParams);

        if (!event.target) return;

        const formData = new FormData(<HTMLFormElement>event.target);
        if (formData.get('query')?.toString().length ?? 0 > 0) {
            searchParams.set('q', formData.get('query')?.toString() ?? '');
        } else {
            searchParams.delete('q');
        }

        goto($page.url.pathname + '?' + searchParams.toString(), {
            noscroll: true
        });
    }
</script>

<form class="flex items-center bg-white py-2 px-3 rounded-md shadow-md" on:submit|preventDefault={submitForm}>
    <button type="submit">
        <div class="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16" class="fill-primary">
                <path d="M23.41 20.59 18.77 16a10.25 10.25 0 1 0-8.52 4.56 10.14 10.14 0 0 0 5.69-1.74l4.65 4.65a2 2 0 0 0 2.82 0 2 2 0 0 0 0-2.88ZM10.25 3A7.25 7.25 0 1 1 3 10.26 7.26 7.26 0 0 1 10.25 3Z" transform="scale(2)"></path>
            </svg>
        </div>
    </button>
    
    <input type="text" placeholder="Rechercher un article" class="outline-none" name="query" value={baseValue}>
</form>