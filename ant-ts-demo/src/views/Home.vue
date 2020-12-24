<template>
  <div class="home">
    <a-layout>
      <a-layout-header>
        <a-space :size="16">
          <a-dropdown>
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1"><FileAddOutlined />新建</a-menu-item>
                <a-menu-item key="2"><PrinterOutlined />打印 (P)</a-menu-item>
                <a-menu-item key="3"><FilePdfOutlined />PDF</a-menu-item>
                <a-menu-item key="4"><SaveOutlined />另存为 (A)</a-menu-item>
              </a-menu>
            </template>
            <a-button> File (F) <DownOutlined /> </a-button>
          </a-dropdown>
          <a-space :size="16">
            <a-button type="primary">View</a-button>
            <a-button>查询</a-button>
            <a-button>保存</a-button>
            <a-button disabled>审批1</a-button>
          </a-space>
        </a-space>
        <a-dropdown class="avatar-float-right">
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="1"><KeyOutlined />修改密码</a-menu-item>
            </a-menu>
          </template>
          <a-avatar>
            <template #icon><UserOutlined /></template>
          </a-avatar>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content>
        <MainItem />
      </a-layout-content>
      <a-layout-footer>this footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainItem from "./../components/MainItem.vue";
import {
  DownOutlined,
  FileAddOutlined,
  PrinterOutlined,
  FilePdfOutlined,
  SaveOutlined,
  UserOutlined,
  KeyOutlined
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "Home",
  components: {
    DownOutlined,
    FileAddOutlined,
    PrinterOutlined,
    FilePdfOutlined,
    SaveOutlined,
    UserOutlined,
    KeyOutlined,
    MainItem
  },
  methods: {
    handleMenuClick() {
      alert();
    }
  }
});
</script>
<style scoped>
.ant-layout-header {
  background-color: white;
}
</style>
