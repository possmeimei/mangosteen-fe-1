import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './ItemCreate.module.scss';
import {Icon} from '../../shared/Icon';
import {MainLayout} from '../../layouts/MainLayout';
import {Tab, Tabs} from '../../shared/Tabs';
import {InputPad} from './InputPad';
import {Tags} from './Tags';

export const ItemCreate = defineComponent({
    setup(props, context) {
        const refKind = ref('支出');
        return () => (
            <MainLayout class={s.layout}>{
                {
                    title: () => '记一笔',
                    icon: () => <Icon name={'return'} class={s.menu}/>,
                    default: () =>
                        <>
                            <div class={s.wrapper}>
                                <Tabs v-model:selected={refKind.value} class={s.tabs}>
                                    <Tab name={'支出'}>
                                        <Tags kind={'expenses'}/>
                                    </Tab>
                                    <Tab name={'收入'}>
                                        <Tags kind={'income'}/>
                                    </Tab>
                                </Tabs>
                                <div class={s.inputPad_wrapper}>
                                    <InputPad/>
                                </div>
                            </div>
                        </>
                }
            }</MainLayout>
        );
    }
});