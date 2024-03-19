<template>
  <div id="app">
    <NavbarComponent/>
    <IntroContentComponent/>
  </div>
</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  import IntroContentComponent from './components/IntroContentComponent.vue'

  export default {
    name: 'App',
    components: {
      NavbarComponent,
      IntroContentComponent,
    }
  };
</script>

<style lang="scss" scoped>

</style>