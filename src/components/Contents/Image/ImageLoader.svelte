<script>
  export let src;
  export let alt;
  export let height;
  export let width;
  export let isSSR = false;

  import IntersectionObserver from "../../IntersectionObserver.svelte";
  import Image from "./Image.svelte";
</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting || isSSR}
    <Image {alt} {src} {height} {width} />
  {:else}
    <div>Not in viewport yet...</div>
  {/if}
</IntersectionObserver>
