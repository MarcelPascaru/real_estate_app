<template>
  <div id="app">
    <NavbarComponent/>
    <IntroContentComponent/>
    <ServicesCardComponent/>
    <BuyDetailsComponent/>
    <AboutUsComponent/>
    <AnalysisCardComponent/>
    <CustomerRatingComponent/>
    <ServicesComponent/>
    <TestimonialsComponent/>
    <PartnersComponent/>
    <FacilitiesComponent/>
    <FooterComponent/>
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
  import ServicesComponent from './components/ServicesComponent.vue'
  import TestimonialsComponent from './components/TestimonialsComponent.vue'
  import PartnersComponent from './components/PartnersComponent.vue'
  import FacilitiesComponent from './components/FacilitiesComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'

  export default {
    name: 'App',
    components: {
      NavbarComponent,
      IntroContentComponent,
      ServicesCardComponent,
      BuyDetailsComponent,
      AboutUsComponent,
      AnalysisCardComponent,
      CustomerRatingComponent,
      ServicesComponent,
      TestimonialsComponent,
      PartnersComponent,
      FacilitiesComponent,
      FooterComponent,
    }
  };
</script>
