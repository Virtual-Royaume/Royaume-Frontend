<script lang="ts">
    import Button from "@components/elements/forms/Button.svelte";
    import TextInput from "@components/elements/forms/input/TextInput.svelte";
    import ToggleSwitch from "@components/elements/forms/ToggleSwitch.svelte";
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
                <h2 class="text-neutral-200 font-bold text-2xl mb-4">Préférences</h2>
                <form>
                    <div class="bg-neutral-800 rounded-md border border-neutral-600 p-6 flex">
                        <ToggleSwitch name="useDiscordData" label="Utiliser les données de mon compte discord" />
                    </div>

                    <div class="flex justify-end mt-3">
                        <Button variant="contained">Modifier mes préférences</Button>
                    </div>
                </form>
            </div>
        </div>
    
        <div>
            <div>
                <h3 class="text-neutral-300 font-semibold text-md mb-3">Lier mes réseaux sociaux</h3>

                <div>
                    <div class="bg-white flex items-center px-2 py-1 rounded-md cursor-pointer mb-3 border-2 border-neutral-300">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="55" viewBox="0 0 71 55" fill="none" class="w-8 h-8 ">
                                <g clip-path="url(#clip0)">
                                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#23272A"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="71" height="55" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            <p class="text-black ml-3 font-medium">Discord</p>
                        </div>
                    </div>
                    <div class="bg-white flex items-center px-2 py-1 rounded-md cursor-pointer mb-3 border-2 border-neutral-300">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="h-8 w-8">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
                            </svg>
                            <p class="text-black ml-3 font-medium">Github</p>
                        </div>
                    </div>
                    <div class="bg-white flex items-center px-2 py-1 rounded-md cursor-pointer mb-3 border-2 border-neutral-300">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 305 305" style="enable-background:new 0 0 305 305;" xml:space="preserve" class="h-8 w-8">
                                <g>
                                    <path id="XMLID_229_" d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305   c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305   c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941   c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078   c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152   c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813   c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097   c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008   C78.894,73.643,54.298,88.535,40.738,112.119z"/>
                                    <path id="XMLID_230_" d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379   c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257   c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z"/>
                                </g>
                            </svg>
                            <p class="text-black ml-3 font-medium">Apple</p>
                        </div>
                    </div>
                    <div class="bg-white flex items-center px-2 py-1 rounded-md cursor-pointer border-2 border-neutral-300">
                        <div class="flex items-center">
                            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin"><path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z"/>
                            </svg>
                            <p class="text-black ml-3 font-medium">Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>