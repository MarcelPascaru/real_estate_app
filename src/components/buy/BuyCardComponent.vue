<template>
    <div class="w-[45%] shadow-2xl rounded-[1rem]">
      <img class="rounded-[1rem]" src="@/assets/house1.jpg" alt="house1"/>
      <div class="flex flex-col p-2">
        <div class="flex justify-between align-middle">
          <h3 class="text-2xl font-bold mb-2">$ {{ this.estate.price }}</h3>
          <span>{{ this.estate.category }}</span>
        </div>
        <div class="flex justify-start items-center text-slate-gray mb-2">
          <span>2 bds |</span>
          <span>1 ba |</span>
          <span>120 sqft</span>
        </div>
        <h3 class="text-sm">{{ this.estate.address }}</h3>
      </div>
      <buy-details-component :estate="estate"></buy-details-component>
    </div>
</template>

<script>
import BuyDetailsComponent from "@/components/buy/BuyDetailsComponent.vue";

export default {
  name: 'BuyCardComponent',
  props: {
    estate: {
      required: true,
      default: () => {}
    }
  },
  components: {
    BuyDetailsComponent
  },
  data() {
    return {
      visible: false
    }
  },
}
</script>