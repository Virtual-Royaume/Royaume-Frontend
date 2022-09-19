<script lang="ts">
    import settings from "$lib/stores/settings";
    import { onMount } from "svelte";

    let isOpen: boolean = true;

    onMount(() => update());

    const update = () => isOpen = $settings.isHamburgerOpened;

    const toggle = () => {
        settings.update((value) => {
            value.isHamburgerOpened = !$settings.isHamburgerOpened ?? !isOpen;
            return value;
        });

        update()
    }
</script>

<div class="w-[35px] h-[25px] m-3 relative cursor-pointer inline-block transition-transform duration-300" class:open={isOpen} on:click={toggle}>
    <span class="bg-neutral-200 absolute rounded-md w-full h-[3px] block left-0 top-0"></span>
    <span class="bg-neutral-200 absolute rounded-md w-full h-[3px] block left-0 top-[11px]"></span>
    <span class="bg-neutral-200 absolute rounded-md w-full h-[3px] block left-0 bottom-0"></span>
</div>

<style>
    div span {
        transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    }

    div.open {
        transform: rotate(90deg);
    }

    div.open span:nth-child(1) {
        left: 3px;
        top: 12px;
        width: 30px;
        transition: .3s cubic-bezier(.8, .5, .2, 1.4);
        transform: rotate(90deg);
        transition-delay: 150ms;
    }

    div.open span:nth-child(2) {
        left:2px;
        top: 20px;
        width: 20px;
        transition: .3s cubic-bezier(.8, .5, .2, 1.4);
        transform: rotate(45deg);
        transition-delay: 50ms;
    }

    div.open span:nth-child(3) {
        left:14px;
        top: 20px;
        width: 20px;
        transition: .3s cubic-bezier(.8, .5, .2, 1.4);
        transform: rotate(-45deg);
        transition-delay: 100ms;
    }
</style>