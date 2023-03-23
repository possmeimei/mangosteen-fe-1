import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './ItemCreate.module.scss';
import {Icon} from '../../shared/Icon';
import {MainLayout} from '../../layouts/MainLayout';
import {Tab, Tabs} from '../../shared/Tabs';
import {InputPad} from './InputPad';
import {http} from '../../shared/Http';
import {useTags} from '../../shared/useTags';

export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        const refKind = ref('支出');
        const {hasMore, tags:expensesTags, fetchTags} = useTags((page)=>{
           return http.get<Resources<Tag>>('/tags', {
                    kind: 'expenses',
                    page: page + 1,
                    _mock: 'tagIndex'
                });
        })
        const {hasMore:hasMore2, tags:incomeTags, fetchTags:fetchTags2} = useTags((page)=>{
            return http.get<Resources<Tag>>('/tags', {
                kind: 'income',
                page: page + 1,
                _mock: 'tagIndex'
            });
        })
        const refIncomeTags = ref<Tag[]>([]);
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
                                        <div class={s.tags_wrapper}>
                                            <div class={s.tag}>
                                                <div class={s.sign}>
                                                    <Icon name="tag-add" class={s.createTag}/>
                                                </div>
                                                <div class={s.name}>
                                                    新增
                                                </div>
                                            </div>
                                            {expensesTags.value.map(tag => {
                                                return <div class={[s.tag, s.selected]}>
                                                    <div class={s.sign}>{tag.sign}</div>
                                                    <div class={s.name}>{tag.name}</div>
                                                </div>;
                                            })}
                                        </div>
                                        <div class={s.more}>
                                            {hasMore.value ?
                                                <button class={s.loadMore} onClick={fetchTags}>加载更多</button> :
                                                <span class={s.noMore}>没有更多</span>}
                                        </div>
                                    </Tab>
                                    <Tab name={'收入'}>
                                        <div class={s.tags_wrapper}>
                                        <div class={s.tag}>
                                            <div class={s.sign}>
                                                <Icon name="tag-add" class={s.createTag}/>
                                            </div>
                                            <div class={s.name}>
                                                新增
                                            </div>
                                        </div>
                                        {incomeTags.value.map(tag => {
                                            return <div class={[s.tag, s.selected]}>
                                                <div class={s.sign}>{tag.sign}</div>
                                                <div class={s.name}>{tag.name}</div>
                                            </div>;
                                        })}
                                        </div>
                                        <div class={s.more}>
                                            {hasMore2.value ?
                                                <button class={s.loadMore} onClick={fetchTags2}>加载更多</button> :
                                                <span class={s.noMore}>没有更多</span>}
                                        </div>
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