<template>
    <div class="classlist">
        <div class="classlist2">
            <div class="title"><h3>我的信息</h3><span>编辑</span></div>
            <div class="strip">
                <div>
                    <h5>用户名:</h5>
                </div>
                <div>
                    <span>风里来雨里去 </span>
                    
                </div>
            </div>
            <div class="strip">
                <div>
                    <h5>真实姓名:</h5>
                </div>
                <div>
                    <span>未知 </span>
                    <el-input v-model="input" placeholder="请输入内容" class="stripinput"></el-input>
                </div>
            </div>
            <div class="strip">
                <div>
                    <h5>所在地:</h5>
                </div>
                <div><span>未知 </span></div>
            </div>
            <div class="strip">
                <div>
                    <h5>性别:</h5>
                </div>
                <div>
                    
                    <el-radio-group v-model="form.resource" class="Sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="strip">
                <div>
                    <h5>生日:</h5>
                </div>
                <div><span>231</span><el-date-picker type="date" placeholder="选择日期" v-model="form.date1" class="frame" style="width: 200px;height:30px;"></el-date-picker></div>
            </div>
            <div class="strip">
                <div>
                    <h5>个性签名:</h5>
                </div>
                <div><span>风里来雨里去 风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去风里来雨里去</span></div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        input: "",
        form: {
            resource: "",
            date1:""
        }
    };
  }
};
</script>

<style scoped>
.classlist {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.classlist2 {
  padding: 20px 40px 20px 20px;
  background-color: #fff;
}
.title {
  width: 100%;
  height: 12px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
}
.title h3 {
  padding-right: 4px;
  display: inline-block;
  background-color: #fff;
  margin: 0px;
  font-size: 16px;
}
.title span {
  transition: 0.5s;
  border-radius: 20px;
  margin-top: -2px;
  float: right;
  padding: 2px 8px;
  font-size: 14px;
  background-color: #f2f2f2;
  border: 1px solid #cccccc;
  color: #333333;
  cursor: pointer;
}
.title span:hover {
  background-color: #409eff;
  border: 1px solid #409eff;
  color: #ffffff;
}
.strip {
  overflow: hidden;
  margin-bottom: 12px;
  margin-top: 4px;
}
.strip > div:nth-child(1) {
  display: inline-block;
  float: left;
  width: 66px;
  margin-right: 10px;
}
.strip > div:nth-child(2) {
  display: inline-block;
  width: 79%;
}
.strip div h5 {
  margin: 0;
  margin-top: 4px;
  float: right;
  font-size: 14px;
  color: #808080;
}
.strip div span {
  margin-top: 4px;
  font-size: 14px;
  float: left;
}
.stripinput {
  width: 200px !important;
  height: 30px;
  margin-top: 0px;
}
.Sex{
    margin-top: 4px;
    width: 100%;
}
</style>
