<template>
   <el-row align-center class="header">
    <el-dropdown>
  <el-button size="medium" type="primary">
    File<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item icon="el-icon-plus">新建</el-dropdown-item>
    <el-dropdown-item icon="el-icon-printer">打印</el-dropdown-item>
    <el-dropdown-item icon="el-icon-tickets">PDF</el-dropdown-item>
    <el-dropdown-item icon="el-icon-document">另存为</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    <el-button size="medium">View</el-button>
     <el-button size="medium">查询</el-button>
      <el-button size="medium">保存</el-button>
       <el-button size="medium" disabled>审批</el-button>
       <el-avatar :size="36" style="float:right; margin:12px; " :src="circleUrl"></el-avatar>
   </el-row>
</template>
<script>
export default {
  name: "Header",
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    }
  }
}
</script>
<style >
.header{
    height: 60px ;
    line-height: 60px;
}
</style>
