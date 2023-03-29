import {defineComponent, onMounted, PropType, ref} from 'vue';
import {Icon} from './Icon';
import s from './Overlay.module.scss';
import {RouterLink, useRoute} from 'vue-router';
import {promiseMe} from './me';
import {Dialog} from 'vant';

export const Overlay = defineComponent({
    props: {
        onClose: {
            type: Function as PropType<() => void>
        }
    },
    setup(props, context) {
        const close = () => {
            props.onClose?.();
        };
        const route = useRoute();
        const me = ref<User>();
        const onSignOut = async () => {
            await Dialog.confirm({
                title: '确认',
                message: '你确定要取消登录吗？'
            });
            localStorage.removeItem('jwt');
        };
        onMounted(async () => {
            const response = await promiseMe;
            me.value = response?.data.resource;
        });
        return () => <>
            <div class={s.mask} onClick={close}></div>
            <div class={s.overlay}>
                <section class={s.currentUser}>
                    {me.value ? (
                        <div>
                            <h2 class={s.email}>{me.value.email}</h2>
                            <p onClick={onSignOut}>点击退出登录</p>
                        </div>
                    ) : (
                        <RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
                            <h2>未登录用户</h2>
                            <p>点击登录</p>
                        </RouterLink>
                    )}
                </section>
                <nav>
                    <ul>
                        <li>
                            <RouterLink to={'/statistics'} class={s.action}>
                                <Icon name={'statistics'} class={s.icon}/>
                                <p>统计图表</p>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to={'/output'} class={s.action}>
                                <Icon name={'output'} class={s.icon}/>
                                <p>导出数据</p>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to={'/notice'} class={s.action}>
                                <Icon name={'notice'} class={s.icon}/>
                                <p>记账提醒</p>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>;
    }
});

export const OverlayIcon = defineComponent({
    setup(props, context) {
        const overlayVisible = ref(false);
        const onClickMenu = () => {
            overlayVisible.value = !overlayVisible.value;
        };
        return () => <>
            <Icon name={'menu'} class={s.menu} onClick={onClickMenu}/>
            {overlayVisible.value && <Overlay onClose={() => overlayVisible.value = false}/>}
        </>;
    }
});