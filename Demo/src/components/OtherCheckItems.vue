<template>
<div>
    <h5>外观及其他项目检查</h5>
     <el-table
     :data="otherItemsData"
     class="el-table--border"
     :header-cell-style="tableHeaderColor"
    style="width: 100%">
    <el-table-column
        prop="number"
        label="No."
        align="center"
        width="60"
        :header-cell-style="{background:'red'}">
      </el-table-column>
      <el-table-column
        prop="checkItems"
        label="检查项目">
      </el-table-column>
      <el-table-column
        prop="checkMethod"
        align="center"
        label="检查方法">
      </el-table-column>
      <el-table-column
        prop="submissionCycle"
        align="center"
        label="提交周期">
        <template slot-scope="scope">
          <div align-center v-html="getSubmissionCycle(scope.row.submissionCycle)"></div>
          </template>
      </el-table-column>
      <el-table-column
        prop="risk"
         align="center"
        label="风险度">
        <template slot-scope="scope">
          <el-dropdown>
  <span class="el-dropdown-link" v-html="getRiskMenuContent(scope.row.risk)">
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>无异常</el-dropdown-item>
    <el-dropdown-item  style="color:orange">警戒</el-dropdown-item>
    <el-dropdown-item style="color:red">危险</el-dropdown-item>
    <el-dropdown-item >合格</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

        </template>
      </el-table-column>
      <el-table-column
        prop="judgment"
        align="center"
        label="判定">
        <template slot-scope="scope">
          <el-dropdown>
          <span class="el-dropdown-link" v-html="getResultMenuContent(scope.row.judgment)">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>合格</el-dropdown-item>
            <el-dropdown-item  style="color:red">不合格</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        </template>
      </el-table-column>
      <el-table-column
        prop="note"
        label="备注"
        align="center"
        width="60">
       <template  slot-scope="scope">
             <label @click="viewNote(scope.row.note.message)" style="font-size:150%" align-center v-html="getNoteContent(scope.row.note)"></label>
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
              checkItems: "不可有杂质",
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
              checkItems: "不可有油污",
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
              checkItems: "不可有尖锐的角",
              checkMethod: "显微镜",
              submissionCycle: "C",
              risk: "合格",
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
              submissionCycle: "-",
              risk: "无异常",
              judgment: "合格",
              note: {
                message: "test",
                isRead: true
              }
            },
            {
              number: 1,
              checkItems: "批锋情况",
              checkMethod: "目视",
              submissionCycle: "A",
              risk: "警戒",
              judgment: "合格",
              note: {
                message: "test",
                isRead: false
              }
            },
            {
              number: 1,
              checkItems: "包装箱完好，不可有油污",
              checkMethod: "目视",
              submissionCycle: "B",
              risk: "危险",
              judgment: "不合格",
              note: {
                message: "test",
                isRead: false
              }
            },
            {
              number: 1,
              checkItems: "穴号确认：1#，2#，3#，4#",
              checkMethod: "目视",
              submissionCycle: "C",
              risk: "合格",
              judgment: "合格",
              note: {
                message: "test",
                isRead: true
              }
            },
            {
              number: 1,
              checkItems: "供应商检查成绩书",
              checkMethod: "目视",
              submissionCycle: "C",
              risk: "合格",
              judgment: "合格",
              note: {
                message: "test",
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
    tableHeaderColor({row, column, rowIndex, columnIndex}) {
      return "background-color:#f5f7fa;color:#9090399;text-align:center; "
    },
    getNoteContent(note) {
      if (note.message === "") {
        return "<i size=\"50\" class=\"pointer el-icon-plus\"></i>"
      }
      if (note.isRead) {
        return "<i size=\"50\" style=\"color:red\"  class=\"pointer el-icon-message\"></i>"
      } else {
        return "<i size=\"50\" class=\"pointer el-icon-message\"></i>"
      }
    },
    getRiskMenuContent(risk) {
      if (risk === "警戒") {
        return "<span style=\"color:orange\">" + risk + "</span><i class=\"pointer el-icon-caret-bottom el-icon--right\"></i>"
      }
      if (risk === "危险") {
        return "<span style=\"color:red\">" + risk + "</span><i class=\"pointer  el-icon-caret-bottom el-icon--right\"></i>"
      }
      return "<span >" + risk + "</span><i class=\"pointer  el-icon-caret-bottom el-icon--right\"></i>"
    },
    getResultMenuContent(result) {
      if (result === "不合格") {
        return "<span style=\"color:red\">" + result + "</span><i class=\"pointer  el-icon-caret-bottom el-icon--right\"></i>"
      }
      return "<span >" + result + "</span><i class=\" pointer el-icon-caret-bottom el-icon--right\"></i>"
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
    }
  }
}
</script>
<style scoped> bod
::v-deep .el-table__header-wrapper {
  border: 3px solid #000;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
</style>
