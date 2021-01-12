<template>
  <a-card :title="t('sys.login')" hoverable class="login-card">
    <a-form layout="horizontal" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item :label="t('sys.userName')">
        <a-input required :placeholder="t('sys.userName')" />
      </a-form-item>
      <a-form-item :label="t('sys.password')">
        <a-input required :placeholder="t('sys.password')" />
      </a-form-item>
      <a-form-item :span="24" class="action-item">
        <a-button type="link" :size="size">{{
          t("operate.register")
        }}</a-button>
        <a-button type="primary" html-type="submit">
          {{ t("operate.submit") }}
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "../../plugins/i18n";

export default defineComponent({
  name: "login",
  setup() {
    const { t } = useI18n();

    const labelCol = { span: 6 };
    const wrapperCol = { span: 18 };

    return {
      t,
      labelCol,
      wrapperCol,
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
