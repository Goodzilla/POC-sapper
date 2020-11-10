<script>
  import { contentList } from '../stores.js';
  import IntersectionObserver from './IntersectionObserver.svelte';

  const LAST_PAGE = 10;
  const FIRST_PAGE = 1;
  const ITEMS_PER_PAGE = 10;
  let currentPage = FIRST_PAGE;

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

<style>
</style>

{#if currentPage < LAST_PAGE}
  <IntersectionObserver
    let:intersecting
    top="{100}"
    classes="page-loader"
    on:intersect="{() => {
      currentPage++;
      getNextPage();
    }}"
  />
{:else}
  <div>Fin des contenus (10 pages)</div>
{/if}
