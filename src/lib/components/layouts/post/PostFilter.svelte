<script lang="ts">
    import { onMount } from "svelte";
    import settings from "$lib/stores/settings";
    import PostFilterSection from "./PostFilterSection.svelte";

    let dropdown: HTMLDivElement;
    let dropdownContainer: HTMLDivElement;

    onMount(() => {        
        if ($settings.isFilterOpened) {
            dropdownContainer.style.height = dropdown.offsetHeight + 'px';
        } else {
            dropdownContainer.style.height = '0';
        }
    });

    const toggleDropdown = () => {
        if (!$settings.isFilterOpened) {
            dropdownContainer.style.height = dropdown.offsetHeight + 'px';
        } else {
            dropdownContainer.style.height = '0';
        }

        settings.update((value) => {
            value.isFilterOpened = !$settings.isFilterOpened;
            return value;
        });
    }
</script>

<div>
    <div class="flex items-center justify-between border-b-2 pb-1 cursor-pointer mb-4" on:click={toggleDropdown}>
        <h3 class="text-neutral-200 font-semibold text-xl">Filtres</h3>
        <svg class={`h-4 w-4 fill-neutral-200 transition-transform duration-300 ${$settings.isFilterOpened ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 123.97 123.97" style="enable-background:new 0 0 123.97 123.97;" xml:space="preserve">
            <g>
                <path d="M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3
                    c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5
                    c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z"/>
            </g>
        </svg>
    </div>

    <div bind:this={dropdownContainer} class="overflow-hidden transition-all duration-300">
        <div bind:this={dropdown}>
            <PostFilterSection title="Catégories" tags={[
                { id: 1, name: 'Crypto' },
                { id: 2, name: 'Http' },
                { id: 3, name: 'Informatique' },
                { id: 4, name: 'Vie de développeur' }
                ]} />
            <PostFilterSection title="Tags" tags={[
                 { id: 1, name: 'Javascript' },
                 { id: 2, name: 'PHP' },
                 { id: 3, name: 'Golang' },
                 { id: 4, name: 'Bitcoin' }
                ]} />
        </div>
    </div>
</div>