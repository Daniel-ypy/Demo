<template>
 <el-container >
  <el-header class="header">
      <Header/>
      </el-header>
      <el-card style="margin:12px">
    <div style="display:flex;justify-content: flex-end; align-items:center">
       <span>单据编号</span>
        <input type="text" style="width:150px;height:30px;" value="IQC-20Y1116-01"/>
    </div>
    <el-row class="spacing-10" style="margin-top:12px" :gutter="20">
      <el-col :span="10">
      <div>
        <span>品番</span>
        <el-select v-model="product" size="medium"  @change="productChange(product)" style="width:120px" placeholder="请选择">
    <el-option
      v-for="item in products"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
         <span style="margin-left:8px">品名</span>
        <input type="text" style="width:160px; height:30px"  v-model="productName"/>
      </div>
      <div style="margin-top:10px">
        <span style="vertical-align: top;">检查周期基准</span>
        <div style="display:inline-block ;border: solid 1px #c6c6c6; width: 264px; padding-left:6px">
          <div><strong style="color:red;">A</strong> 每批次 | <strong style="color:blue;">B</strong> 1次/三个月(包含<strong style="color:red;">A</strong>)</div>
          <div><strong style="color:green;">C</strong> 1次/半年(包含<strong style="color:red;">A</strong> ，<strong style="color:blue;">B</strong>)</div>
        </div>
      </div>
      </el-col>
       <el-col :span="7">
         <el-table
         style="width:300px"
         class="el-table--border"
          :header-cell-style="tableHeaderColor"
      :data="tableData"
      >
      <el-table-column
        prop="batchNumber"
        label="纳品批号"
        align="center"
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="纳品数(EA)"
        align="center"
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="action"
        align="center"
        width="40">
        <template slot-scope="scope">
          <div @click="removeBatch(scope.row)" style="font-size:150%">
              <i class="pointer el-icon-minus"></i>
              </div>
            </template>
        <template slot="header"  slot-scope="scope">
          <div  @click="isAddBatch=true;" style="font-size:150%">
             <i class="pointer el-icon-plus"></i>
          </div>
            </template>
      </el-table-column>
    </el-table>
      </el-col>
       <el-col :span="7">
        <el-table
          style="min-width:200px;float:right;"
          class="el-table--border"
          :header-cell-style="tableHeaderColor"
          :data="editHistoryData"
      :row-style="{height: '20px'}">
      <el-table-column
        prop="qc"
        label="检查"
        align="center">
      </el-table-column>
        <el-table-column
        prop="review"
         align="center"
        label="检讨">
        </el-table-column>
        <el-table-column
        prop="confirm"
         align="center"
        label="承认">
        </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    </el-card>
    <el-row style="margin:12px">
      <MainCheckItem :isShowInput=false :product="product"/>
    </el-row>
    <el-row style="margin:0px 12px">
      <OtherCheckItems :product="product"/>
    </el-row>
    <el-row v-if="showChat" style="margin:12px 12px 0 12px">
      <XRChat/>
    </el-row>
    <el-row style="margin:12px; ">
      <el-button style="float:right" @click="$router.back(-1)" size="medium">返回</el-button>
    </el-row>
     <el-dialog width="350px" title="添加纳品批次" :visible.sync="isAddBatch">
  <el-form :model="form">
    <el-form-item label="纳品批号" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="纳品数" :label-width="formLabelWidth">
     <el-input v-model="form.count" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="isAddBatch = false">取 消</el-button>
    <el-button type="primary" @click="addBatch()">确 定</el-button>
  </div>
</el-dialog>
 </el-container>
</template>
<script>
import Header from "./../components/HeaderComponent"
import MainCheckItem from "./../components/MainCheckItems"
import OtherCheckItems from "./../components/OtherCheckItems"
import { mapState } from "vuex"
import XRChat from "./../components/ChatComponent"

export default {
  name: "Chat",
  components: {
    Header,
    MainCheckItem,
    OtherCheckItems,
    XRChat
  },
  data () {
    return {
      isAddBatch: false,
      showChat: false,
      formLabelWidth: "80px",
      currentBatch: {},
      form: {
        name: "",
        count: ""
      },
      tableData: [
        {
          id: 1,
          batchNumber: "2020.11.10",
          quantity: "1500",
          action: "-"
        },
        {
          id: 2,
          batchNumber: "2020.11.10",
          quantity: "1500",
          action: "-"
        }
      ],
      editHistoryData: [
        {
          qc: "喜洋洋",
          review: "美羊羊",
          confirm: "灰太狼"
        }
      ],
      product: "",
      productName: "",
      products: [
        {
          label: "22061006.1",
          value: "22061006.1",
          productName: "Helical Gear-H2812-0606"
        },
        {
          label: "22061006.2",
          value: "22061006.2",
          productName: "Helical Gear-H2020-0202"
        }
      ]
    }
  },
  computed: {
    ...mapState("checkItem", ["isShowChat"])
  },
  watch: {
    isShowChat(newValue) {
      if (!newValue) return
      this.showChat = newValue
    }
  },
  methods: {
    productChange(product) {
      var products = this.products.find(x => x.value === product)
      // this.productName = products[0].productName;
      this.product = products.label
      this.productName = products.productName
    },
    tableHeaderColor({row, column, rowIndex, columnIndex}) {
      return "background-color:#f5f7fa;color:#9090399;text-align:center; "
    },
    addBatch() {
      this.tableData.push({
        id: this.tableData.length + 1 || 1,
        batchNumber: this.form.name,
        quantity: this.form.count,
        action: "-"
      })
      this.isAddBatch = false
    },
    removeBatch(batch) {
      this.currentBatch = batch
      this.$confirm("确认删除？")
        .then(_ => {
          this.tableData.splice(this.tableData.findIndex(item => item.id === batch.id), 1)
        })
        .catch(_ => {})
    }
  }
}
</script>
