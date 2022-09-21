<script lang="ts">
    import '@css/global.css';

    import ProfileSidebar from '@components/layouts/sidebar/ProfileSidebar.svelte';

    let isSidebarOpened: boolean;
</script>

<svelte:head>
    <title>Accueil - Royaume</title>
</svelte:head>

<div class="flex">
    <div class="min-w-[320px]">
        <ProfileSidebar />
    </div>
    <div class="mb-48 p-8 m-16 w-full">
        <slot></slot>
    </div>
</div>
