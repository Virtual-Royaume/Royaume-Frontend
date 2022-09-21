<script lang="ts">
    export let placeholder: string | null = null;
    export let label: string;
    export let type: 'text' | 'password' | 'email' = 'text';
    export let name: string;
    export let autofocus: boolean = false;
    export let required: boolean = false;
</script>

<label class="flex flex-col">
    <span class="text-neutral-200 font-medium uppercase text-sm text-left mb-1">{label}</span>

    <!-- svelte-ignore a11y-autofocus -->
    <input type={type} placeholder={placeholder} name={name} autofocus={autofocus} required={required} class="text-neutral-400 outline-none border border-neutral-600 focus:border-lightprimary rounded-md px-2 py-1 font-medium bg-neutral-800">
</label>