<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { Button } from ".";
</script>

<Meta title="Button" component={Button} />

<Template let:args>
  <Button {...args}>
    You clicked
  </Button>
</Template>

<Story name="Default" />