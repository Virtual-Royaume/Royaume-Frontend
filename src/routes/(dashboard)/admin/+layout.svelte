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
    <div class="mb-48 ml-[320px] p-8">
        <slot></slot>
    </div>
</div>
