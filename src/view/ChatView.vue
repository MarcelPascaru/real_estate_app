<template>
  <div class="chat" style="max-width: 1200px; width: 100%; margin: 50px auto">
    <div class="flex justify-center">
      <h1>Open AI chat</h1>
    </div>
    <div class="flex justify-center mt-[2rem]">
        <el-input
            v-model="message"
            style="width: 100%"
            type="textarea"
            placeholder="Please input"/>
    </div>
    <div class="flex justify-center mt-[2rem]">
      <el-button type="primary" @click="find">Find</el-button>
    </div>
    <div class="flex justify-center mt-[2rem]">
      <div class="chat-response">
        <spinner-component v-if="loader"></spinner-component>
        <h1>Response:</h1>
        <div class="chat-response-output" v-html="this.response || 'Output text placeholder...' ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElInput, ElButton } from "element-plus";
import {chat} from "@/services/chat/chat.service.js";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  name: 'ChatView',
  components: {
    ElInput,
    ElButton,
    SpinnerComponent
  },
  data() {
    return {
      message: '',
      response: '',
      loader: false
    }
  },
  methods: {
    async find() {
      this.loader = true;

      await chat({message: this.message})
          .then((response) => {
            this.response = response.message.choices[0].message.content;
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            this.loader = false;
          })
    }
  }
}

</script>

<style lang="scss">
.chat {
  textarea {
    min-height: 100px !important;
  }

  .chat-response {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    min-height: 300px;

    .chat-response-output {
      width: 100%;
      height: 100%;
      background-color: #e8e8e8;
      border-radius: 4px;
      padding: 5px 11px;
    }
  }
}
</style>