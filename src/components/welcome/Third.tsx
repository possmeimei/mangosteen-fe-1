import s from './WelcomeLayout.module.scss';
import {FunctionalComponent} from 'vue';

export const Third: FunctionalComponent = () => {
    return <div class={s.card}>
        <svg>
            <use xlinkHref="#chart"></use>
        </svg>
        <p>数据可视化<br/>收支一目了然</p>
    </div>;

};

Third.displayName = 'Third';