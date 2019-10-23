<template>
  <div id="app">
    <div class="cruise-search-widget__base cruise-search-widget--active">
      <div class="cruise-search-widget__title">Find a Cruise</div>
      <Content/>
    </div>
  </div>
</template>

<script>
import Content from './components/Content'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Content
  }
}
</script>

<style>
/* @media screen and (max-width: 39.9375em) {
  .cruise-search-widget__title {

  }
} */
@media (min-width: 40em) {
  .cruise-search-widget__title {
    display: none;
  }
}
</style>
