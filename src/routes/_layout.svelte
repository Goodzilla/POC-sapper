<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 24px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav segment="{segment}" />

<main>
  <slot />
</main>
