<template>
    <div class="Home">
        <div class="HomeTop">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <i class="icon iconfont icon-icon-shujujiamijishu Homefont color1"></i>
                        <div class="Homespan">
                            <span>我发布的文章</span>
                            <em>100</em>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <i class="icon iconfont icon-pinglun1 Homefont color2"></i>
                        <div class="Homespan">
                            <span>被评论的文章</span>
                            <em>100</em>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <i class="icon iconfont icon-zan Homefont color3"></i>
                        <div class="Homespan">
                            <span>我收到的赞</span>
                            <em>100</em>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <i class="icon iconfont icon-fensi Homefont color4"></i>
                        <div class="Homespan">
                            <span>我的粉丝</span>
                            <em>100</em>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div>
        <!-- 可视化数据 -->
            <el-row :gutter="20" class="homeData">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="homeDataspan">
                            <h3>博客点击量</h3>
                            <span>曲线图</span>
                        </div>
                        <div id="main1"></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="homeDataspan">
                            <h3>点赞点击量</h3>
                            <span>柱状图</span>
                        </div>
                        <div id="main2"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/markLine";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/legend";

import axios from "axios";

export default {
  name: "hello",
  data() {
    return {};
  },
  mounted() {

    // axios.post('http://localhost:7001/news',{
    //         title:'123',
    //         content:'123123'
    //     })
    //     .then((res) => {
    //         alert(res.data.masg);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    //  fetch(`http://localhost:8080/`,{
    //       method:"post",
    //       body:`title='123213'&content='123213213'`,
    //       headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded'
    //       }
    //   })
    //   .then(json=>json.json())
    //   .then(data=>{
    //       console.log(data)
    //   })

    // $axios({
    //   method: "post",
    //   url: "http://localhost:7001/news",
    //   data: {
    //     title: 'dhsajkdhskajj',
    //     content: 'hjakhfjakhfdjakfhdjkahfjkd'
    //   }
    // }).then(res => {
    //   console.log(res.data);
    // });

    let myChart = echarts.init(document.getElementById("main1"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis"
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月"]
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        }
      ],
      series: [
        {
          name: "点击量",
          type: "line",
          data: [88, 48, 163, 88, 120, 140, 118, 126],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          }
        }
      ]
    });

    let myChart1 = echarts.init(document.getElementById("main2"));
    myChart1.setOption({
      tooltip: {
        trigger: "axis"
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "点赞量",
          type: "bar",
          data: [344, 289, 322, 421, 266, 355, 289, 321],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          }
        }
      ]
    });
  }
};
</script>

<style scoped>
.Home {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.HomeTop .bg-purple {
  width: 100%;
  height: 140px;
  background-color: #fff;
  position: relative;
}
.Homefont {
  display: inline-block;
  font-size: 60px;
  margin: 20px 0px 0 30px;
}
.Homespan {
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: right;
  display: inline-block;
}
.Homespan span {
  width: 100%;
  font-size: 16px;
  color: #868686;
  display: inline-block;
}
.Homespan em {
  /* width: 100%; */
  margin-top: 6px;
  font-size: 22px;
  color: #808080;
  font-style: normal;
  display: inline-block;
}
.color1 {
  color: #fb8b37;
}
.color2 {
  color: #91e017;
}
.color3 {
  color: #5fa3fe;
}
.color4 {
  color: #fb7b74;
}
.homeData {
  margin-top: 20px;
}
.homeData .bg-purple {
  width: 100%;
  height: 380px;
  background-color: #fff;
  padding-top: 20px;
}
.homeDataspan {
  margin-left: 30px;
}
.homeDataspan h3 {
  margin: 0px;
  color: #747474;
  font-weight: normal;
  margin-bottom: 4px;
}
.homeDataspan span {
  color: #c9c9c9;
  font-size: 14px;
}
#main1 {
  width: 90%;
  height: 350px;
  margin-top: -20px;
  margin-left: 10px;
}
#main2 {
  width: 90%;
  height: 350px;
  margin-top: -20px;
  margin-left: 10px;
}
</style>