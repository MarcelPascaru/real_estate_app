<template>
  <div>
    <div class="w-[35%] shadow-2xl rounded-[1rem] m-3">
      <img class="rounded-[1rem]" src="../assets/house1.jpg" alt="house1"/>
      <div class="flex flex-col p-2">
        <h3 class="text-2xl font-bold mb-2">${{buildingData.price}}</h3>
        <div class="flex justify-start items-center text-slate-gray mb-2">
          <span>{{buildingData.beds}} beds |</span>
          <span>{{buildingData.baths}} baths |</span>
          <span>{{buildingData.sqft}} sqft</span>
        </div>
        <h3 class="text-sm mb-2">{{buildingData.address}}</h3>
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
                <h1 class="text-2xl font-bold">${{buildingData.price}}</h1>
                <span class="text-slate-gray">{{buildingData.address}}</span>
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
                      <span>Bedrooms: {{buildingData.beds}}</span>
                    </li>
                    <li class="flex items-center">
                      <fa class="w-[30px] h-[30px] mr-2" icon="bath"/>
                      <span>Bathrooms: {{buildingData.baths}}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="mb-3">
                    <h2 class="text-lg font-bold">Cooling</h2>
                    <ul class="pl-6 mt-3">
                      <li class="flex items-center">
                        <fa class="w-[30px] h-[30px] mr-2" icon="temperature-low"/>
                        <span>Cooling features: {{buildingData.cooling}}</span>
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
                      <span>Garage: {{buildingData.garage}}</span>
                    </li>                            <li class="flex items-center">
                    <fa class="w-[30px] h-[30px] mr-2" icon="square-parking"/>
                    <span>Personal parking: {{buildingData.parking}}</span>
                  </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-lg font-bold">Basement</h2>
                  <ul class="pl-6 mt-3">
                    <li class="flex items-center">
                      <fa class="w-[30px] h-[30px] mr-2" icon="boxes-stacked"/>
                      <span>Basement: {{buildingData.basement}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>

import {ElButton, ElDialog} from "element-plus";
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'
import {FontAwesomeIcon as Fa} from "@fortawesome/vue-fontawesome";

export default {
  name: 'BuyCardComponent',
  props: ['buildingData'],
  components: {
    ElDialog,
    ElButton,
    CircleCloseFilled,
    Fa,
  },
  data() {
    return {
      visible: ref(false),
    }
  },
}
</script>
