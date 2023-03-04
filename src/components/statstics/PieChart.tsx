import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './PieChart.module.scss';
import * as echarts from 'echarts';

export const PieChart = defineComponent({
    setup(props, context) {
        const refDiv2 = ref<HTMLDivElement>();
        onMounted(() => {
            if (refDiv2.value === undefined) {
                return;
            }
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(refDiv2.value);
            // 绘制图表
            myChart.setOption(
                {
                    grid: [
                        {left: 0, top: 0, right: 0, bottom: 0}
                    ],
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: 'Search Engine'},
                                {value: 735, name: 'Direct'},
                                {value: 580, name: 'Email'},
                                {value: 484, name: 'Union Ads'},
                                {value: 300, name: 'Video Ads'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            );
        });
        return () => (
            <div ref={refDiv2} class={s.wrapper}></div>
        );
    }
});