<script lang="ts">
    import '@css/global.css';

    import AdminSidebar from '@components/layouts/sidebar/AdminSidebar.svelte';
</script>

<svelte:head>
    <title>Accueil - Royaume</title>
</svelte:head>

<div class="flex">
    <div class="w-[320px]">
        <AdminSidebar />
    </div>
    <div class="p-8 m-16 w-full grid grid-cols-[3fr_350px]">
        <slot></slot>
    </div>
</div>
