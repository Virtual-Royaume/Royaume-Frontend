<script lang="ts">
    import { clsx } from "clsx";

    import type { Align, TypoVariant } from "./typography.type";

    export let variant: TypoVariant;

    export let align: Align = "left";

    export let noWrap: boolean = false;

    const className = clsx({
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right",
        "text-justify": align === "justify",
        "text-start": align === "start",
        "text-end": align === "end",

        "whitespace-normal": !noWrap,
        "whitespace-nowrap": noWrap,

        "text-[80px] font-medium": variant === "h1",
        "text-[60px] font-medium": variant === "h2",
        "text-[48px]": variant === "h3",
        "text-[34px]": variant === "h4",
        "text-[24px]": variant === "h5",
        "text-[20px]": variant === "h6",
        "text-[16px]": variant === "body1",
        "text-[14px]": variant === "body2"
    });

    let tag: string = variant;
    if (variant.startsWith("body")) tag = "p";
</script>

<svelte:element this={tag} class={className}>
    <slot />
</svelte:element>