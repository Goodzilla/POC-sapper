<script context="module">
  import { contentList } from "../stores.js";

  export async function preload(page, session) {
    const currentPage = 1;
    const limit = 10;

    const res = await this.fetch(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=${limit}`
    );

    if (res.status === 200) {
      const contents = await res.json();
      contentList.set(contents);
      return { contents };
    }

    this.error(404, "Not found");
  }
</script>

<script>
  export let contents = [];

  import PageLoader from "../components/PageLoader.svelte";
  import Content from "../components/Contents/Content.svelte";

  contentList.set(contents);
</script>

<style>
</style>

<svelte:head>
  <title>POC Phoenix</title>
</svelte:head>

<ul>
  {#each $contentList as storeContent, i}
    <Content content={storeContent} isSSR={i < 5} />
  {/each}
  <PageLoader />
</ul>
