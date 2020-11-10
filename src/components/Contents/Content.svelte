<script>
  export let content;
  export let isSSR = false;
  import ImageLoader from './Image/ImageLoader.svelte';
</script>

<style>
</style>

<li>
  <ImageLoader
    src="{content.download_url}"
    alt="Photo by {content.author}"
    height="{content.height}"
    width="{content.width}"
    isSSR="{isSSR}"
  />
</li>
