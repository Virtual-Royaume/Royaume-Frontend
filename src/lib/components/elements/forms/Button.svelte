<script lang="ts">
    export let href: null | string = null;
    export let type: 'outlined' | 'contained' | 'text';
    export let onClick: () => void = () => {};

    const outlinedStyles = 'text-primary border-primary hover:border-neutral-400 hover:bg-lightprimary/10';
    const containedStyles = 'text-neutral-200 bg-primary border-transparent hover:bg-darkprimary';
    const textStyles = 'text-primary border-transparent hover:bg-lightprimary/10';
</script>

{#if href}
    <a href={href}>
        <button class={`select-none	table-cell py-1 px-4 rounded-md font-semibold transition-all border-2 ${type === 'outlined' ? outlinedStyles : ''} ${type === 'contained' ? containedStyles : ''} ${type === 'text' ? textStyles : ''}`}>
            <slot></slot>
        </button>
    </a>
{:else}
    <button on:click={onClick} class={`select-none table-cell py-1 px-4 rounded-md font-semibold transition-all border-2 ${type === 'outlined' ? outlinedStyles : ''} ${type === 'contained' ? containedStyles : ''} ${type === 'text' ? textStyles : ''}`}>
        <slot></slot>
    </button>
{/if}

