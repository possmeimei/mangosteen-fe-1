import {defineComponent, PropType} from 'vue';
import s from './Icon.module.scss';

export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<'mangosteen' | 'piggy' | 'chart' | 'cloud' | 'alarm' | 'add'>
        }
    },
    setup(props, context) {
        return () => (
            <svg class={s.icon}>
                <use xlinkHref={'#' + props.name}></use>
            </svg>
        );
    }
});