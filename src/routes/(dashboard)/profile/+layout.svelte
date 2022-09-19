<script lang="ts">
    import '@css/global.css';

    import ProfileSidebar from '@components/layouts/sidebar/ProfileSidebar.svelte';

    let isSidebarOpened: boolean;
</script>

<svelte:head>
    <title>Accueil - Royaume</title>
</svelte:head>

<!--<ProfileNavbar bind:isSidebarOpened={isSidebarOpened} />-->
<div class="flex">
    <ProfileSidebar />
    <div class="mb-48">
        <slot></slot>
    </div>
</div>
