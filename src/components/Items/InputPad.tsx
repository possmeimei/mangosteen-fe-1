import {defineComponent, PropType, ref} from 'vue';
import s from './InputPad.module.scss';
import {Icon} from '../../shared/Icon';
import {time} from '../../shared/Time';
import {DatetimePicker, Popup} from 'vant';

export const InputPad = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
        },
    },
    setup(props, context) {
        const now = new Date()
        const refDate = ref<Date>(now)
        const buttons = [
            {text:'1',onClick:()=>{}},
            {text:'2',onClick:()=>{}},
            {text:'3',onClick:()=>{}},
            {text:'清空',onClick:()=>{}},
            {text:'4',onClick:()=>{}},
            {text:'5',onClick:()=>{}},
            {text:'6',onClick:()=>{}},
            {text:'+',onClick:()=>{}},
            {text:'7',onClick:()=>{}},
            {text:'8',onClick:()=>{}},
            {text:'9',onClick:()=>{}},
            {text:'-',onClick:()=>{}},
            {text:'.',onClick:()=>{}},
            {text:'0',onClick:()=>{}},
            {text:'删除',onClick:()=>{}},
            {text:'OK',onClick:()=>{}},
        ]
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
        return () => <>
            <div class={s.output}>
                <span class={s.date}>
                    <Icon name="calendar" class={s.icon}/>
                    <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
                    <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
                    <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                                  onConfirm={setDate} onCancel={hideDatePicker}/>
                    </Popup>
                </span>
                <span class={s.amount}>201.6</span>
            </div>
            <div class={s.buttons}>
                {buttons.map(button=><button onClick={button.onClick}>{button.text}</button>)}
            </div>
        </>;
    }
});