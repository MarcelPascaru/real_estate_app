<template>
    <div>
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
    import IntroContentComponent from '../components/IntroContentComponent.vue'
    import ServicesCardComponent from '../components/ServicesCardComponent.vue'
    import BuyDetailsComponent from '../components/BuyDetailsComponent.vue'
    import AboutUsComponent from '../components/AboutUsComponent.vue'
    import AnalysisCardComponent from '../components/AnalysisCardComponent.vue'
    import CustomerRatingComponent from '../components/CustomerRatingComponent.vue'
    import ServicesComponent from '../components/ServicesComponent.vue'
    import TestimonialsComponent from '../components/TestimonialsComponent.vue'
    import PartnersComponent from '../components/PartnersComponent.vue'
    import FacilitiesComponent from '../components/FacilitiesComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import LoginComponent from './LoginView.vue'
    import RegisterComponent from './RegisterView.vue'
  
    export default {
      name: 'HomeComponent',
      components: {
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
        LoginComponent,
        RegisterComponent,
      }
    };
  </script>
  