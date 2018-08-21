<template>
    <div class="TageList">
        <div class="bigSty">
            <div class="TageListtop">
                <el-select v-model="value4" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value4" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" class="newTxt">+新建文章</el-button>
                <el-button type="danger"  class="newTxt">批量删除</el-button>
            </div> 
            <div class="newsList">
                <template>
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%"
                    >
                        <el-table-column
                        type="selection"
                        width="35">
                        </el-table-column>

                        <el-table-column
                        prop="date"
                        label="时间"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="用户ID"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="标题">
                        </el-table-column>
                        <el-table-column
                        width="120"
                        prop="state"
                        label="状态">
                        </el-table-column>
                        <el-table-column label="状态" width="80">
                            <template scope="scope">
                                <el-switch
                                v-model="value2"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-switch
                        v-model="value2"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                        </el-switch>
                        <el-table-column
                        prop="address"
                        width="148"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <!-- 分页 -->
            <div class="block">
                <el-pagination
                :current-page="currentPage4"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="6"
                layout="total, prev, pager, next, jumper"
                :total="200">
                </el-pagination>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            },{
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                state:'已发布'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                state:'已发布'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                state:'已发布'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                state:'已发布'
            },{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                state:'已发布'
            }],
            value4: '',
            value2: true,
            currentPage4: 4,
        }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                return this.$confirm(`确定删除吗？`);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
.TageList{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
.bigSty{
    padding: 10px 10px;
    background-color: #fff;
}
.TageListtop{
    width: 100%;
    
}
.newTxt{
    margin-left: 10px;
    float: right;
    padding: 10px 18px;
}
.newsList{
    margin-top: 20px;
    margin-bottom: 12px;
    min-height: 437px;
}
.block{
    text-align: right;
    margin-bottom: 6px;
}
</style>