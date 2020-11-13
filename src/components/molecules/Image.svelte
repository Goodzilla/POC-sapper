<script>
  export let src;
  export let alt;
  export let height;
  export let width;
  export let loaded = false;
  export let isLazy = true;
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;

  import { onMount } from 'svelte';

  let thisImage;
  let intersecting = false;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          intersecting = entries[0].isIntersecting;

          if (intersecting) {
            observer.unobserve(thisImage);
          }
        },
        {
          rootMargin,
        }
      );

      observer.observe(thisImage);
      return () => observer.unobserve(thisImage);
    }

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
  src="{intersecting || !isLazy ? src : ''}"
  alt="{alt}"
  height="{height}"
  width="{width}"
  class:loaded
  bind:this="{thisImage}"
/>
