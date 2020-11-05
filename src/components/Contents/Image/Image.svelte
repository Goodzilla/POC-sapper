<script>
  export let src;
  export let alt;
  export let height;
  export let width;

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<style>
  img {
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>

<img {src} {alt} {height} {width} class:loaded bind:this={thisImage} />
