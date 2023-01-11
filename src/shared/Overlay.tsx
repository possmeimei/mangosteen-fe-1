import {defineComponent, PropType} from 'vue';
import {Icon} from './Icon';
import s from './Overlay.module.scss';

export const Overlay = defineComponent({
    props:{
        onClose:{
            type: Function as PropType<()=> void>
        }
    },
    setup(props, context) {
        const close = () => {
            props.onClose?.();
        };
        return () => <>
            <div class={s.mask} onClick={close}></div>
            <div class={s.overlay}>
                <section>
                    <h2>未登录用户</h2>
                    <p>点击登录</p>
                </section>
                <nav>
                    <ul>
                        <li>
                            <Icon name={'statistics'}/>
                            <p>统计图表</p>
                        </li>
                        <li>
                            <Icon name={'output'}/>
                            <p>导出数据</p>
                        </li>
                        <li>
                            <Icon name={'notice'}/>
                            <p>记账提醒</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </>;
    }
});