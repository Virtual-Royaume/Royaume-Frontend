<script lang="ts">
  // Props :
  export let files: File[] = [];

  $: datas = files.map((file) => {
    return URL.createObjectURL(file);
  });


</script>

{#if files.length > 0}
  <div class="flex gap-2 overflow-x-scroll mt-4">
    {#each datas as data, i}
      <img src={data.toString()} alt={i + " Preview"} class="h-24 rounded-md">
    {/each}
  </div>
{/if}
