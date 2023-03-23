import {defineComponent, PropType} from 'vue';
import s from './Tabs.module.scss';

export const Tabs = defineComponent({
    props: {
        classPrefix:{
            type:String,
        },
        selected: {
            type: String as PropType<string>,
        },
    },
    emits:['update:selected'],
    setup(props, context) {
        return () => {
            const tabs = context.slots.default?.();
            if (!tabs) return () => null;
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].type !== Tab) {
                    throw new Error('<Tabs> only accepts <Tab> as children');
                }
            }
            return <div class={[s.tabs,props.classPrefix + '_tabs']}>
                <ul class={[s.tabs_nav,props.classPrefix + '_tabs_nav']}>
                    {tabs.map(item => <li
                        class={[item.props?.name === props.selected ? [s.selected,props.classPrefix + '_selected'] : '',props.classPrefix + '_tabs_nav_item']}
                        onClick={() => context.emit('update:selected',item.props?.name)}>
                        {item.props?.name}
                    </li>)}
                </ul>
                <div>
                    {tabs.map(item =>
                        <div v-show={item.props?.name === props.selected}>{item}</div>
                    )}
                </div>
            </div>;
        };
    }
});
export const Tab = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        return () => (
            <div class={s.tab}>
                {context.slots.default?.()}
            </div>
        );
    }
});