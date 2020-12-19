<template>
<div>
  <el-dialog title="检测曲线图" :visible.sync="showChat">
  <img src="https://www.bio-equip.com/imgatl/2016/2016070758144440.jpg"/>
  <div slot="footer" class="dialog-footer">
    <el-button @click="showChat = false">取 消</el-button>
    <el-button type="primary" @click="showChat = false">确 定</el-button>
  </div>
</el-dialog>
    <el-table
     :data="mainItemsData"
     :header-cell-style="tableHeaderColor"
    style="width: 100%">
      <el-table-column
        prop="location"
        label="位置"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="specification"
        label="规格"
        width="150">
      </el-table-column>
      <el-table-column
        prop="methodAndTool"
        label="检查方法及工具"
        align="center"
        width="90">
      </el-table-column>
      <el-table-column
        prop="period"
        label="检查周期"
        align="center"
        width="50">
        <template slot-scope="scope">
          <div align-center v-html="getSubmissionCycle(scope.row.period)"></div>
          </template>
      </el-table-column>
      <el-table-column >
        <template slot="header" align="center"  slot-scope="scope">
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
          <template slot-scope="scope">
             <div align-center v-html="getItem4Content(scope.row.item4)"></div>
          </template>
          </el-table-column>
          <el-table-column
          prop="item5"
          label="5">
          <template slot-scope="scope">
            <el-input v-model="scope.row.item5"/>
          </template>
          </el-table-column>
          <el-table-column
          prop="item5"
          label="">
          </el-table-column>
      </el-table-column>
      <el-table-column label="判定结果">
         <el-table-column
          prop="result"
          label="结果"
          align="center"
          width="90">
          <template slot-scope="scope">
             <div align-center v-html="getMainResultContent(scope.row.item4)"></div>
          </template>
          </el-table-column>
          <el-table-column
          prop="note"
          label="备注"
          align="center"
          width="60">
           <template  slot-scope="scope">
             <label  @click="viewNote(scope.row.note.message)"  style="font-size:150%" align-center v-html="getNoteContent(scope.row.note)"></label>
          </template>
          </el-table-column>
      </el-table-column>
      <el-table-column
          prop="note"
          label="SPC管控项目"
          align="center"
          width="110">
          <template slot-scope="scope">
              <el-button @click="viewChat()" size="small" type="primary" >Chart</el-button>
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
      showChat: false,
      mainItemsData: [],
      products: [{
        productName: "22061006.1",
        mainItemsData: [
          {
            location: 1,
            specification: "Ø3.50+0.03/-0.0",
            methodAndTool: "针规",
            period: "A",
            item1: "3.50T/3.53Z",
            item2: "3.50T/n3.53Z",
            item3: "3.50T/3.53Z",
            item4: "3.50T/3.58Z",
            result: "合格",
            note: {
              message: "",
              isRead: false
            }
          },
          {
            location: 2,
            specification: "12.70+0.0/-0.10",
            methodAndTool: "千分尺",
            period: "A",
            item1: "12.635",
            item2: "12.641",
            item3: "18.065",
            item4: "12.637",
            result: "合格",
            note: {
              message: "",
              isRead: false
            }
          },
          {
            location: 3,
            specification: "12.70+0.0/-0.10",
            methodAndTool: "千分尺",
            period: "A",
            item1: "12.635",
            item2: "12.641",
            item3: "18.065",
            item4: "12.637",
            result: "合格",
            note: {
              message: "test",
              isRead: true
            }
          },
          {
            location: 3,
            specification: "12.70+0.0/-0.10",
            methodAndTool: "千分尺",
            period: "A",
            item1: "12.635",
            item2: "12.641",
            item3: "18.065",
            item4: "12.637",
            result: "合格",
            note: {
              message: "test1",
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
  },
  methods: {
    getSubmissionCycle(cycle) {
      if (cycle === "A") {
        return "<span style='color:red;'>A</span>"
      }
      if (cycle === "B") {
        return "<span style='color:blue;'>B</span>"
      }
      if (cycle === "C") {
        return "<span style='color:green;'>C</span>"
      }
      return "<span >" + cycle + "</span>"
    },
    getItem4Content(item) {
      if (item === "3.50T/3.58Z") {
        return "<span style='color:red;'>" + item + "</span>"
      }
      return "<span >" + item + "</span>"
    },
    getMainResultContent(item) {
      if (item === "3.50T/3.58Z") {
        return "<span style='color:red;'>不合格</span>"
      }
      return "<span style='color:blue;'>合格</span>"
    },
    getNoteContent(note) {
      if (note.message === "") {
        return "<i size=\"50\" class=\"pointer el-icon-plus\"></i>"
      }
      if (note.isRead) {
        return "<i size=\"50\" style=\"color:red\" class=\"pointer el-icon-message\"></i>"
      } else {
        return "<i size=\"50\" class=\"pointer el-icon-message\"></i>"
      }
    },
    tableHeaderColor({row, column, rowIndex, columnIndex}) {
      return "background-color:#f5f7fa;color:#9090399;text-align:center; "
    },
    viewNote(message) {
      if (message === "") {
        return
      }
      this.$alert("这是备注信息", "备注", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          })
        }
      })
    },
    viewChat() {
      this.showChat = true
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
    font-size: 150%;
}
.pointer{
  cursor: pointer !important;
}
</style>
