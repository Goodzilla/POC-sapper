<script>
  export let src;
  export let alt;
  export let height;
  export let width;
  export let isSSR = false;

  import IntersectionObserver from '../utils/IntersectionObserver.svelte';
  import Image from './Image.svelte';
</script>

<IntersectionObserver once="{true}" let:intersecting top="{200}">
  <Image
    alt="{alt}"
    src="{intersecting || isSSR ? src : ''}"
    height="{height}"
    width="{width}"
    loaded="{isSSR}"
  />
</IntersectionObserver>
