import {defineComponent} from 'vue';
import {Button} from '../shared/Button';
import s from './Start.module.scss'
import {FloatButton} from '../shared/FloatButton';
export const Start = defineComponent({
    setup(props, context) {
        const onClick = ()=>{
            console.log('hi');
        }
        return () => (
            <div>
                <div class={s.button_wrapper}>
                    <Button class={s.button} onClick={onClick}>测试</Button>
                </div>
                <FloatButton iconName="add"/>
            </div>
        )
    }
})