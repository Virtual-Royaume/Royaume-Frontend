<script lang="ts">
    export let placeholder: string | null = null;
    export let label: string;
    export let type: 'text' | 'password' | 'email' = 'text';
    export let name: string;
</script>

<label class="flex flex-col mb-6">
    <span class="text-neutral-200 font-medium text-left mb-1">{label}</span>
    <input type={type} placeholder={placeholder} name={name} class="text-neutral-400 outline-none border border-neutral-600 focus:border-lightprimary rounded-md px-2 py-1 font-medium bg-neutral-800">
</label>