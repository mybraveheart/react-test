import React from 'react';

import { useRequest, Loading, connect } from 'umi';

import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts/lib/echarts';

import { changeUsername } from './service';

import styles from './index.less';

const IndexPage = ({ dashboard, dispatch }) => {
  console.log('???', dashboard, dispatch);
  const mytextStyle = {
    color: '#333', //文字颜色
    fontStyle: 'normal', //italic斜体  oblique倾斜
    fontWeight: 'normal', //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
    // fontFamily:"sans-serif",   //字体系列
    fontSize: 12, //字体大小
  };

  const getOption = () => {
    return {
      title: {
        text: '',
      },
      //点击提示标签
      // tooltip: {},
      legend: {
        //图例文字展示
        data: [{ name: '今日更新投诉量' }, { name: '昨日更新投诉量' }],
        //图例显示在底部
        bottom: 0,
        //图例背景颜色
        backgroundColor: 'transparent',
        // 图例标记的图形宽度。[ default: 25 ]
        itemWidth: 12,
        // 图例标记的图形高度。[ default: 14 ]
        itemHeight: 9,
        //图例文字样式设置
        textStyle: mytextStyle || '#ff0000',
      },
      radar: {
        //雷达图绘制类型，支持 'polygon' 和 'circle' [ default: 'polygon' ]
        shape: 'polygon',
        splitNumber: 3,
        center: ['50%', '50%'],
        radius: '65%',
        //指示器名称和指示器轴的距离。[ default: 15 ]
        nameGap: 5,
        triggerEvent: true,
        name: {
          textStyle: {
            color: '#999',
            backgroundColor: 'transparent',
            // borderRadius: 3,
            // padding: [3, 5]
          },
          // formatter: function(value, indicator) {
          //   value = value.replace(/\S{4}/g, function(match) {
          //     return match + '\n';
          //   });
          //   // value = value + '\n' + indicator.value;
          //   return '{a|' + value + '}' + '\n' + '{b|' + indicator.value + '}';
          // },
          //富文本编辑 修改文字展示样式
          rich: {
            a: {
              color: '#999',
              fontSize: 12,
              align: 'center',
            },
            b: {
              color: '#333',
              fontSize: 17,
              align: 'center',
            },
          },
        },
        // 设置雷达图中间射线的颜色
        axisLine: {
          lineStyle: {
            color: '#ddd',
          },
        },
        indicator: [
          { name: '车辆已售', value: 380, max: 500 },
          { name: '商家冒充个人', value: 290, max: 500 },
          { name: '商家服务态度差', value: 450, max: 500 },
          { name: '电话无法接通', value: 300, max: 500 },
          { name: '走私套牌抵押车', value: 480, max: 500 },
          { name: '价格高于标价', value: 200, max: 500 },
          { name: '卖新车', value: 350, max: 500 },
          { name: '图片与车款不符合', value: 333, max: 500 },
        ],
        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea: {
          show: false,
          areaStyle: {
            color: 'rgba(255,0,0,0)', // 图表背景的颜色
          },
        },
      },
      series: [
        {
          name: '投诉统计',
          type: 'radar',
          //显示雷达图选中背景
          areaStyle: { normal: {} },
          data: [
            {
              value: [380, 290, 450, 300, 480, 200, 350, 333],
              // 设置区域边框和区域的颜色
              itemStyle: {
                normal: {
                  //雷达图背景渐变设置
                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  //   {
                  //     offset: 0.5,
                  //     color: 'rgba(48,107, 231, 1)',
                  //   },
                  //   {
                  //     offset: 1,
                  //     color: 'rgba(73,168, 255, 0.7)',
                  //   },
                  // ]),
                  color: '#00ffff',
                  //去除刻度
                  opacity: 0,
                  //雷达图边线样式
                  lineStyle: {
                    width: 0,
                    color: '#306BE7',
                  },
                },
              },
              name: '今日更新投诉量',
              id: 'jintian',
            },
            {
              value: [10, 250, 100, 370, 80, 500, 190, 400],
              // 设置区域边框和区域的颜色
              itemStyle: {
                normal: {
                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  //   {
                  //     offset: 0.5,
                  //     color: 'rgba(139,241, 134, 0.7)',
                  //   },
                  //   {
                  //     offset: 1,
                  //     color: 'rgba(0,208, 131, 1)',
                  //   },
                  // ]),
                  color: '#ffff00',
                  opacity: 0,
                  lineStyle: {
                    width: 0,
                    color: '#8BF186',
                  },
                },
              },
              name: '昨日更新投诉量',
              id: 'zuotian',
            },
          ],
        },
      ],
    };
  };
  // let onEvents = {
  //   click: onChartClick,
  //   legendselectchanged: onChartLegendselectchanged,
  // };

  function getUsername(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, data: { name: '123' } });
      }, 1000);
    });
  }

  // const { loading, run } = useRequest((username) => ({
  //   url: '/api/changeUsername',
  //   method: 'post',
  //   data: { username },
  // }), {
  //   manual: true, //false初始化时自动执行,true需要手动调用 run 时才会触发执行异步函数
  // ,
  //   onSuccess: (result, params) => {
  //     if (result.success) {
  //       setState('');
  //       message.success(`The username was changed to "${params[0]}" !`);
  //     }
  //   }
  // });
  {
    /* <Button onClick={() => run(state)} loading={loading}>
        Edit
      </Button> */
  }

  const getName = () => {
    let use = useRequest(changeUsername, {
      formatResult: res => {
        return res.data;
      },
    });
    console.log(use);
    const { data, error, loading } = use;
    // const { data, error, loading } = useRequest(getUsername);

    if (error) {
      return <div>failed to load</div>;
    }
    if (loading) {
      return <div>loading...</div>;
    }
    return <div>Username: {data.name}</div>;
  };
  return (
    <div>
      model:{dashboard.name}
      {getName()}
      <h1 className={styles.title}>Dashboard index</h1>
      <div className={styles.echartsRadar}>
        <ReactEcharts
          option={getOption()}
          notMerge={true}
          lazyUpdate={true}
          // onEvents={onEvents}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
export default connect(({ dashboard }) => ({
  dashboard,
}))(IndexPage);
