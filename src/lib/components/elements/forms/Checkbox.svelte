<script lang="ts">
    export let label: string | null = null;
    export let name: string;

    let isChecked = false;
</script>

<label class="flex items-center">
    <div class="relative border-[2px] border-neutral-400 rounded w-5 h-5 text-neutral-400">
        <input type="checkbox" class="opacity-0 absolute inset-0" name={name} bind:checked={isChecked}>
        {#if isChecked}
            <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
            </svg>
        {/if}
    </div>
    {#if label}
        <span class="text-neutral-400 text-sm ml-2 select-none">{label}</span>
    {/if}
</label>