<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="display:flex;">
        <img src="~/@/assets/images/Jumpman_logo.svg" />
        <h1 class="title">Admin Dashboard</h1>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        ><a-menu-item key="1" @click="handleGo('/')">
          <HomeOutlined />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="user-info">
          <template #title>
            <span><UserOutlined /><span>个人信息</span></span>
          </template>
          <a-menu-item
            @click="handleGo('/change-password')"
            key="change-password"
            ><KeyOutlined />修改密码</a-menu-item
          >
          <a-menu-item @click="handleGo('/edit-profile')" key="edit-profile"
            ><EditOutlined />编辑信息</a-menu-item
          >
        </a-sub-menu>
        <a-sub-menu key="user-role">
          <template #title>
            <span><UserOutlined /><span>用户权限</span></span>
          </template>
          <a-menu-item key="role"><KeyOutlined />角色</a-menu-item>
          <a-menu-item key="permission"><EditOutlined />权限</a-menu-item>
        </a-sub-menu>
        <a-menu-item @click="handleGo('/settings')" key="2">
          <SettingOutlined />
          <span>设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content><router-view /></a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useGo } from "../router";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  KeyOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "dashbord",
  components: {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    KeyOutlined,
    EditOutlined,
  },
  setup() {
    const selectedKeys = ref(["1"]);
    const openKeys = ref(["user-role"]);

    const go = useGo();

    function changeMenu() {
      console.log(selectedKeys);
    }

    function handleGo(path: string): void {
      go(path);
    }

    return {
      collapsed: false,
      selectedKeys,
      changeMenu,
      openKeys,
      handleGo,
    };
  },
});
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }
  .ant-menu-submenu-title > span {
    float: left;
  }
  .ant-menu-item {
    text-align: left !important;
  }
  .ant-menu-submenu {
    padding: 0 !important;
  }
}
.logo {
  height: 48px;

  margin: 16px 8px;
  img {
    height: 48px;
  }
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.title {
  color: white;
  margin-bottom: 0px;
  line-height: 48px;
}
</style>
