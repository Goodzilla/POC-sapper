<script>
  export let content;
  export let isLazy = false;
  import Image from './Image.svelte';

  const newWidth = 320;
  let newHeight = Math.floor(content.height * (newWidth / content.width));
  let compressedSrc = content.download_url.replace(
    `${content.width}/${content.height}`,
    `${newWidth}/${newHeight}.webp`
  );
</script>

<li>
  <Image
    src="{compressedSrc}"
    alt="Photo by {content.author}"
    height="{newHeight}"
    width="{newWidth}"
    isLazy="{isLazy}"
  />
</li>
