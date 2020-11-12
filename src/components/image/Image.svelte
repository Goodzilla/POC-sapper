<script>
  export let src;
  export let alt;
  export let height;
  export let width;
  export let loaded = false;

  import { onMount } from 'svelte';

  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<style lang="scss">
  img {
    width: 100%;
    height: auto;
    background: lightgray;
  }
</style>

<img
  src="{src}"
  alt="{alt}"
  height="{height}"
  width="{width}"
  class:loaded
  bind:this="{thisImage}"
/>
