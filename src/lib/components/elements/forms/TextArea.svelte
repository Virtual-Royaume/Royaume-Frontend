<script lang="ts">
    export let placeholder: string | null = null;
    export let label: string;
    export let name: string;
    export let autofocus: boolean = false;
    export let required: boolean = false;
    export let value: string = '';
    export let disable: boolean = false;
    export let rows: number = 6;
</script>

<label class="flex flex-col">
    <span class="text-neutral-200 font-medium uppercase text-sm text-left mb-1">{label}</span>

    <!-- svelte-ignore a11y-autofocus -->
    <textarea class="text-neutral-400 outline-none border border-neutral-600 focus:border-lightprimary rounded-md px-2 py-1 font-medium bg-neutral-800 disabled:bg-neutral-700" rows={rows} placeholder={placeholder} value={value} name={name} autofocus={autofocus} required={required} disabled={disable}></textarea>
</label>

