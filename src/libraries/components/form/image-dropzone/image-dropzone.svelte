<script lang="ts">
  import { clsx } from "clsx";
  import { FileUploadIcon } from "../../../icons";
  import type { ImageDropzoneColor, ImageDropzoneSize } from "./image-dropzone.type";
  import Text from "../../texts/text/text.svelte";
  import type { FileType } from "../../../utils/types";

  // Props :
  export let multiple: boolean = false;
  export let color: ImageDropzoneColor = "primary";
  export let preview: boolean = false;
  export let size: ImageDropzoneSize = "normal";
  export let accepted: FileType[] = ["image/png"];

  let isHover: boolean = false;

  // Style :
  $: style = clsx("flex flex-col hover:bg-gray-2 transition-colors cursor-pointer border border-gray-2 justify-center items-center p-2 rounded-md shadow", {
    // Size :
    "h-28": size === "small",
    "h-40": size === "normal",
    "h-60": size === "large",

    // Ring :
    "hover:ring-primary-1/50": color === "primary",
    "hover:ring-secondary-1/50": color === "secondary",
    "hover:ring-success-1/50": color === "success",
    "hover:ring-warning-1/50": color === "warning",
    "hover:ring-error-1/50": color === "error",

    // Hover :
    "bg-gray-1": !isHover,
    "bg-gray-2": isHover
  });

  const upload = (event: DragEvent) => {
    let files: File[] = [];

    if (event.dataTransfer?.files) {
      [...event.dataTransfer.files].forEach((file, i) => {
        if (accepted.length > 0 && (!file.type || !accepted.includes(<FileType>file.type))) return;
        files = [...files, file];
      });
    }

    console.log(files);
  }
</script>

<label class={style}
  on:dragover|preventDefault={() => isHover = true}
  on:dragleave={() => isHover = false}
  on:drop|preventDefault={upload}
>
  <input type="file"class="hidden">

  <FileUploadIcon size={40} color="black" />
  <div class="text-center mt-4">
    <Text size="normal">Cliquer ou gilsser et déposer pour télécharger</Text>
  </div>

</label>