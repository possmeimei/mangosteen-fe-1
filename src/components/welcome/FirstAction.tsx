import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
export const FirstAction: FunctionalComponent = () => {
    return <div class={s.actions}>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        <RouterLink to="/welcome/2" >下一页</RouterLink>
        <RouterLink to="/start" >跳过</RouterLink>
    </div>
}

FirstAction.displayName = 'FirstAction'