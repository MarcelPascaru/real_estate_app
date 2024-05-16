<template>
  <div class="w-full h-[70px] shadow-xl">
    <div class="p-3 flex justify-center items-center w-full">
      <div>
        <el-input class="mr-10" style="width: 240px" placeholder="City, Address, Region..." />
      </div>
      <div class="flex justify-center items-center">
        <el-select
            placeholder="Buy"
            size="large"
            style="width: 240px"
            class="mr-5"
        >
          Hello
        </el-select>
        <el-select
            placeholder="Price"
            size="large"
            style="width: 240px"
            class="mr-5"
        >
          Hello
        </el-select>
        <el-select
            placeholder="Beds&Baths"
            size="large"
            style="width: 240px"
            class="mr-5"
        >
          Hello
        </el-select>
        <el-select
            v-model="filters.category"
            placeholder="Category"
            size="large"
            style="width: 240px"
        >
          <el-option
              v-for="item in categories"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-button type="primary" @click="search">Search</el-button>
        <el-button type="secondary" @click="reset">Reset</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {ElInput, ElSelect, ElRadio} from "element-plus";

export default {
  name: 'FilterComponent',
  props: ['filters'],
  components: {
    ElInput,
    ElSelect,
    ElRadio,
  },
  data() {
    return {
      categories: [
        {
          value: 'rent',
          label: 'Rent'
        },
        {
          value: 'sales',
          label: 'Sales'
        }
      ]
    }
  },
  methods: {
    search() {
      this.$emit('search-filters', this.filters);
    },
    reset() {
      this.filters.category = null;
      this.$emit('search-filters', this.filters);
    }
  }
}
</script>

