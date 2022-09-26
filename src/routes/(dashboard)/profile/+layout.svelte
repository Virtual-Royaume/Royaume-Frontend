<script lang="ts">
    import '@css/global.css';

    import ProfileSidebar from '@components/layouts/sidebar/ProfileSidebar.svelte';
</script>

<svelte:head>
    <title>Accueil - Royaume</title>
</svelte:head>

<div class="flex">
    <div class="min-w-[320px]">
        <ProfileSidebar />
    </div>
    <div class="p-8 m-16 w-full grid grid-cols-[3fr_350px]">
        <slot></slot>
    </div>
</div>
