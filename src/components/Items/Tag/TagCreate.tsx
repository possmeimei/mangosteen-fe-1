import {defineComponent, PropType, reactive, toRaw} from 'vue';
import {MainLayout} from '../../../layouts/MainLayout';
import {Icon} from '../../../shared/Icon';
import s from './TagCreate.module.scss';
import {Button} from '../../../shared/Button';
import {EmojiSelect} from '../../../shared/EmojiSelect';

export const TagCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        const formData = reactive({
            name: '',
            sign: '',
        });
        const onSubmit = (e: Event) => {
            console.log(toRaw(formData));
            // const rules = [
            //     {key: 'name', required: true, message:'必填'},
            //     {key: 'name', pattern: /^.{1,4}$/, message: '只能填1到4个字'},
            //     {key: 'sign', required: true},
            // ];
            // const errors = validate(formData, rules);
            e.preventDefault();
        };
        return () => (
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <Icon name={'return'} onClick={() => {
                }}/>,
                default: () => <>
                    <form class={s.form} onSubmit={onSubmit}>
                        <div class={s.formRow}>
                            <label>
                                <span class={s.formItem_name}>标签名</span>
                                <div class={s.formItem_value}>
                                    <input type="text" v-model={formData.name}/>
                                </div>
                                <div class={s.formItem_errorHint}>
                                    <span>必填</span>
                                </div>
                            </label>
                        </div>
                        <div class={s.formRow}>
                            <label>
                                <span class={s.formItem_name}>符号{formData.sign}</span>
                                <div>
                                    <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}/>
                                </div>
                            </label>
                        </div>
                        <div class={s.formRow}>
                            <p class={s.tips}>记账时长按标签，即可进行编辑</p>
                        </div>
                        <div class={s.formRow}>
                            <Button class={s.button}>确定</Button>
                        </div>
                    </form>
                </>
            }}</MainLayout>
        );
    }
});