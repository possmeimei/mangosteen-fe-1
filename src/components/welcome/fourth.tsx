import {defineComponent} from 'vue';
import s from './welcome.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import {RouterLink} from 'vue-router';
export const Fourth = defineComponent({
    setup() {
        return () =>
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.alarm} src={cloud} alt=""/>
                    <p>云备份<br/>再也不怕数据丢失</p>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/start">开启应用</RouterLink>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                </div>
            </div>;
    }
});