import {computed, defineComponent, PropType, ref} from 'vue';
import s from './Button.module.scss';

export const Button = defineComponent({
    props: {
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>
        },
        level: {
            type: String as PropType<'important' | 'normal' | 'dangerous'>,
            default: 'important'
        },
        type: {
            type: String as PropType<'button' | 'submit'>,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        autoSelfDisabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const selfDisabled = ref(false);
        const _disabled = computed(() => {
            if (props.autoSelfDisabled === false) {
                return props.disabled;
            }
            if (selfDisabled) {
                return true;
            } else {
                return props.disabled;
            }
        });
        const onClick = () => {
            props.onClick?.();
            selfDisabled.value = true;
            setTimeout(() => {
                selfDisabled.value = false;
            }, 500);
        };
        return () => (
            <button disabled={_disabled.value} type={props.type} class={[s.button, s[props.level]]} onClick={onClick}>
                {context.slots.default?.()}
            </button>
        );
    }
});