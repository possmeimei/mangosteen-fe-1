import {defineComponent, ref,} from 'vue';
import {Button} from '../shared/Button';
import s from './Start.module.scss';
import {FloatButton} from '../shared/FloatButton';
import {Center} from '../shared/Center';
import {Icon} from '../shared/Icon';
import {NavBar} from '../shared/NavBar';
import {Overlay} from '../shared/Overlay';
import {RouterLink} from 'vue-router';

export const Start = defineComponent({
    setup(props, context) {
        const overlayVisible = ref(false)
        const onClickMenu= ()=>{
            overlayVisible.value = !overlayVisible.value
        }
        return () => (
            <div>
                <NavBar>{
                    {
                        icon: () => <Icon name={"menu"} class={s.menu} onClick={onClickMenu}/>,
                        default: () => '山竹记账',
                    }
                }</NavBar>
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
                {overlayVisible.value && <Overlay onClose={()=>overlayVisible.value = false}/>}
            </div>
        );
    }
});