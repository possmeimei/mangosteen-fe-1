import s from './WelcomeLayout.module.scss';
import {defineComponent, ref, watchEffect} from 'vue';
import {useSwipe} from '../../hooks/useSwipe';
import {useRouter} from 'vue-router';

export const First = defineComponent({
    setup() {
        const div = ref<HTMLDivElement>();
        const router = useRouter();
        const {direction, swiping} = useSwipe(div,{
            beforeStart:e=>e.preventDefault()
        });
        watchEffect(() => {
            if (swiping.value === true && direction.value === 'left') {
                return router.push('/welcome/2');
            }
        });
        return () => (
            <div class={s.card} ref={div}>
                <svg>
                    <use xlinkHref="#piggy"></use>
                </svg>
                <p>会挣钱<br/>还会省钱</p>
            </div>
        );
    }
});
