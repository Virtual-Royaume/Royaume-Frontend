<script lang="ts">
    import Button from "@components/elements/forms/Button.svelte";
    import TextInput from "@components/elements/forms/input/TextInput.svelte";
    import Heading from "@components/layouts/typography/Heading.svelte";

    let avatarRef: HTMLImageElement;

    const uploadAvatar = (event: any) => {
        const target = <HTMLInputElement>event.target;
        if (!target.files || target.files.length <= 0) return;

        const avatar: File = target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result?.toString() !== 'string') return;

            avatarRef.src = reader.result.toString();
        }

        reader.readAsDataURL(avatar);
    }
</script>

<div>
    <div class="mb-16">
        <Heading>Modifier le profil</Heading>
    </div>
    <div class="grid grid-cols-[3fr_1fr] gap-16">
        <div>
            <div class="mb-16 flex justify-center">
                <label class="cursor-pointer rounded-full group relative">
                    <img bind:this={avatarRef} class="rounded-full w-32 h-32 group-hover:brightness-50 transition-all duration-300 object-cover" src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png" alt="Your Avatar">
                    <input type="file" class="hidden" on:change={uploadAvatar}>

                    <svg class="fill-neutral-200 absolute w-12 h-12 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
                        <g>
                            <g>
                                <g>
                                    <path d="M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                                        c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                                        C262.1,7.6,254.5,0,245,0z"/>
                                    <path d="M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                                        s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </label>
            </div>

            <div class="mb-16">
                <h2 class="text-neutral-200 font-bold text-2xl mb-4">Mes informations</h2>
                <form>
                    <div class="bg-neutral-800 rounded-md border border-neutral-600 p-6 grid grid-cols-2 gap-6">
                        <TextInput label="Nom d'utilisateur" name="username" />
                        <TextInput label="Email" name="email" type="email" />
                    </div>
    
                    <div class="flex justify-end mt-3">
                        <Button variant="contained">Modifier mon profil</Button>
                    </div>
                </form>
            </div>

            <div>
                <h2 class="text-neutral-200 font-bold text-2xl mb-4">Centre de contrôle</h2>
            </div>
        </div>
    
        <div>
            <div>
                <h3 class="text-neutral-300 font-semibold text-md">Connexion à discord</h3>
            </div>
    
            <div>
                <h3 class="text-neutral-300 font-semibold text-md">Réseaux sociaux</h3>
            </div>
        </div>
    </div>
</div>