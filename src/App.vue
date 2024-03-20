<template>
  <div id="app">
    <NavbarComponent/>
    <IntroContentComponent/>
    <ServicesCardComponent/>
    <BuyDetailsComponent/>
    <AboutUsComponent/>
    <AnalysisCardComponent/>
    <CustomerRatingComponent/>
  </div>
</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  import IntroContentComponent from './components/IntroContentComponent.vue'
  import ServicesCardComponent from './components/ServicesCardComponent.vue'
  import BuyDetailsComponent from './components/BuyDetailsComponent.vue'
  import AboutUsComponent from './components/AboutUsComponent.vue'
  import AnalysisCardComponent from './components/AnalysisCardComponent.vue'
  import CustomerRatingComponent from './components/CustomerRatingComponent.vue'

  export default {
    name: 'App',
    components: {
      NavbarComponent,
      IntroContentComponent,
      ServicesCardComponent,
      BuyDetailsComponent,
      AboutUsComponent,
      AnalysisCardComponent,
      CustomerRatingComponent
    }
  };
</script>
