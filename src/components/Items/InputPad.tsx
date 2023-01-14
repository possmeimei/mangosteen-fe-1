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
            {text:'1',onClick:()=>{
                refAmount.value += 1
                }},
            {text:'2',onClick:()=>{
                    refAmount.value += 2
                }},
            {text:'3',onClick:()=>{
                    refAmount.value += 3
                }},
            {text:'清空',onClick:()=>{}},
            {text:'4',onClick:()=>{
                    refAmount.value += 4
                }},
            {text:'5',onClick:()=>{
                    refAmount.value += 5
                }},
            {text:'6',onClick:()=>{
                    refAmount.value += 6
                }},
            {text:'+',onClick:()=>{}},
            {text:'7',onClick:()=>{
                    refAmount.value += 7
                }},
            {text:'8',onClick:()=>{
                    refAmount.value += 8
                }},
            {text:'9',onClick:()=>{
                    refAmount.value += 9
                }},
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
        const refAmount = ref('')
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
                <span class={s.amount}>{refAmount.value}</span>
            </div>
            <div class={s.buttons}>
                {buttons.map(button=><button onClick={button.onClick}>{button.text}</button>)}
            </div>
        </>;
    }
});