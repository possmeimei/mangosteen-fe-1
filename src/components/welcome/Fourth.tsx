import s from './WelcomeLayout.module.scss';
import {FunctionalComponent} from 'vue';

export const Fourth: FunctionalComponent = () => {
    return <div class={s.card}>
        <svg>
            <use xlinkHref="#cloud"></use>
        </svg>
        <p>云备份<br/>再也不怕数据丢失</p>
    </div>;
};

Fourth.displayName = 'Fourth';