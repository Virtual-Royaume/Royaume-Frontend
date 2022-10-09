<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Select } from ".";
</script>

<Meta 
  title="Form/Select"
  component={Select}
  args={{
    options: [
      {
        img: "https://cdn.discordapp.com/avatars/533306853317279773/6eac2d06855a52de73bc48343a00a2c1.webp",
        value: "RomainSav"
      },
      {
        img: "https://cdn.discordapp.com/avatars/233351173665456129/a_cee03ee0f97ee3c550840d584bc55c21.webp",
        value: "Bluzzi"
      },
      {
        img: "https://cdn.discordapp.com/avatars/504392983244832780/9ff08250c46bfd775c5b30a73e1a48a8.webp",
        value: "Gaëtan"
      },
      {
        img: "https://cdn.discordapp.com/avatars/846395226640613396/36416425f0b9ce07f65a486dc4bd280b.webp",
        value: "Azalee"
      },
      {
        img: "https://cdn.discordapp.com/avatars/111448653142515712/d4911b6c2a572e2d858f4682bc1ff077.webp",
        value: "Melvyn"
      },
      {
        img: "https://cdn.discordapp.com/avatars/767841090551545878/f1dc02ac5efa4b30d183661e75574409.webp",
        value: "Onirez"
      },
      {
        img: "https://cdn.discordapp.com/avatars/810596177857871913/70bc31a36119b427c5c354ecd3da94e2.webp",
        value: "szeroki"
      }
    ]
  }}
/>

<Template let:args>
  <Select {...args}/>
</Template>

<Story name="Default"/>