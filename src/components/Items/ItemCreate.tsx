import {defineComponent, PropType} from 'vue';
import s from './ItemCreate.module.scss';
import {Icon} from '../../shared/Icon';
import {MainLayout} from '../../layouts/MainLayout';

export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        return () => (
            <MainLayout>{
                {
                    title: () => '记一笔',
                    icon: () => <Icon name={'return'} class={s.menu}/>,
                    default: () =>
                        <>
                            <div>main</div>
                        </>
                }
            }</MainLayout>
        );
    }
});