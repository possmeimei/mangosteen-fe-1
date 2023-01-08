import s from './WelcomeLayout.module.scss';
import {FunctionalComponent} from 'vue';

export const Second: FunctionalComponent = () => {
    return <div class={s.card}>
        <svg>
            <use xlinkHref="#alarm"></use>
        </svg>
        <p>每日提醒<br/>不遗漏每一笔账单</p>
    </div>;
};

Second.displayName = 'Second';