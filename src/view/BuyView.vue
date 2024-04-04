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
          <div class="flex justify-start items-center flex-wrap">
            <div class="w-[45%] shadow-2xl rounded-[1rem] m-3">
              <img class="rounded-[1rem]" src="../assets/house1.jpg" alt="house1"/>
              <div class="flex flex-col p-2">
                <h3 class="text-2xl font-bold mb-2">$45,000</h3>
                <div class="flex justify-start items-center text-slate-gray mb-2">
                  <span>2 bds |</span>
                  <span>1 ba |</span>
                  <span>120 sqft</span>
                </div>
                <h3 class="text-sm">Calea Iesilor 21A, Chisinau, Republic of Moldova</h3>
                <el-button type="primary" plain @click="visible = true">
                  More
                </el-button>
                <el-dialog v-model="visible" :show-close="false" width="1400">
                  <template #header="{ close, titleId, titleClass }">
                    <div class="flex justify-between">
                      <el-button type="primary" @click="close">
                        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                        Close
                      </el-button>
                      <el-button type="primary" plain>
                        Save
                      </el-button>
                    </div>
                  </template>
                  <div class="p-5">
                    <div class="flex justify-center items-center w-full h-[430px]">
                      <div class="flex justify-center items-center w-[580.5px] h-[437px] mr-3">
                        <img class="w-full h-full rounded-tl-[12px] rounded-bl-[12px]" src="../assets/house1.jpg" alt="house1"/>
                      </div>
                      <div class="flex flex-col justify-center items-center w-[286.25px] h-[437px] mr-3">
                        <img class="mb-2 w-[286.25px] h-[214.5px]" src="../assets/bed1.jpg" alt="bed1"/>
                        <img class="w-[286.25px] h-[214.5px]" src="../assets/bed2.jpg" alt="bed2"/>
                      </div>
                      <div class="flex flex-col justify-center items-center w-[286.25px] h-[437px]">
                        <img class="mb-2 w-[286.25px] h-[214.5px] rounded-tr-[12px]" src="../assets/kitchen.jpg" alt="kitchen"/>
                        <img class="w-[286.25px] h-[214.5px] rounded-br-[12px]" src="../assets/bath.jpg" alt="bath"/>
                      </div>
                    </div>
                    <hr class="mb-5 mt-5"/>
                    <div class="flex justify-between items-center">
                      <div class="mr-20">
                        <h1 class="text-2xl font-bold">$45,000</h1>
                        <span class="text-slate-gray">Calea Iesilor 21A, Chisinau, Republic of Moldova</span>
                      </div>
                      <div class="flex justify-center items-center">
                        <el-button type="primary" class=" w-[140px]">
                          Request a tour
                        </el-button>
                        <el-button type="primary" plain class="w-[140px]">
                          Contact an agent
                        </el-button>
                      </div>
                    </div>
                    <hr class="mb-5 mt-5"/>
                    <div class="w-full">
                      <h1 class="text-xl font-bold mb-3">Facts & features</h1>
                      <span class="text-slate-gray text-lg">Interior</span>
                      <hr class="mb-5 mt-5"/>
                      <div class="flex justify-start items-start w-full mb-10">
                        <div class="flex flex-col justify-center items-start mr-40 w-[250px]">
                          <h2 class="text-lg font-bold">Bedrooms & bathrooms</h2>
                          <ul class="pl-6 mt-3">
                            <li class="flex items-center mb-2">
                              <fa class="w-[30px] h-[30px] mr-2" icon="bed"/>
                              <span>Bedrooms: 2</span>
                            </li>
                            <li class="flex items-center">
                              <fa class="w-[30px] h-[30px] mr-2" icon="bath"/>
                              <span>Bathrooms: 2</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div class="mb-3">
                            <h2 class="text-lg font-bold">Cooling</h2>
                            <ul class="pl-6 mt-3">
                              <li class="flex items-center">
                                <fa class="w-[30px] h-[30px] mr-2" icon="temperature-low"/>
                                <span>Cooling features: None</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 class="text-lg font-bold">Appliances</h2>
                            <ul class="pl-6 mt-3">
                              <li class="flex items-center">
                                <fa class="w-[30px] h-[30px] mr-2" icon="bolt"/>
                                <span>Electric Stand Alone</span>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>
                      <div class="flex justify-start items-start w-full mb-10">
                        <div class="mr-40 w-[250px]">
                          <h2 class="text-lg font-bold">Garage or Personal parking</h2>
                          <ul class="pl-6 mt-3">
                            <li class="flex items-center mb-2">
                              <fa class="w-[30px] h-[30px] mr-2" icon="warehouse"/>
                              <span>Garage: 1</span>
                            </li>                            <li class="flex items-center">
                              <fa class="w-[30px] h-[30px] mr-2" icon="square-parking"/>
                              <span>Personal parking: None</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 class="text-lg font-bold">Basement</h2>
                          <ul class="pl-6 mt-3">
                            <li class="flex items-center">
                              <fa class="w-[30px] h-[30px] mr-2" icon="boxes-stacked"/>
                              <span>Basement: 1</span>
                            </li>                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-dialog>
              </div>
            </div>
            <div class="w-[45%] shadow-2xl rounded-[1rem] m-3">
              <img class="rounded-[1rem]" src="../assets/house1.jpg" alt="house1"/>
              <div class="flex flex-col p-2">
                <h3 class="text-2xl font-bold mb-2">$45,000</h3>
                <div class="flex justify-start items-center text-slate-gray mb-2">
                  <span>2 bds |</span>
                  <span>1 ba |</span>
                  <span>120 sqft</span>
                </div>
                <h3 class="text-sm">Calea Iesilor 21A, Chisinau, Republic of Moldova</h3>
              </div>
            </div>
            <div class="w-[45%] shadow-2xl rounded-[1rem] m-3">
              <img class="rounded-[1rem]" src="../assets/house1.jpg" alt="house1"/>
              <div class="flex flex-col p-2">
                <h3 class="text-2xl font-bold mb-2">$45,000</h3>
                <div class="flex justify-start items-center text-slate-gray mb-2">
                  <span>2 bds |</span>
                  <span>1 ba |</span>
                  <span>120 sqft</span>
                </div>
                <h3 class="text-sm">Calea Iesilor 21A, Chisinau, Republic of Moldova</h3>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FilterComponent from "@/components/FilterComponent.vue";
import {ElAside, ElContainer, ElMain, ElButton, ElDialog} from "element-plus";
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'
import {FontAwesomeIcon as Fa} from "@fortawesome/vue-fontawesome";
import { GoogleMap, Marker } from 'vue3-google-map'

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
  },
  data() {
    return {
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

