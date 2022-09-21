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
        <Heading>Se connecter</Heading>
    </div>

    <form on:submit|preventDefault={onSubmitForm}>
        <div class="mb-6">
            <TextInput label="Email" name="email" autofocus required />
        </div>
        <div class="mb-6">
            <TextInput label="Mot de passe" type="password" name="password" required />
        </div>

        <Checkbox label="Se souvenir de moi" name="remindMe" />

        <div class="mt-12">
            <Button variant="contained" extend={true}>Se connecter</Button>
        </div>
    </form>

    <div class="flex justify-center gap-2 mt-6">
        <a href="/connection/login" class="bg-white rounded-md py-2 px-10 w-fit border-2 border-neutral-300">
            <img src="/images/login/google.png" alt="Google logo" class="h-5">
        </a>
        <a href="/connection/login" class="bg-white rounded-md py-2 px-10 w-fit border-2 border-neutral-300">
            <img src="/images/login/apple.png" alt="Apple logo" class="h-5">
        </a>
        <a href="/connection/login" class="bg-white rounded-md py-2 px-10 w-fit border-2 border-neutral-300">
            <img src="/images/login/github.png" alt="Github logo" class="h-5">
        </a>
    </div>

    <div>
        <p class="text-neutral-300 mt-10">
            Vous n'avez pas de compte ?
            <a href="/connection/register" class="link">S'enregistrer</a>
        </p>
    </div>
</div>