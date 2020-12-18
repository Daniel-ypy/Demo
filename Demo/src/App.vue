<template>
  <el-container id="app">
    <el-header class="header">
      <Header/>
      </el-header>
  <el-main class="main" >
    <el-card style="margin-top:-12px">
    <div style="display:flex;justify-content: flex-end; align-items:center">
       <span>单据编号</span>
        <input type="text" style="width:80px;height:26px;" value="IQC-20Y1116-01"/>
    </div>
    <el-row class="spacing-10" :gutter="20">
      <el-col :span="10">
      <div>
        <span>品番</span>
        <el-select v-model="product"  @change="productChange(product)" style="height:30px;width:120px" placeholder="请选择">
    <el-option
      v-for="item in products"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        <!-- <input type="text" style="width:80px" value="22061006.1"/> -->
         <span style="margin-left:18px">品名</span>
        <input type="text" style="width:160px;height:26px;" v-model="productName"/>
      </div>
      <div style="margin-top:10px">
        <span style="vertical-align: top;">检查周期基准</span>
        <div style="display:inline-block ;border: solid 1px #c6c6c6; width: 274px; padding-left:6px">
          <div><strong style="color:red;">A</strong> 每批次 | <strong style="color:blue;">B</strong> 1次/三个月(包含<strong style="color:red;">A</strong>)</div>
          <div><strong style="color:green;">C</strong> 1次/半年(包含<strong style="color:red;">A</strong> ，<strong style="color:blue;">B</strong>)</div>
        </div>
      </div>
      </el-col>
       <el-col :span="7">
         <el-table
         style="width:290px"
      :data="tableData"
      :row-style="{height:'10px'}">
      <el-table-column
        prop="batchNumber"
        label="纳品批号"
        width="130">
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="纳品数(EA)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="action"
        width="40">
        <template slot-scope="scope">
              <i class="pointer el-icon-share"></i>
            </template>
        <template slot="header"  slot-scope="scope">
             <i class="pointer el-icon-plus"></i>
            </template>
      </el-table-column>
    </el-table>
      </el-col>
       <el-col :span="7">
        <el-table
          style="width:300px;float:right;"
          :data="editHistoryData"
      :row-style="{height: '20px'}">
      <el-table-column
        prop="qc"
        label="检查"
        width="100">
      </el-table-column>
        <el-table-column
        prop="review"
        label="检讨"
        width="100">
        </el-table-column>
        <el-table-column
        prop="confirm"
        label="承认"
        width="100">
        </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    </el-card>
    <el-row style="margin-top:20px">
      <MainCheckItem :product="product"/>
    </el-row>
    <el-row>
      <OtherCheckItems :product="product"/>
    </el-row>
  </el-main>
   <router-view />
</el-container>
</template>

<script>
import Header from "./components/HeaderComponent"
import MainCheckItem from "./components/MainCheckItems"
import OtherCheckItems from "./components/OtherCheckItems"

export default {
  name: "App",
  components: {
    Header,
    MainCheckItem,
    OtherCheckItems
  },
  data () {
    return {
      tableData: [
        {
          batchNumber: "2020.11.10",
          quantity: "1500",
          action: "-"
        },
        {
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
  methods: {
    productChange(product) {
      var products = this.products.find(x => x.value === product)
      // this.productName = products[0].productName;
      this.product = products.label
      this.productName = products.productName
    }
  }
}
</script>

<style scoped>
.header {
    height: 60px !important;
}
.spacing-10{
  margin-top: 10px;
}
.pointer{
  cursor: pointer !important;
}
</style>
