<script>
  export let src;
  export let alt;
  export let height;
  export let width;
  export let isSSR = false;

  import { onMount } from 'svelte';
  import IntersectionObserver from '../../IntersectionObserver.svelte';
  import Image from './Image.svelte';

  let nativeLoading = false;
  // Determine whether to bypass our intersecting check
  onMount(() => {
    if ('loading' in HTMLImageElement.prototype) {
      nativeLoading = true;
    }
  });
</script>

<IntersectionObserver once="{true}" let:intersecting>
  {#if intersecting || isSSR || nativeLoading}
    <Image
      alt="{alt}"
      src="{src}"
      height="{height}"
      width="{width}"
      loaded="{isSSR}"
    />
  {:else}
    <div>Not in viewport yet...</div>
  {/if}
</IntersectionObserver>
