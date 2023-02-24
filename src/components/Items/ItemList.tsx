import {defineComponent, PropType, ref} from 'vue';
import s from './ItemList.module.scss';
import {MainLayout} from '../../layouts/MainLayout';
import {Icon} from '../../shared/Icon';
import {Tab, Tabs} from '../../shared/Tabs';

export const ItemList = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        const refSelected = ref('本月')
        return () => (
            <MainLayout>{
                {
                    title:()=>'山竹记账',
                    icon:()=><Icon name='menu' class={s.menu}/>,
                    default:()=>(
                        <Tabs classPrefix={'bill'} v-model:selected={refSelected.value}>
                            <Tab name="本月">List 1</Tab>
                            <Tab name="上个月">List 2</Tab>
                            <Tab name="今年">List 3</Tab>
                            <Tab name="自定义时间">List 4</Tab>
                        </Tabs>
                    )
                }
            }</MainLayout>
        );
    }
});