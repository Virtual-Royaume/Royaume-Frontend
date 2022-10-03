<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Typography from './typography.svelte';
</script>

<Meta 
    title="Typography" 
    component={Typography}
    argTypes={{
        variant: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"] },
        align: { control: "select", options: ["left", "center", "right", "justify", "start", "end"] }
    }}
/>

<Template let:args>
    <Typography {...args}>Text</Typography>
</Template>

<Story name="H1" args={{ variant: "h1" }}/>

<Story name="H2" args={{ variant: "h2" }}/>

<Story name="H3" args={{ variant: "h3" }}/>

<Story name="H4" args={{ variant: "h4" }}/>

<Story name="H5" args={{ variant: "h5" }}/>

<Story name="H6" args={{ variant: "h6" }}/>