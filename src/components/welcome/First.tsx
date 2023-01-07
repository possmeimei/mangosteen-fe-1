import piggy from '../../assets/icons/piggy.svg';
import s from './WelcomeLayout.module.scss';
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
    return <div class={s.card}>
        <img src={piggy} alt={'存钱罐'}/>
        <p>会挣钱<br />还会省钱</p>
    </div>
}

First.displayName = 'First'