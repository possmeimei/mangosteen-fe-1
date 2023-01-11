import {defineComponent, PropType} from 'vue';
import s from './Center.module.scss';
import {IconName} from './Icon';

export const Center = defineComponent({
    props:{
        iconName:{
            type:String as PropType<IconName>,
        }
    },
    setup(props, context) {
        return () => (
            <div class={s.center}>
                {context.slots.default?.()}
            </div>
        );
    }
});