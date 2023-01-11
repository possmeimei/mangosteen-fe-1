import {defineComponent, PropType} from 'vue';
import s from './NavBar.module.scss';

export const NavBar = defineComponent({
    props:{
        iconName:{
            type:String as PropType<string>,
        }
    },
    setup(props, context) {
        const {slots} = context
        return () => (
            <div class={s.navbar}>
                <span class={s.icon_wrapper}>
                    {slots.icon?.(s.icon)}
                </span>
                <span class={s.title_wrapper}>
                    {slots.default?.(s.title)}
                </span>
            </div>
        );
    }
});