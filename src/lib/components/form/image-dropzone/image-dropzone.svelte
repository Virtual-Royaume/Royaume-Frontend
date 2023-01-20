<script lang="ts">
  import { clsx } from "clsx";
  import { FileUploadIcon } from "../../../icons";
  import type { ImageDropzoneColor, ImageDropzoneSize } from "./image-dropzone.type";
  import Text from "../../texts/text/text.svelte";
  import type { FileType } from "../../../utils/types";
  import { Button } from "../../navigation/button";

  // Props :
  export let multiple = true;
  export let color: ImageDropzoneColor = "primary";
  export let size: ImageDropzoneSize = "normal";
  export let accepted: FileType[] = ["image/png", "image/jpeg"];

  let isHover = false;
  let files: File[] = [];

  $: datas = files.map((file) => URL.createObjectURL(file));

  // Style :
  $: style = clsx("flex hover:bg-gray-2 transition-colors cursor-pointer border border-gray-2 p-2 rounded-md shadow", {
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

  const dropFiles = (event: DragEvent) => {
    if (event.dataTransfer?.files) upload([...event.dataTransfer.files]);
    isHover = false;
  };

  const clickFiles = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) upload([...target.files]);
    isHover = false;
  };

  const upload = (dropFiles: File[]) => {
    files = [];

    if (dropFiles.length === 0) return;

    if (!multiple) dropFiles = [dropFiles[0]];
    dropFiles.forEach((file, i) => {
      if (accepted.length > 0 && (!file.type || !accepted.includes(<FileType>file.type))) return;
      files = [...files, file];
    });
  };
</script>

<div>
  <input type="file"class="hidden" id="dropzone" accept={accepted.join(",")} on:change={clickFiles} {multiple}>
  <label class={style} for="dropzone"
  on:dragover|preventDefault={() => isHover = true}
  on:dragleave={() => isHover = false}
  on:drop|preventDefault={dropFiles}
  >
    {#if files.length === 0}
      <div class="flex flex-col justify-center items-center w-full">

        <FileUploadIcon size={40} color="black" />
        <div class="text-center mt-4">
          <Text size="normal">Cliquer ou gilsser et déposer pour télécharger</Text>
        </div>
      </div>
    {:else}
      <div class="flex items-center gap-2">
        {#each datas as data, i}
          <img src={data} alt={i + " Preview"} class="h-20 rounded-md shadow" />
        {/each}
      </div>
    {/if}
  </label>
</div>
