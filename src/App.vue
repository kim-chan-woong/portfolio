<template>
  <div id="app">
    <first-page></first-page>
    <!-- <tool-bar></tool-bar> -->
    <!-- <intro></intro> -->
  </div>
</template>

<script>
// import ToolBar from './components/ToolBar.vue';
import FirstPage from './components/FirstPage.vue'
// import Intro from './components/Intro.vue'

export default {
  name: 'App',
  data() {
    return {
      nowFirstPage: true,
    }
  },
  components: {
    // ToolBar,
    FirstPage,
    // Intro,
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
