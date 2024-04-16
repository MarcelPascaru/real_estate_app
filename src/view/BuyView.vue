<template>
  <div class="w-full h-full">
    <FilterComponent/>
    <el-container>
      <el-aside width="1050px" class="bg-slate-gray">
        <GoogleMap
            style="width: 100%; height: 100%"
            :center="mapCenterPosition"
            :zoom="15"
        >
          <Marker v-for="mark in mapMarks" :options="{ position: mark.position }"/>
        </GoogleMap>
      </el-aside>
      <el-main>
        <div class="p-5 flex flex-col h-[81.9vh]">
          <h1 class="text-3xl font-bold mb-2">Real Estate & Homes For Sale</h1>
          <span class="text-slate-gray font-bold">{{buildings.length}} results</span>
          <div class="flex justify-start items-center flex-wrap">
            <buy-card-component v-for="building in buildings" :building-data="building"></buy-card-component>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FilterComponent from "@/components/FilterComponent.vue";
import {ElAside, ElContainer, ElMain} from "element-plus";
import { ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import BuyCardComponent from "@/components/BuyCardComponent.vue";

export default {
  name: 'BuyView',
  components: {
    FilterComponent,
    ElAside,
    ElContainer,
    ElMain,
    GoogleMap,
    Marker,
    BuyCardComponent,
  },
  data() {
    return {
      buildings: [
        {
          id: '1',
          price: 45000,
          address: "Calea Iesilor 21A, Chisinau, Republic of Moldova",
          beds: 2,
          baths: 2,
          sqft: 120,
          garage: 1,
          parking: "None",
          cooling: "None",
          basement: 1,
        },
        {
          id: '2',
          price: 27000,
          address: "bd.Moscovei 21, Chisinau, Republic of Moldova",
          beds: 2,
          baths: 1,
          sqft: 50,
          garage: "None",
          parking: "None",
          cooling: "None",
          basement: "None",
        },
        {
          id: '3',
          price: 70000,
          address: "Mircea cel Batran 16, Chisinau, Republic of Moldova",
          beds: 3,
          baths: 2,
          sqft: 110,
          garage: 1,
          parking: "None",
          cooling: 1,
          basement: "None",
        },
        {
          id: '4',
          price: 40000,
          address: "Gheorghe Asachi 12, Chisinau, Republic of Moldova",
          beds: 2,
          baths: 1,
          sqft: 45,
          garage: "None",
          parking: "None",
          cooling: "None",
          basement: 1,
        },
        {
          id: '5',
          price: 100000,
          address: "Kiev 23, Chisinau, Republic of Moldova",
          beds: 3,
          baths: 2,
          sqft: 160,
          garage: 1,
          parking: 1,
          cooling: 1,
          basement: 1,
        },
      ],
      visible: ref(false),
    }
  },
  computed: {
    realEstates() {
      return this.$store.getters['realEstateModule/getRealEstates'];
    },
    mapCenterPosition() {
      return this.$store.getters['realEstateModule/getMapCenterPosition'];
    },
    mapMarks() {
      return this.$store.getters['realEstateModule/getMapMarks'];
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.$store.dispatch('realEstateModule/readAll');
    },
  }
}
</script>

