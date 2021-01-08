<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /><a-button type="primary">
      Primary
    </a-button>
    <a-button type="primary">
      <template #icon><SearchOutlined /></template>Search
    </a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { SearchOutlined } from "@ant-design/icons-vue";

@Options({
  components: {
    HelloWorld,
    SearchOutlined,
  },
})
export default class Home extends Vue {}
</script>
