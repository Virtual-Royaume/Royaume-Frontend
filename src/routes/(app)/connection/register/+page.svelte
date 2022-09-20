<script lang="ts">
    import Button from "@components/elements/forms/Button.svelte";
    import Checkbox from "@components/elements/forms/Checkbox.svelte";
    import TextInput from "@components/elements/forms/input/TextInput.svelte";
    import Heading from "@components/layouts/typography/Heading.svelte";

    const onSubmitForm = (event: SubmitEvent) => {

    }

</script>

<div class="max-w-lg mx-auto text-center mt-20">

    <div class="mb-12 mt-28">
        <Heading>S'enregistrer</Heading>
    </div>

    <form on:submit|preventDefault={onSubmitForm}>
        <TextInput label="Nom d'utilisateur" name="username" autofocus required />
        <TextInput label="Email" type="email" name="email" required />
        <TextInput label="Mot de passe" type="password" name="password" required />

        <Checkbox label="Accepter les conditions d'utilisation" name="acceptConditions" />

        <div class="mt-12">
            <Button variant="contained" extend={true}>S'enregistrer</Button>
        </div>
    </form>

    <div>
        <p class="text-neutral-300 mt-10">
            Vous avez déjà un compte ?
            <a href="/connection/login" class="link">Se connecter</a>
        </p>
    </div>
</div>