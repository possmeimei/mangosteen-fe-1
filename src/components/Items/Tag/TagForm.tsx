import {defineComponent, onMounted, PropType, reactive, toRaw} from 'vue';
import s from './Tag.module.scss';
import {Button} from '../../../shared/Button';
import {hasError, Rules, validate} from '../../../shared/Validate';
import {Form, FormItem} from '../../../shared/Form';
import {useRoute, useRouter} from 'vue-router';
import {http} from '../../../shared/Http';
import {onFormError} from '../../../shared/OnFormError';

export const TagForm = defineComponent({
    props: {
        id: {
            type: Number
        }
    },
    setup(props, context) {
        const route = useRoute();
        const router = useRouter();
        const formData = reactive<Partial<Tag>>({
            id: undefined,
            name: '',
            sign: '',
            kind: route.query.kind!.toString(),
        });
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
        const onSubmit = async (e: Event) => {
            e.preventDefault();
            const rules: Rules<typeof formData> = [{key: 'name', type: 'required', message: '必填'},
                {key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字'},
                {key: 'sign', type: 'required', message: '必填'},];
            Object.assign(errors, {
                name: [],
                sign: [],
            });
            Object.assign(errors, validate(formData, rules));
            if (!hasError(errors)) {
                const promise = await formData.id ? http.patch(`/tags/${formData.id}`, toRaw(formData), {
                    params: {_mock: 'tagEdit'}
                }) : http.post('/tags', toRaw(formData), {
                    params: {_mock: 'tagCreate'}
                });
                await promise.catch((error) =>
                    onFormError(error, (data) => Object.assign(errors, data.errors))
                );
                router.back();
            }
        };
        onMounted(async () => {
            if (!props.id) {
                return;
            }
            const response = await http.get<Resource<Tag>>(`/tags/${props.id}`, {_mock: 'tagShow'});
            Object.assign(formData, response.data.resource);
        });
        return () => (
            <Form onSubmit={onSubmit}>
                <FormItem label="标签名（4个字以内）" type="text" v-model={formData.name}
                          error={errors.name ? errors['name'][0] : ' '}/>
                <FormItem label={'符号' + formData.sign} type="emojiSelect" v-model={formData.sign}
                          error={errors.sign ? errors['sign'][0] : ' '}/>
                <FormItem>
                    <p class={s.tips}>记账时长按标签即可进行编辑</p>
                </FormItem>
                <FormItem>
                    <Button type="submit" class={[s.button]}>确定</Button>
                </FormItem>
            </Form>
        );
    }
});