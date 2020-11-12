<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style lang="scss" global>
  @import './styles/reset.scss';
  @import './styles/global.scss';

  main {
    position: relative;
    background-color: #ffffff;
    padding: 24px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav segment="{segment}" />

<main>
  <slot />
</main>
