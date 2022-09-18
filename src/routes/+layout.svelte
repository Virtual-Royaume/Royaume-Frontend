<script>
    import '@css/global.css';

    import Navbar from '@components/layouts/navbar/Navbar.svelte';
    import Footer from '@components/layouts/footer/Footer.svelte';
</script>

<svelte:head>
    <title>Accueil - Royaume</title>
</svelte:head>

<Navbar />
<div class="mb-24">
    <slot></slot>
</div>
<Footer />
