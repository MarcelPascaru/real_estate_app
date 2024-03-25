<template>
    <div>
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
    import NavbarComponent from './NavbarComponent.vue'
    import IntroContentComponent from './IntroContentComponent.vue'
    import ServicesCardComponent from './ServicesCardComponent.vue'
    import BuyDetailsComponent from './BuyDetailsComponent.vue'
    import AboutUsComponent from './AboutUsComponent.vue'
    import AnalysisCardComponent from './AnalysisCardComponent.vue'
    import CustomerRatingComponent from './CustomerRatingComponent.vue'
    import ServicesComponent from './ServicesComponent.vue'
    import TestimonialsComponent from './TestimonialsComponent.vue'
    import PartnersComponent from './PartnersComponent.vue'
    import FacilitiesComponent from './FacilitiesComponent.vue'
    import FooterComponent from './FooterComponent.vue'
    import LoginComponent from './LoginComponent.vue'
    import RegisterComponent from './RegisterComponent.vue'
  
    export default {
      name: 'HomeComponent',
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
        LoginComponent,
        RegisterComponent,
      }
    };
  </script>
  