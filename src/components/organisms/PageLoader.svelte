<script>
  import { contentList } from '../../stores.js';
  import IntersectionObserver from '../molecules/IntersectionObserver.svelte';

  const LAST_PAGE = 10;
  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;

  async function getNextPage() {
    if (process.browser) {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
      );

      if (res.status === 200) {
        const contents = await res.json();
        contentList.update((currentContents) => [
          ...currentContents,
          ...contents,
        ]);
      }
    }
  }
</script>

{#if currentPage < LAST_PAGE}
  <IntersectionObserver
    let:intersecting
    top="{100}"
    on:intersect="{() => {
      currentPage++;
      getNextPage();
    }}"
  />
{:else}
  <div>Fin des contenus (10 pages)</div>
{/if}
