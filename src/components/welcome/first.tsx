import {defineComponent} from 'vue';
import s from './welcome.module.scss'
import piggy from '../../assets/icons/piggy.svg'
import {RouterLink} from 'vue-router';
export const First = defineComponent({
    setup() {
        return () =>
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.piggy} src={piggy} alt=""/>
                    <p>会挣钱<br/>还要会省钱</p>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>;
    }
});