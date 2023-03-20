<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Card } from ".";
  
  export let Hst: Hst;

  export let title: string = "Title";
  export let subTitle: string = "Sous-titre";
  export let description: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas quasi explicabo dolore voluptatum! Illum?";
  export let image: string = "https://e2c-paris.fr/wp-content/uploads/2021/04/placeholder.jpg";
  export let href: string = "https://e2c-paris.fr";
</script>

<Hst.Story title="Containers/Card">
  <svelte:fragment slot="controls">
    <Hst.Text title="Texte" bind:value={title} />
    <Hst.Text title="Sous-titre" bind:value={subTitle} />
    <Hst.Text title="Description" bind:value={description} />
    <Hst.Text title="Image" bind:value={image} />
    <Hst.Text title="HREF" bind:value={href} />
  </svelte:fragment>

  <Hst.Variant>
    <Card title={title} subTitle={subTitle} description={description} image={image} href={href} />
  </Hst.Variant>
</Hst.Story>