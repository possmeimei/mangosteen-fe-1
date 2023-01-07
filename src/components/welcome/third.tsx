import {defineComponent} from 'vue';
import s from './WelcomePage.module.scss'
import chart from '../../assets/icons/chart.svg'
import {RouterLink} from 'vue-router';
export const Third = defineComponent({
    setup() {
        return () =>
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.alarm} src={chart} alt=""/>
                    <p>数据可视化<br/>收支一目了然</p>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/4">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>;
    }
});