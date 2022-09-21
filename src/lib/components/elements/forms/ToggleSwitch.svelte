<script lang="ts">
    export let label: string | null = null;
    export let name: string;

    let isChecked = false;
</script>

<label class="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" name={name} bind:checked={isChecked}>
    <div class="w-11 h-6 bg-neutral-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    {#if label}
        <span class="text-neutral-400 text-sm ml-2 select-none">{label}</span>
    {/if}
  </label>