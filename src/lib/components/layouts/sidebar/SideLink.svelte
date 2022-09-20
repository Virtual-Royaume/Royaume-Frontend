<script lang="ts">
    export let href: string;
</script>

<li>
    <a href={href} class="no-underline font-medium text-neutral-300 transition-all hover:bg-darkprimary flex p-2 rounded-md">
        <slot></slot>
    </a>
</li>