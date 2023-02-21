import {defineComponent, PropType, ref} from 'vue';
import s from './ItemCreate.module.scss';
import {Icon} from '../../shared/Icon';
import {MainLayout} from '../../layouts/MainLayout';
import {Tab, Tabs} from '../../shared/Tabs';
import {InputPad} from './InputPad';

export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        const refKind = ref('支出');
        const refExpensesTags = ref([
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
            {id: 1, name: '餐费', sign: '￥', category: 'expenses'},
            {id: 2, name: '通勤', sign: '￥', category: 'expenses'},
            {id: 3, name: '购物', sign: '￥', category: 'expenses'},
        ]);
        const refIncomeTags = ref([
            {id: 4, name: '工资', sign: '￥', category: 'income'},
            {id: 5, name: '股票', sign: '￥', category: 'income'},
            {id: 6, name: '私单', sign: '￥', category: 'income'},
            {id: 4, name: '工资', sign: '￥', category: 'income'},
            {id: 5, name: '股票', sign: '￥', category: 'income'},
            {id: 6, name: '私单', sign: '￥', category: 'income'},
        ]);
        return () => (
            <MainLayout class={s.layout}>{
                {
                    title: () => '记一笔',
                    icon: () => <Icon name={'return'} class={s.menu}/>,
                    default: () =>
                        <>
                            <div class={s.wrapper}>
                            <Tabs v-model:selected={refKind.value} class={s.tabs}>
                                <Tab name={'支出'} class={s.tags_wrapper}>
                                    <div class={s.tag}>
                                        <div class={s.sign}>
                                            <Icon name="tag-add" class={s.createTag}/>
                                        </div>
                                        <div class={s.name}>
                                            新增
                                        </div>
                                    </div>
                                    {refExpensesTags.value.map(tag => {
                                        return <div class={[s.tag, s.selected]}>
                                            <div class={s.sign}>{tag.sign}</div>
                                            <div class={s.name}>{tag.name}</div>
                                        </div>;
                                    })}
                                </Tab>
                                <Tab name={'收入'} class={s.tags_wrapper}>
                                    <div class={s.tag}>
                                        <div class={s.sign}>
                                            <Icon name="tag-add" class={s.createTag}/>
                                        </div>
                                        <div class={s.name}>
                                            新增
                                        </div>
                                    </div>
                                    {refIncomeTags.value.map(tag => {
                                        return <div class={[s.tag, s.selected]}>
                                            <div class={s.sign}>{tag.sign}</div>
                                            <div class={s.name}>{tag.name}</div>
                                        </div>;
                                    })}
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