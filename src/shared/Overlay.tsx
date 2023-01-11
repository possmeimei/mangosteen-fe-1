import {defineComponent, PropType} from 'vue';
import {Icon} from './Icon';
import s from './Overlay.module.scss';
import {RouterLink} from 'vue-router';

export const Overlay = defineComponent({
    props: {
        onClose: {
            type: Function as PropType<() => void>
        }
    },
    setup(props, context) {
        const close = () => {
            props.onClose?.();
        };
        const onClickSignIn = () => {
        };
        return () => <>
            <div class={s.mask} onClick={close}></div>
            <div class={s.overlay}>
                <section class={s.currentUser} onClick={onClickSignIn}>
                    <h2>未登录用户</h2>
                    <p>点击登录</p>
                </section>
                <nav>
                    <ul>
                        <li>
                            <RouterLink to={'/statistics'} class={s.action}>
                                <Icon name={'statistics'} class={s.icon}/>
                                <p>统计图表</p>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to={'/output'} class={s.action}>
                                <Icon name={'output'} class={s.icon}/>
                                <p>导出数据</p>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to={'/notice'} class={s.action}>
                                <Icon name={'notice'} class={s.icon}/>
                                <p>记账提醒</p>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>;
    }
});