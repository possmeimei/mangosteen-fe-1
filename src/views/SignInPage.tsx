import {defineComponent, PropType, reactive, ref} from 'vue';
import {MainLayout} from '../layouts/MainLayout';
import s from './SignInPage.module.scss';
import {Icon} from '../shared/Icon';
import {Form, FormItem} from '../shared/Form';
import {Button} from '../shared/Button';
import {hasError, validate} from '../shared/Validate';
import {http} from '../shared/Http';
import {useBool} from '../hooks/useBool';
import {useRoute, useRouter} from 'vue-router';
import {refreshMe} from '../shared/me';

export const SignInPage = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        const formData = reactive(
            {
                email: '',
                validationCode: ''
            }
        );
        const errors = reactive(
            {
                email: [],
                validationCode: []
            }
        );
        const router = useRouter();
        const route = useRoute();
        const refValidationCode = ref<any>();
        const {ref: refDisabled, toggle, on: disabled, off: enabled} = useBool(false);
        const onSubmit = async (e: Event) => {
            e.preventDefault();
            Object.assign(errors, {
                email: [], validationCode: [],
            });
            Object.assign(errors, validate(formData, [
                {key: 'email', type: 'required', message: '必填'},
                {key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址'},
                {key: 'validationCode', type: 'required', message: '必填'},
            ]));
            if (!hasError(errors)) {
                const response = await http.post<{ jwt: string }>('/session', formData,{
                    params: { _mock: 'session' }
                }).catch(onError);
                localStorage.setItem('jwt', response.data.jwt);
                const returnTo = route.query.return_to?.toString();
                refreshMe().then(
                    () => {
                        router.push(returnTo || '/');
                    },
                    () => {
                        window.alert('登录失败');
                    });
            }
        };
        const onError = (error: any) => {
            if (error.response.status === 422) {
                Object.assign(errors, error.response.data.errors);
            }
            throw error;
        };
        const onClickSendValidationCode = async () => {
            disabled();
            const response = await http.post('/validation_codes', {email: formData.email})
                .catch(onError)
                .finally(enabled);
            refValidationCode.value.startCountdown();
        };
        return () => (
            <MainLayout>{
                {
                    title: () => '登录',
                    icon: () => <Icon name={'return'}/>,
                    default: () => (
                        <div class={s.wrapper}>
                            <div class={s.logo}>
                                <Icon class={s.icon} name={'mangosteen'}/>
                                <h1 class={s.appName}>山竹记账</h1>
                            </div>
                            <Form onSubmit={onSubmit}>
                                <FormItem label={'邮箱地址'} type={'text'}
                                          placeholder={'请输入邮箱，然后点击发送验证码'}
                                          v-model={formData.email} error={errors.email?.[0] ?? ' '}/>
                                <FormItem ref={refValidationCode} class={s.validation} label={'验证码'}
                                          type={'validationCode'}
                                          placeholder={'六位数字'}
                                          countForm={1}
                                          disabled={refDisabled.value}
                                          onClick={onClickSendValidationCode}
                                          v-model={formData.validationCode} error={errors.validationCode?.[0] ?? ' '}/>
                                <FormItem class={s.button}>
                                    <Button type={'submit'}>登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    )
                }
            }</MainLayout>
        );
    }
});