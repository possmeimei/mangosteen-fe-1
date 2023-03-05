import {defineComponent, PropType, reactive, ref} from 'vue';
import {MainLayout} from '../layouts/MainLayout';
import s from './SignInPage.module.scss';
import {Icon} from '../shared/Icon';
import {Form, FormItem} from '../shared/Form';
import {Button} from '../shared/Button';
import {validate} from '../shared/Validate';
import {http} from '../shared/Http';

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
        const refValidationCode = ref<any>()
        const onSubmit = (e: Event) => {
            e.preventDefault();
            Object.assign(errors, {
                email: [], validationCode: [],
            });
            Object.assign(errors, validate(formData, [
                {key: 'email', type: 'required', message: '必填'},
                {key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址'},
                {key: 'validationCode', type: 'required', message: '必填'},
            ]));
        };
        const onError = (error:any)=>{
            if (error.response.status === 422){
                Object.assign(errors,error.response.data.errors)
            }
            throw error
        }
        const onClickSendValidationCode = async ()=>{
            const response = await http.post('/validation_codes',{email: formData.email})
                .catch(onError)
            refValidationCode.value.startCountdown()
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
                                <FormItem ref={refValidationCode} class={s.validation} label={'验证码'} type={'validationCode'}
                                          placeholder={'六位数字'}
                                          countForm={1}
                                          onClick={onClickSendValidationCode}
                                          v-model={formData.validationCode} error={errors.validationCode?.[0] ?? ' '}/>
                                <FormItem class={s.button}>
                                    <Button>登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    )
                }
            }</MainLayout>
        );
    }
});