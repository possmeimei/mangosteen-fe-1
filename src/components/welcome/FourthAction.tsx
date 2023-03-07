import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import {SkipFeatures} from '../../shared/SkipFeatures';
const onClick= ()=>{
    localStorage.setItem('skipFeatures','yes')
}
export const FourthAction: FunctionalComponent = () => {
    return <div class={s.actions}>
        <SkipFeatures class={s.fake}/>
        <span onClick={onClick}>
        <RouterLink to="/start" >开启应用</RouterLink>
        </span>
        <SkipFeatures class={s.fake}/>
    </div>
}

FourthAction.displayName = 'FourthAction'