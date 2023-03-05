import {defineComponent, PropType, reactive} from 'vue';
import {MainLayout} from '../layouts/MainLayout';
import s from './SignInPage.module.scss';
import {Icon} from '../shared/Icon';
import {Form, FormItem} from '../shared/Form';
import {Button} from '../shared/Button';
import {validate} from '../shared/Validate';
import axios from 'axios';

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
        const onClickSendValidationCode = async ()=>{
            // const response = await axios.post('/api/v1/validation_codes',{email: formData.email})
            // console.log(response)
        }
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
                                <FormItem class={s.validation} label={'验证码'} type={'validationCode'}
                                          placeholder={'六位数字'}
                                          countForm={3}
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