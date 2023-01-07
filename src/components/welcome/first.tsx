import {WelcomeLayout} from './WelcomeLayout';
import piggy from '../../assets/icons/piggy.svg';
import {RouterLink} from 'vue-router';
import s from './WelcomeLayout.module.scss';
export const First = ()=>(
    <WelcomeLayout>
        {{
            icon:()=> <img src={piggy} alt={'存钱罐'}/>,
             text:()=> <p>会挣钱<br/>还要会省钱</p>,
             buttons:()=> <>
                 <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                 <RouterLink to="/welcome/2">下一页</RouterLink>
                 <RouterLink to="/start">跳过</RouterLink>
             </>
        }}
    </WelcomeLayout>
)