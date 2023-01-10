import {defineComponent, PropType} from 'vue';
import s from './FloatButton.module.scss';
import {Icon, IconName} from './Icon';

export const FloatButton = defineComponent({
    props:{
        iconName:{
            type:String as PropType<IconName>,
            required:true,
        }
    },
    setup(props, context) {
        return () => (
            <div>
               <Icon name={props.iconName} class={s.icon}></Icon>
            </div>
        );
    }
});