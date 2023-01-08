import {defineComponent, ref, Transition, VNode, watchEffect,} from 'vue';
import {RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter,} from 'vue-router';
import s from './Welcome.module.scss';
import {useSwipe} from '../hooks/useSwipe';
import {throttle} from '../shared/throttle';

export const Welcome = defineComponent({
    setup(props, context) {
        const main = ref<HTMLElement>();
        const {direction, swiping} = useSwipe(main, {beforeStart: e => e.preventDefault()});
        const route = useRoute();
        const router = useRouter();
        const push = throttle(() => {
            if (route.name === 'welcome1') {
                return router.push('/welcome/2');
            } else if (route.name === 'welcome2') {
                return router.push('/welcome/3');
            }else if (route.name === 'welcome3'){
                return router.push('/welcome/4');
            }else {
                return router.push('/start');
            }
        }, 500);
        watchEffect(() => {
            if (swiping.value === true && direction.value === 'left') {
                push();
            }
        });
        return () => <div class={s.wrapper}>
            <header>
                <svg>
                    <use xlinkHref="#mangosteen"></use>
                </svg>
                <h1>山竹记账</h1>
            </header>
            <main class={s.main} ref={main}>
                <RouterView name="main">
                    {({Component: X, route: R}: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
                        <Transition enterFromClass={s.slide_fade_enter_from}
                                    enterActiveClass={s.slide_fade_enter_active}
                                    leaveToClass={s.slide_fade_leave_to}
                                    leaveActiveClass={s.slide_fade_leave_active}>
                            {X}
                        </Transition>
                    }
                </RouterView>
            </main>
            <footer class={s.footer}><RouterView name="footer"/></footer>
        </div>;
    }
});
// const div = ref<HTMLDivElement>();
// const router = useRouter();
// const {direction, swiping} = useSwipe(div,{
//     beforeStart:e=>e.preventDefault()
// });
// watchEffect(() => {
//     if (swiping.value === true && direction.value === 'left') {
//         return router.push('/welcome/2');
//     }
// });