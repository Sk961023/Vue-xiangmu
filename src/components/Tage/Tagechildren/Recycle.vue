<template>
    <div class="TageList">
        <div class="bigSty">
            <div class="TageListtop">
                <el-input v-model="input" clearable placeholder="请输入要搜索的标题" class="search"></el-input>
                <el-button type="primary" icon="el-icon-search" class="sure">搜索</el-button>
                 <el-button type="success" class="newTxt">批量恢复</el-button>
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
                        label="创建时间"
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
                        prop="time"
                        label="删除时间">
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
                                type="success"
                                @click="handleEdit(scope.$index, scope.row)">恢复</el-button>
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
                time:'2016-05-02'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                time:'2016-05-02'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                time:'2016-05-02'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                time:'2016-05-02'
            },{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                time:'2016-05-02'
            }],
            value4: '',
            value2: true,
            currentPage4: 4,
            input: '',
        }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
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
.search{
    width: 200px;
}
.sure{
    padding: 9px 10px;
    border: 1px solid #409EFF;
}
</style>