<template>
  <div id="app">
    <navbar-component></navbar-component>
    <RouterView/>
  </div>
</template>

<script>
  import NavbarComponent from "@/components/NavbarComponent.vue";
  export default {
    name: 'App',
    components: {
      NavbarComponent
    }
  }
</script>

