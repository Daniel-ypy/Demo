<template>
<div>
    <h3>外观及其他项目检查</h3>
     <el-table
     :data="otherItemsData"
    style="width: 100%">
    <el-table-column
        prop="number"
        label="No."
        width="50">
      </el-table-column>
      <el-table-column
        prop="checkItems"
        label="检查项目">
      </el-table-column>
      <el-table-column
        prop="checkMethod"
        label="检查方法">
      </el-table-column>
      <el-table-column
        prop="submissionCycle"
        label="提交周期">
      </el-table-column>
      <el-table-column
        prop="risk"
        label="风险度">
      </el-table-column>
      <el-table-column
        prop="judgment"
        label="判定">
      </el-table-column>
      <el-table-column
        prop="note"
        label="备注"
        width="50">
        <template  slot-scope="scope">
            <label  align-center v-if="scope.row.message ==''"><i  class="pointer el-icon-plus"></i></label>
             <label align-center v-if="scope.row.message !==''"><i class="pointer el-icon-message"></i></label>
          </template>
      </el-table-column>
     </el-table>
    </div>
</template>
<script>
export default {
  props: {
    product: {
      type: String,
      default: ""
    }
  },
  name: "OtherCheckItems",
  data () {
    return {
      otherItemsData: [],
      products: [
        {
          productName: "22061006.1",
          otherItemsData: [
            {
              number: 1,
              checkItems: "不可有压痕",
              checkMethod: "显微镜",
              submissionCycle: "-",
              risk: "无异常",
              judgment: "合格",
              note: {
                message: "",
                isRead: false
              }
            },
            {
              number: 1,
              checkItems: "不可有压痕",
              checkMethod: "显微镜",
              submissionCycle: "A",
              risk: "警戒",
              judgment: "合格",
              note: {
                message: "",
                isRead: false
              }
            },
            {
              number: 1,
              checkItems: "不可有压痕",
              checkMethod: "显微镜",
              submissionCycle: "B",
              risk: "危险",
              judgment: "不合格",
              note: {
                message: "",
                isRead: false
              }
            },
            {
              number: 1,
              checkItems: "不可有压痕",
              checkMethod: "显微镜",
              submissionCycle: "C",
              risk: "合格",
              judgment: "合格",
              note: {
                message: "",
                isRead: false
              }
            }
          ]
        },
        {
          productName: "22061006.2"
        }
      ]
    }
  },
  watch: {
    product: function(val, oldValue) {
      if (val !== oldValue) {
        var checkItems = this.products.find(x => x.productName === val)
        if (checkItems != null) {
          this.otherItemsData = checkItems.otherItemsData
        }
      }
    }
  }
}
</script>
<style scoped>
::v-deep .el-table__header-wrapper {
  border: 3px solid #000;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
</style>
