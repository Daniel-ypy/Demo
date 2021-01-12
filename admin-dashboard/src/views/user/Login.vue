<template>
  <a-card :title="t('sys.login')" hoverable class="login-card">
    <a-form
      layout="horizontal"
      ref="formRef"
      :model="loginData"
      :rules="formRules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item :label="t('sys.userName')" name="userName">
        <a-input
          required
          v-model:value="loginData.userName"
          :placeholder="t('sys.userName')"
        />
      </a-form-item>
      <a-form-item :label="t('sys.password')" name="password">
        <a-input
          required
          v-model:value="loginData.password"
          :placeholder="t('sys.password')"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 20, offset: 2 }">
        <a-button type="link">{{ t("operate.register") }}</a-button>
        <a-button type="primary" :loading="formState.loading" @click="login">
          {{ t("operate.submit") }}
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, unref, toRaw } from "vue";
import { useI18n } from "../../plugins/i18n";
import { userStore } from "../../store/modules/user";
import router from "../../router";

export default defineComponent({
  name: "login",
  setup() {
    const { t } = useI18n();
    const labelCol = { span: 6 };
    const wrapperCol = { span: 18 };

    const formRef = ref<any>(null);

    const loginData = reactive({
      userName: "",
      password: "",
      // verify: undefined,
    });

    const formState = reactive({
      loading: false,
    });

    const formRules = reactive({
      userName: [
        {
          required: true,
          message: t("sys.userNameRequired"),
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: t("sys.userPasswordRequired"),
          trigger: "blur",
        },
      ],
    });

    async function handleLogin() {
      const form = unref(formRef);
      if (!form) return;
      formState.loading = true;
      try {
        const data = await form.validate();
        const userInfo = await userStore.login(
          toRaw({
            userName: data.userName,
            password: data.password,
          })
        );
        console.log(userInfo);
        await router.replace("/");
      } catch (error) {
        formState.loading = false;
      } finally {
        // resetVerify();
        formState.loading = false;
      }
    }

    return {
      t,
      labelCol,
      wrapperCol,
      formRef,
      loginData,
      formState,
      formRules,
      login: handleLogin,
    };
  },
});
</script>
<style lang="less" scoped>
.login-card {
  margin: auto;
  width: 300px;
}

.action-item {
  .ant-form-item-children {
    display: flex !important;
    justify-content: space-between;
  }
}
</style>
