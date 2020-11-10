<script>
  export let content;
  export let isSSR = false;
  import ImageLoader from './Image/ImageLoader.svelte';

  const newWidth = 320;
  let newHeight = Math.floor(content.height * (newWidth / content.width));
  let compressedSrc = content.download_url.replace(
    `${content.width}/${content.height}`,
    `${newWidth}/${newHeight}.webp`
  );
</script>

<li>
  <ImageLoader
    src="{compressedSrc}"
    alt="Photo by {content.author}"
    height="{newHeight}"
    width="{newWidth}"
    isSSR="{isSSR}"
  />
</li>
