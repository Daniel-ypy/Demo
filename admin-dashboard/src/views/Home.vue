<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="display:flex;">
        <img src="~/@/assets/images/Jumpman_logo.svg" />
        <h1 v-if="!collapsed" class="title">Admin Dashboard</h1>
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

    <a-layout>
      <a-layout-header>
        <a-row>
          <a-col :span="1">
            <ArrowLeftOutlined v-if="!collapsed" @click="tongleSideBar" />
            <ArrowRightOutlined v-if="collapsed" @click="tongleSideBar" />
          </a-col>
          <a-col :span="21"></a-col>
          <a-col :span="2">
            <div @click="tongleUserOptions">
              <a-avatar style="backgroundColor:#87d068">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
              <span>Daniel</span>
            </div>
            <a-dropdown>
              <a-menu v-if="showUserOption">
                <a-menu-item key="1"><UserOutlined />个人中心</a-menu-item>
                <a-menu-item key="2"><UserOutlined />修改密码</a-menu-item>
                <a-menu-item key="3"><UserOutlined />退出登录</a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content><router-view /></a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useGo } from "../router";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  KeyOutlined,
  EditOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "dashbord",
  components: {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    KeyOutlined,
    EditOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
  },
  setup() {
    const selectedKeys = ref(["1"]);
    const collapsed = ref(false);
    const showUserOption = ref(false);
    const openKeys = ref(["user-role"]);

    const go = useGo();

    function changeMenu() {
      console.log(selectedKeys);
    }

    function tongleUserOptions() {
      showUserOption.value = !showUserOption.value;
    }

    function handleGo(path: string): void {
      go(path);
    }

    function tongleSideBar() {
      collapsed.value = !collapsed.value;
    }

    return {
      collapsed,
      selectedKeys,
      changeMenu,
      showUserOption,
      openKeys,
      handleGo,
      tongleSideBar,
      tongleUserOptions,
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
#components-layout-demo-custom-trigger .ant-layout-header {
  position: relative;
  height: 64px;
  padding: 0;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
