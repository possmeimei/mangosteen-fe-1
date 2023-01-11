import {defineComponent, PropType} from 'vue';
import s from './Icon.module.scss';
export type IconName = 'mangosteen' | 'piggy' | 'chart' | 'cloud' | 'alarm' | 'add' | 'menu'
export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<IconName>,
            required:true,
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