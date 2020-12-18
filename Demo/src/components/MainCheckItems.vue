<template>
<div>
    <el-table
     :data="mainItemsData"
    style="width: 100%">
      <el-table-column
        prop="location"
        label="位置"
        width="50">
      </el-table-column>
      <el-table-column
        prop="specification"
        label="规格"
        width="150">
      </el-table-column>
      <el-table-column
        prop="methodAndTool"
        label="检查方法及工具"
        width="100">
      </el-table-column>
      <el-table-column
        prop="period"
        label="检查周期"
        width="50">
      </el-table-column>
      <el-table-column >
        <template slot="header" align-center  slot-scope="scope">
          <label >实际测量模号</label>
          <span class="action-header">
             <i class="pointer el-icon-plus"></i>
              <i class="pointer el-icon-minus"></i>
             </span>
            </template>
          <el-table-column
          prop="item1"
          label="1"
          >
          </el-table-column>
          <el-table-column
          prop="item2"
          label="2">
          </el-table-column>
          <el-table-column
          prop="item3"
          label="3">
          </el-table-column>
          <el-table-column
          prop="item4"
          label="4">
          </el-table-column>
          <el-table-column
          prop="item5"
          label="">
          </el-table-column>
          <el-table-column
          prop="item6"
          label="">
          </el-table-column>
          <el-table-column
          prop="item7"
          label="">
          </el-table-column>
          <el-table-column
          prop="item8"
          label="">
          </el-table-column>
      </el-table-column>
      <el-table-column label="判定结果">
         <el-table-column
          prop="result"
          label="结果"
          width="50">
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
      </el-table-column>
      <el-table-column
          prop="note"
          label="SPC管控项目"
          width="150">
          <template slot-scope="scope">
              <el-button type="primary" >Chart</el-button>
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
  name: "MainCheckItem",
  data () {
    return {
      mainItemsData: [],
      products: [{
        productName: "22061006.1",
        mainItemsData: [
          {
            location: 1,
            specification: "Ø3.50+0.03/-0.0",
            methodAndTool: "针规",
            period: "A",
            item1: "3.50T\n3.53Z",
            item2: "3.50T\n3.53Z",
            item3: "3.50T\n3.53Z",
            item4: "3.50T\n3.53Z",
            result: "合格",
            note: {
              message: "",
              isRead: false
            }
          }
        ]
      },
      {
        productName: "22061006.2",
        mainItemsData: [
          {
            location: 1,
            specification: "Ø3.40+0.03/-0.0",
            methodAndTool: "针规",
            period: "A",
            item1: "3.40T\n3.43Z",
            item2: "3.40T\n3.43Z",
            item3: "3.40T\n3.43Z",
            item4: "3.40T\n3.43Z",
            result: "合格",
            note: {
              message: "1",
              isRead: false
            }
          }
        ]
      }
      ]
    }
  },
  watch: {
    product: function(val, oldValue) {
      if (val !== oldValue) {
        var checkItems = this.products.find(x => x.productName === val)
        if (checkItems != null) {
          this.mainItemsData = checkItems.mainItemsData
        }
      }
    }
  }
}
</script>
<style >
.action-header {
    float: right;
    display: block;
    margin: 4px;
}
.action-header i {
    margin-left: 6px;
}
.pointer{
  cursor: pointer !important;
}
</style>
