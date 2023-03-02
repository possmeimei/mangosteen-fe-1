import {defineComponent} from 'vue';
import {Button} from '../shared/Button';
import s from './Start.module.scss';
import {FloatButton} from '../shared/FloatButton';
import {Center} from '../shared/Center';
import {Icon} from '../shared/Icon';
import {OverlayIcon} from '../shared/Overlay';
import {RouterLink} from 'vue-router';
import {MainLayout} from '../layouts/MainLayout';

export const Start = defineComponent({
    setup(props, context) {
        return () => (
            <MainLayout>{
                {
                    title: () => '山竹记账',
                    icon: () => <OverlayIcon/>,
                    default: () => <>
                        <Center class={s.piggy_wrapper}>
                            <Icon name={'piggy'} class={s.piggy}></Icon>
                        </Center>
                        <div class={s.button_wrapper}>
                            <RouterLink to={'/items/create'}>
                                <Button class={s.button}>开始记账</Button>
                            </RouterLink>
                        </div>
                        <RouterLink to={'/items/create'}>
                            <FloatButton iconName="add"/>
                        </RouterLink>
                    </>
                }
            }</MainLayout>
        );
    }
});