<template>
    <div class="classlist">
        <div class="classlist2">
            <div class="title">
                <h3>新建文章</h3>
            </div>
            <div class="creat">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="文章标题" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="关键字" prop="keyword">
                        <el-input v-model="ruleForm.keyword"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="describe">
                        <el-input v-model="ruleForm.describe"></el-input>
                    </el-form-item>
                    <el-form-item label="分类" prop="region" class="fl">
                        <el-select v-model="ruleForm.region" placeholder="请选择分类">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="权限" prop="resource" class="qx" >
                        <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="可见"></el-radio>
                        <el-radio label="不可见" class="Nolook"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="文章内容" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        keyword: "",
        describe: "",
        delivery: false,
        type: [],
        resource: "可见",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        keyword: [
          { required: true, message: "请输入关键字", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        describe: [
          { required: true, message: "请输入描述", trigger: "blur" },
          { min: 3, max: 40, message: "长度在 3 到 40 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        resource: [
          { required: true, trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写文章内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.classlist{
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.classlist2{
  padding: 10px 60px 10px 10px;
  background-color: #fff;
}
.title h3{
    margin: 0;
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 18px;
}
.fl{
    margin-bottom: 6px;
}
.qx{
    margin-bottom: 4px;
}

</style>
