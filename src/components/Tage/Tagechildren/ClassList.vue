<template>
    <div class="classlist">
        <div class="classlist2">
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item title="一致性 Consistency" name="1">
                    <el-collapse-item title="反馈 Feedback" name="2">
                    </el-collapse-item>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['2']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style scoped>
.classlist{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
.classlist2{
    padding: 10px 10px;
    background-color: #fff;
}
.Newly{
    padding: 8px 10px;
}
</style>
