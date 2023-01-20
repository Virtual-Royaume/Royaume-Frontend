<script lang="ts">
  import { Text } from "../../texts/text";

  // Props :
  export let title: string;
  export let subTitle: string | null = null;
  export let description: string | null = null;
  export let image: string | null = null;
  export let onClick: (event: MouseEvent) => void = () => null;
  export let href: string | null = null;
</script>

{#if href}
  <a href={href}>
    <div class="shadow-md w-full sm:w-80 rounded-md">
      {#if image}
        <img src={image} alt="Card Thumbnail" class="rounded-t-md w-full aspect-video object-cover h-44">    
      {/if}  
    
      <div class="p-4">
        <div>
          <Text type="h2" size="large" fontWeight="medium">{title}</Text>
          {#if subTitle}
            <Text type="h3" size="small" fontWeight="light">{subTitle}</Text>
          {/if}
        </div>
    
        {#if description}
          <div class="mt-3 text-justify">
            <Text type="p" size="small" lineClamp={3}>{description}</Text>
          </div>
        {/if}
      </div> 
    </div>
  </a>
{:else}
  <div class="shadow-md w-full sm:w-80 rounded-md cursor-pointer" on:click={onClick}>
    {#if image}
      <img src={image} alt="Card Thumbnail" class="rounded-t-md w-full aspect-video object-cover h-44">    
    {/if}  
  
    <div class="p-4">
      <div>
        <Text type="h2" size="large" fontWeight="medium">{title}</Text>
        {#if subTitle}
          <Text type="h3" size="small" fontWeight="light">{subTitle}</Text>
        {/if}
      </div>
  
      {#if description}
        <div class="mt-3 text-justify">
          <Text type="p" size="small" lineClamp={3}>{description}</Text>
        </div>
      {/if}
    </div>  
  </div>
{/if}