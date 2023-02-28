import {defineComponent, PropType} from 'vue';
import s from './$1.module.scss';

export const Form = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}></div>
        );
    }
});

export const FormItem = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}></div>
        );
    }
});