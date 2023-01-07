import s from './WelcomeLayout.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import {RouterLink} from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout';
export const Fourth = ()=>(
    <WelcomeLayout>
        {{
            icon:()=> <img src={cloud} alt={'云端'}/>,
            text:()=> <p>云备份<br/>再也不怕数据丢失</p>,
            buttons:()=> <>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink to="/start">开启应用</RouterLink>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            </>
        }}
    </WelcomeLayout>
)

Fourth.displayName = 'Fourth'