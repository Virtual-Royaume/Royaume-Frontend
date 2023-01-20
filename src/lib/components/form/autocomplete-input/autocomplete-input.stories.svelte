<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { AutocompleteInput } from ".";
</script>
  
  <Meta 
    title="Form/AutocompleteInput"
    component={AutocompleteInput}
    argTypes={{
      color: { control: "select", options: ["primary", "secondary", "success", "warning", "error"] },
      label: { control: "text" },
      placeholder: { control: "text" },
      type: { control: "select", options: ["text", "password", "email"] },
      autofocus: { control: "boolean" },
      required: { control: "boolean" },
      value: { control: "text" },
      disabled: { control: "boolean" },
      size: { control: "select", options: ["small", "normal", "large"] }
    }}
    args={{
      options: ["Alex1s", "Ascarde", "Aurélienvt", "Azalee", "Bastien", "beginnertoad", "Bluzzi", "Bluzzo", "Bourdon", "Cara", "Dannly", "Dylan L.", "Eliott", "Enely", "Ethan", "Galaad14", "Gaëtan", "Gislaine", "Glaski", "Hola", "Hugo", "Jed", "Julos", "Juuu", "King", "Loupio"]
    }}
/>
  
<Template let:args>
  <AutocompleteInput {...args}/>
</Template>

<Story name="Default"/>