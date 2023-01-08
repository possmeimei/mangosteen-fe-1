import s from './WelcomeLayout.module.scss';
import {FunctionalComponent} from 'vue';

export const First: FunctionalComponent = () => {
    return <div class={s.card}>
            <svg>
                <use xlinkHref="#piggy"></use>
            </svg>
            <p>会挣钱<br/>还会省钱</p>
        </div>;
};

First.displayName = 'First';