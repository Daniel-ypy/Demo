<template>
  <ConfigProvider :locale="locale" class="full-screen">
    <router-view />
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ConfigProvider } from "ant-design-vue";

export default defineComponent({
  name: "login",
  components: { ConfigProvider },
  setup() {
    return {
      locale: zhCN,
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100vh;
  width: 100%;
}

.full-screen {
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100vh;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
