<script lang="ts">
    export let author: any;
</script>

<div class="flex items-center">
    <img src={author.avatar} alt={`${author.username} Avatar`} class="rounded-full h-28 w-28">

    <div class="ml-4">
        <p class="text-neutral-200 font-semibold text-xl">{author.username}</p>
        <p class="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum adipisci totam dolorem enim optio reiciendis aperiam? Non, excepturi reprehenderit!</p>
    </div>
</div>