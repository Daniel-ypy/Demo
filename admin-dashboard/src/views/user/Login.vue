<template>
  <a-card>
    <a-card hoverable style="width: 240px">
      <a-card-meta title="Europe Street beat">
        <template #description>
          {{ t("sys.userName") }}
        </template>
      </a-card-meta>
    </a-card>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "../../plugins/i18n";

export default defineComponent({
  name: "login",
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
