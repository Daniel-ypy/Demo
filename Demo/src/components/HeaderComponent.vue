<template>
   <el-row align-center class="header">
    <el-dropdown split-button type="primary" >
  File
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item ><el-button type="primary" icon="el-icon-document">新建</el-button></el-dropdown-item>
    <el-dropdown-item ><el-button   type="primary" icon="el-icon-printer">打印</el-button></el-dropdown-item>
    <el-dropdown-item><el-button   type="primary" icon="el-icon-document-copy">PDF</el-button></el-dropdown-item>
    <el-dropdown-item><el-button   type="primary" icon="el-icon-document-checked">另存为</el-button></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    <el-button size="medium">View</el-button>
     <el-button size="medium">查询</el-button>
      <el-button size="medium">保存</el-button>
       <el-button size="medium" disabled>审批</el-button>
   </el-row>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style >
.header{
    height: 60px ;
    line-height: 60px;
}
</style>
