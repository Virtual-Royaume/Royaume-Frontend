<script lang="ts">
    import '@css/global.css';

    import Footer from '@components/layouts/footer/Footer.svelte';
    import AdminSidebar from '@components/layouts/sidebar/AdminSidebar.svelte';

    let isSidebarOpened: boolean;
</script>

<svelte:head>
    <title>Accueil - Royaume</title>
</svelte:head>

<!--<AdminNavbar bind:isSidebarOpened={isSidebarOpened} />-->
<div class="flex">
    <AdminSidebar />
    <div class="mb-48">
        <slot></slot>
    </div>
</div>
