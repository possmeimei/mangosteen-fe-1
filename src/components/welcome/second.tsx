import s from './WelcomeLayout.module.scss'
import alarm from '../../assets/icons/alarm.svg'
import {RouterLink} from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout';
export const Second = ()=>(
    <WelcomeLayout>
        {{
            icon:()=> <img src={alarm} alt={'闹钟'}/>,
            text:()=> <p>每日提醒<br/>不会遗漏每一笔账单</p>,
             buttons:()=> <>
                 <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                 <RouterLink to="/welcome/3">下一页</RouterLink>
                 <RouterLink to="/start">跳过</RouterLink>
             </>
        }}
    </WelcomeLayout>
)