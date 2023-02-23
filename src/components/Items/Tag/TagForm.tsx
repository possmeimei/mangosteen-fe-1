import {defineComponent, PropType, reactive} from 'vue';
import s from './Tag.module.scss';
import {EmojiSelect} from '../../../shared/EmojiSelect';
import {Button} from '../../../shared/Button';
import {Rules, validate} from '../../../shared/Validate';

export const TagForm = defineComponent({
    setup(props, context) {
        const formData = reactive({
            name: '',
            sign: '',
        });
        const errors = reactive<{[k in keyof typeof formData]?:string[]}>({})
        const onSubmit = (e: Event) => {
            const rules:Rules<typeof formData> = [{key: 'name', type: 'required', message: '必填'},
                {key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字'},
                {key: 'sign', type: 'required', message: '必填'},];
            Object.assign(errors,{
                name:undefined,
                sign:undefined,
            })
            Object.assign(errors, validate(formData, rules));
            e.preventDefault();
        };
        return () => (
            <form class={s.form} onSubmit={onSubmit}>
                <div class={s.formRow}>
                    <label>
                        <span class={s.formItem_name}>标签名</span>
                        <div class={s.formItem_value}>
                            <input type="text" v-model={formData.name}/>
                        </div>
                        <div class={s.formItem_errorHint}>
                            <span>{errors['name'] ? errors['name'][0] : <span>&nbsp;</span>}</span>
                        </div>
                    </label>
                </div>
                <div class={s.formRow}>
                    <label>
                        <span class={s.formItem_name}>符号{formData.sign}</span>
                        <div>
                            <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}/>
                        </div>
                        <div class={s.formItem_errorHint}>
                            <span>{errors['sign'] ? errors['sign'][0] : <span>&nbsp;</span>}</span>
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
        );
    }
});