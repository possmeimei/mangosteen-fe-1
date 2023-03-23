import {defineComponent, PropType} from 'vue';
import s from './Tags.module.scss';
import {Icon} from '../../shared/Icon';
import {useTags} from '../../shared/useTags';
import {http} from '../../shared/Http';

export const Tags = defineComponent({
    props: {
        kind: {
            type: String as PropType<string>,
            required: true
        },
    },
    setup(props, context) {
        const {hasMore, tags, fetchTags} = useTags((page)=>{
            return http.get<Resources<Tag>>('/tags', {
                kind: props.kind,
                page: page + 1,
                _mock: 'tagIndex'
            });
        })
        return () =><>
            <div class={s.tags_wrapper}>
                <div class={s.tag}>
                    <div class={s.sign}>
                        <Icon name="tag-add" class={s.createTag}/>
                    </div>
                    <div class={s.name}>
                        新增
                    </div>
                </div>
                {tags.value.map(tag => {
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
        </>
    }
});