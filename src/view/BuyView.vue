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
        <div class="p-5 flex flex-col">
          <h1 class="text-3xl font-bold mb-2">Real Estate & Homes For Sale</h1>
          <span class="text-slate-gray font-bold">13,253 results</span>

          <div class="flex flex-wrap gap-10">
            <buy-card-component v-for="(estate, index) in realEstates" :key="index"
                                :estate="estate">
            </buy-card-component>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FilterComponent from "@/components/FilterComponent.vue";
import {ElAside, ElContainer, ElMain, ElButton, ElDialog} from "element-plus";
import {CircleCloseFilled} from '@element-plus/icons-vue'
import {FontAwesomeIcon as Fa} from "@fortawesome/vue-fontawesome";
import {GoogleMap, Marker} from 'vue3-google-map'
import BuyCardComponent from "@/components/buy/BuyCardComponent.vue";

export default {
  name: 'BuyView',
  components: {
    Fa,
    FilterComponent,
    ElAside,
    ElContainer,
    ElMain,
    ElButton,
    ElDialog,
    CircleCloseFilled,
    GoogleMap,
    Marker,
    BuyCardComponent
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

