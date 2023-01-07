import {defineComponent} from 'vue';
import s from './WelcomeLayout.module.scss'
import alarm from '../../assets/icons/alarm.svg'
import {RouterLink} from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout';
export const Second = defineComponent({
    setup() {
        const slots = {
            icon:()=> <img src={alarm}/>,
            text:()=> <p>每日提醒<br/>不会遗漏每一笔账单</p>,
            buttons:()=> <>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink to="/welcome/3">下一页</RouterLink>
                <RouterLink to="/start">跳过</RouterLink>
            </>
        };
        return () =>
            <WelcomeLayout v-slots={slots}></WelcomeLayout>;
    }
});