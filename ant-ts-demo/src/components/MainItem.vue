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
              :value="productName"
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
        <a-space style="display:block;margin-top:12px">
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
        </a-space>
      </a-col>
      <a-col :span="6" style="padding:0 24px">
        <a-table
          :columns="columns"
          :data-source="batchData"
          bordered
          size="small"
          :pagination="false"
        >
          <template #customActionTitle="{  }">
            <PlusOutlined @click="addData()" />
          </template>
          <template #customAction="{  record }">
            <MinusOutlined @click="showConfirm(record)"
          /></template>
        </a-table>
      </a-col>
      <a-col :span="7"
        ><a-table
          :columns="checkColumns"
          :data-source="checkData"
          bordered
          size="small"
          :pagination="false"
        >
        </a-table
      ></a-col>
    </a-row>
    <a-modal
      title="添加批次"
      v-model:visible="isShowAddBatchDialog"
      @ok="addBatchItem()"
    >
      <div>
        <a-space :size="12">
          <a-input
            style="width:150px"
            placeholder="纳品批号"
            v-model:value="batchNumber"
          ></a-input>
          <a-input
            style="width:150px"
            placeholder="纳品数"
            v-model:value="batchCount"
          ></a-input>
        </a-space>
      </div>
    </a-modal>
    <a-modal
      v-model:visible="isShowConfirm"
      title="Modal"
      ok-text="确认"
      cancel-text="取消"
      @ok="deleteData(record)"
    >
      {{ constants.confirmDeleteBatchItem }}
    </a-modal>
  </a-card>
</template>
<script>
import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";
import { Constants } from "./../common/constants.ts";
export default {
  name: "MainItem",
  components: {
    PlusOutlined,
    MinusOutlined
  },
  data() {
    return {
      orderNumber: "IQC-20Y1116-01",
      constants: Constants,
      isShowAddBatchDialog: false,
      isShowConfirm: false,
      batchNumber: "",
      productName: "",
      batchCount: undefined,
      currentBatch: undefined,
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
      checkData: [
        { key: "0", checker: "喜洋洋", reviewer: "美洋洋", confirm: "灰太狼" }
      ],
      checkColumns: [
        {
          title: "检查者",
          dataIndex: "checker",
          align: "center"
        },
        {
          title: "检讨者",
          dataIndex: "reviewer",
          align: "center"
        },
        {
          title: "承认者",
          dataIndex: "confirm",
          align: "center"
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
          dataIndex: "key",
          key: "x",
          slots: {
            customRender: "customAction",
            title: "customActionTitle"
          }
        }
      ]
    };
  },
  methods: {
    handleChange() {
      alert("123");
    },
    addData() {
      this.isShowAddBatchDialog = true;
    },
    addBatchItem() {
      this.batchData.push({
        key: this.batchData.length | "0",
        batchNumber: this.batchNumber,
        batchCount: this.batchCount
      });
      this.batchCount = undefined;
      this.batchNumber = "";
      this.isShowAddBatchDialog = false;
    },
    deleteData() {
      this.batchData.splice(this.batchData.indexOf(this.currentBatch), 1);
      this.isShowConfirm = false;
    },
    showConfirm(item) {
      this.isShowConfirm = true;
      this.currentBatch = item;
    }
  }
};
</script>
