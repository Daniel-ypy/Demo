<template>
  <el-container id="app">

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
      isAddBatch: false,
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
