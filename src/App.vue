<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
}
html {
  font-family: 微软雅黑;
}
a {
  text-decoration: none;
}
#app {
  font-family: Microsoft YaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-submenu__title {
  height: 48px !important;
  line-height: 48px !important;
}
.el-menu-item {
  height: 44px !important;
  line-height: 44px !important;
}
.el-menu-item-group__title {
  padding: 0px;
}
.font {
  margin-right: 10px;
  margin-left: 10px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
  color: #ffffff !important;
}
.el-row{
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.el-breadcrumb {
  display: inline-block;
}
.el-input__inner {
  height: 36px;
}
.el-menu-item:hover,
.el-menu-item:focus,
.el-menu-item.is-active,
.el-submenu__title:hover,
.el-submenu__title:focus {
  background-color: rgba(255, 255, 255, 0.1);
}
.el-menu-item-group {
  background-color: #409eff;
}
.el-submenu__title i {
  color: #fff !important;
}
.el-menu-item-group .el-menu-item {
  padding-left: 66px !important;
}

.el-header {
  padding: 0px;
}
.el-main {
  padding: 0 !important;
}
.el-table td,
.el-table th {
  padding: 10px 0 !important;
}
.el-collapse-item__content {
  padding-bottom: 0px;
}
.el-form-item{
  margin-bottom: 18px;
}
.el-textarea__inner {
  height: 160px;
  resize: none;
}
.el-form-item__error{
  padding-top: 2px;
}
.Nolook > .el-radio__input.is-checked .el-radio__inner {
    border-color: #f56c6c;
    background: #f56c6c;
}
.Nolook > .el-radio__input.is-checked+.el-radio__label{
    color: #f56c6c;
}
.stripinput .el-input__inner{
  height: 30px;
}
.frame .el-input__inner{
  height: 30px;
}
.frame .el-input__icon{
  line-height: 30px;
}
.el-date-picker__header{
  margin-bottom: 0px;
}
.el-picker-panel__content{
  margin-top: 0px;
}
</style>
