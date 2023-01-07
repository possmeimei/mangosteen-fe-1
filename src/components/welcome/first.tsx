import {defineComponent} from 'vue';
import {WelcomeLayout} from './WelcomeLayout';
import piggy from '../../assets/icons/piggy.svg';
import {RouterLink} from 'vue-router';
import s from './WelcomeLayout.module.scss';
export const First = defineComponent({
    setup() {
        const slots = {
            icon:()=> <img src={piggy}/>,
            text:()=> <p>会挣钱<br/>还要会省钱</p>,
            buttons:()=> <>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink to="/welcome/2">下一页</RouterLink>
                <RouterLink to="/start">跳过</RouterLink>
            </>
        };
        return () =>
            <WelcomeLayout v-slots={slots}></WelcomeLayout>;
    }
});