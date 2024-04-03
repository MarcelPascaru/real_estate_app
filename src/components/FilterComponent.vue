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
            placeholder="Type"
            size="large"
            style="width: 240px"
        >
          Hello
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import {ElInput, ElSelect, ElRadio} from "element-plus";

export default {
  name: 'FilterComponent',
  components: {
    ElInput,
    ElSelect,
    ElRadio,
  }

}
</script>

