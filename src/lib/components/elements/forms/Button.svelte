<script lang="ts">
    export let href: null | string = null;
    export let variant: 'outlined' | 'contained' | 'text';
    export let onClick: () => void = () => {};
    export let extend: boolean = false;

    const outlinedStyles = 'text-primary border-primary hover:border-neutral-400 hover:bg-lightprimary/10';
    const containedStyles = 'text-neutral-200 bg-primary border-transparent hover:bg-darkprimary';
    const textStyles = 'text-primary border-transparent hover:bg-lightprimary/10';
</script>

{#if href}
    <a href={href}>
        <button class:w-full={extend} class={`select-none table-cell py-1 px-4 rounded-md font-semibold transition-all border-2 ${variant === 'outlined' ? outlinedStyles : ''} ${variant === 'contained' ? containedStyles : ''} ${variant === 'text' ? textStyles : ''}`}>
            <slot></slot>
        </button>
    </a>
{:else}
    <button class:w-full={extend} on:click={onClick} class={`select-none table-cell py-1 px-4 rounded-md font-semibold transition-all border-2 ${variant === 'outlined' ? outlinedStyles : ''} ${variant === 'contained' ? containedStyles : ''} ${variant === 'text' ? textStyles : ''}`}>
        <slot></slot>
    </button>
{/if}

