<script lang="ts">
    import { onMount } from "svelte";
    import settings from "$lib/stores/settings";


    export let title: string;
    export let id: string;

    let container: HTMLDivElement;
    let content: HTMLUListElement;

    onMount(() => update());

    const update = () => {
        if ($settings.closedSidebarMenus?.includes(id)) {
            container.style.height = '0';
        } else {
            container.style.height = content.offsetHeight + 'px';
        }
    }

    const toggle = () => {
        if (!$settings.closedSidebarMenus) $settings.closedSidebarMenus = [];

        if ($settings.closedSidebarMenus.includes(id)) {
            settings.update((state) => {
                state.closedSidebarMenus = state.closedSidebarMenus.filter((item) => item !== id);
                return state;
            })
        } else {
            settings.update((state) => {
                state.closedSidebarMenus.push(id);
                return state;
            })
        }

        update();
    }
</script>

<div class="border-b border-lightprimary mb-4 pb-4">
    <div class="flex justify-between items-center mb-2">
        <h3 class="uppercase tracking-widest text-neutral-200 font-semibold text-sm">{title}</h3>
        <svg on:click={toggle} class="fill-neutral-200 w-3 h-3 cursor-pointer transition-transform duration-300" class:rotate-180={$settings.closedSidebarMenus?.includes(id)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30.727 30.727" style="enable-background:new 0 0 30.727 30.727;" xml:space="preserve">
            <g>
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
                    l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
            </g>
        </svg>
    </div>

    <div class="overflow-hidden transition-all duration-300" bind:this={container}>
        <ul bind:this={content}>
            <slot></slot>
        </ul>
    </div>
</div>