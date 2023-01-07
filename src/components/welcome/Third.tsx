import chart from '../../assets/icons/chart.svg';
import s from './WelcomeLayout.module.scss';
import {FunctionalComponent} from 'vue';

export const Third: FunctionalComponent = () => {
    return <div class={s.card}>
        <img src={chart} alt={'数据'}/>
        <p>数据可视化<br/>收支一目了然</p>
    </div>;

};

Third.displayName = 'Third';