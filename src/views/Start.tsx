import {defineComponent,} from 'vue';
import {Button} from '../shared/Button';
import s from './Start.module.scss';
import {FloatButton} from '../shared/FloatButton';
import {Center} from '../shared/Center';
import {Icon} from '../shared/Icon';
import {NavBar} from '../shared/NavBar';

export const Start = defineComponent({
    setup(props, context) {
        const onClick = () => {
            console.log('hi');
        };
        return () => (
            <div>
                <NavBar>{
                    {
                        icon: () => <Icon name="menu" class={s.navIcon}/>,
                        default: () => '山竹记账',
                    }
                }</NavBar>
                <Center class={s.piggy_wrapper}>
                    <Icon name={'piggy'} class={s.piggy}></Icon>
                </Center>
                <div class={s.button_wrapper}>
                    <Button class={s.button} onClick={onClick}>开始记账</Button>
                </div>
                <FloatButton iconName="add"/>
            </div>
        );
    }
});