<template>
  <a-card hoverable style="margin:0 48px">
    <template #extra>
      <div>
        单据编号
        <a-input style="width:160px" v-model:value="orderNumber"></a-input>
      </div>
    </template>
    <a-card-meta></a-card-meta>
    <a-row>
      <a-col :span="11">
        <a-space>
          <div>
            品番<a-select
              v-model:value="value1"
              style="width: 140px"
              ref="select"
              @change="handleChange"
            ></a-select>
          </div>
          <div>
            品名<a-input
              style="width:150px"
              v-model:value="orderNumber"
            ></a-input>
          </div>
        </a-space>
        <el-space style="display:block;margin-top:12px">
          <span style="vertical-align: top;display:inline-block"
            >检查周期基准</span
          >
          <div
            style="display:inline-block ;border: solid 1px #c6c6c6; width: 258px; margin-left:12px; padding-left:6px"
          >
            <div>
              <strong style="color:red;">A</strong> 每批次 |
              <strong style="color:blue;">B</strong> 1次/三个月(包含<strong
                style="color:red;"
                >A</strong
              >)
            </div>
            <div>
              <strong style="color:green;">C</strong> 1次/半年(包含<strong
                style="color:red;"
                >A</strong
              >
              ，<strong style="color:blue;">B</strong>)
            </div>
          </div>
        </el-space>
      </a-col>
      <a-col :span="6" style="padding:0 24px">
        <a-table
          :columns="columns"
          :data-source="batchData"
          bordered
          size="small"
          :pagination="false"
        >
          <template #customAction="{ key, record }">
            <MinusOutlined @click="deleteData(key, record.key)" />
          </template>
          <template #customActionTitle="{ }">
            <PlusOutlined @click="addData()" />
          </template>
        </a-table>
      </a-col>
      <a-col :span="7">7</a-col>
    </a-row>
  </a-card>
</template>
<script>
import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";
export default {
  name: "MainItem",
  components: {
    PlusOutlined,
    MinusOutlined
  },
  data() {
    return {
      orderNumber: "IQC-20Y1116-01",
      batchData: [
        {
          key: "0",
          batchNumber: "2020.12.28",
          batchCount: 1500
        },
        {
          key: "1",
          batchNumber: "2020.12.29",
          batchCount: 1600
        }
      ],
      columns: [
        {
          title: "纳品批号",
          dataIndex: "batchNumber"
        },
        {
          title: "纳品数（EA）",
          dataIndex: "batchCount"
        },
        {
          title: { customRender: "customActionTion" },
          dataIndex: "key",
          key: "x",
          slots: { customRender: "customAction", title: "customActionTitle" }
        }
      ]
    };
  },
  methods: {
    handleChange() {
      alert("123");
    }
  }
};
</script>
