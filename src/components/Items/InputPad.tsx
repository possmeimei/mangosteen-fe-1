import {defineComponent, PropType, ref} from 'vue';
import s from './InputPad.module.scss';
import {Icon} from '../../shared/Icon';
import {Time} from '../../shared/Time';
import {DatetimePicker, Popup} from 'vant';

export const InputPad = defineComponent({
    props: {
        happenAt: String,
        amount: Number,
        onSubmit: {
            type: Function as PropType<() => void>
        }
    },
    setup(props, context) {
        const appendText = (n: number | string) => {
            if (refAmount.value.length >= 13) {
                return;
            }
            if (refAmount.value.indexOf('.') >= 0 && refAmount.value.length - refAmount.value.indexOf('.') > 2) {
                return;
            }
            if (n.toString() === '.') {
                if (refAmount.value.indexOf('.') >= 0) {//已经有小数点了
                    return;
                }
            } else if (n.toString() === '0') {
                if (refAmount.value.indexOf('.') < 0) {//如果没有小数点
                    if (refAmount.value === '0') {//没小数点但有0
                        return;
                    }
                }
            } else {
                if (refAmount.value === '0') {
                    refAmount.value = '';
                }
            }
            refAmount.value += n.toString();
        };
        const buttons = [
            {
                text: '1', onClick: () => {
                    appendText(1);
                }
            },
            {
                text: '2', onClick: () => {
                    appendText(2);
                }
            },
            {
                text: '3', onClick: () => {
                    appendText(3);
                }
            },
            {
                text: '4', onClick: () => {
                    appendText(4);
                }
            },
            {
                text: '5', onClick: () => {
                    appendText(5);
                }
            },
            {
                text: '6', onClick: () => {
                    appendText(6);
                }
            },
            {
                text: '7', onClick: () => {
                    appendText(7);
                }
            },
            {
                text: '8', onClick: () => {
                    appendText(8);
                }
            },
            {
                text: '9', onClick: () => {
                    appendText(9);
                }
            },
            {
                text: '0', onClick: () => {
                    appendText(0);
                }
            },
            {
                text: '.', onClick: () => {
                    appendText('.');
                }
            },
            {
                text: '清空', onClick: () => {
                    refAmount.value = '0';
                }
            },
            {
                text: 'OK', onClick: () => {
                    context.emit('update:amount', parseFloat(refAmount.value) * 100)
                    props.onSubmit?.()
                }
            },
        ];
        const refDatePickerVisible = ref(false);
        const showDatePicker = () => refDatePickerVisible.value = true;
        const hideDatePicker = () => refDatePickerVisible.value = false;
        const setDate = (date: Date) => {
            context.emit('update:happenAt', date.toISOString());
            hideDatePicker();
        };
        const refAmount = ref(props.amount ? (props.amount / 100).toString() : '0');
        return () => <>
            <div class={s.output}>
                <span class={s.date}>
                    <Icon name="calendar" class={s.icon}/>
                    <span onClick={showDatePicker}>{new Time(props.happenAt).format()}</span>
                    <Popup position="bottom" v-model:show={refDatePickerVisible.value}>
                    <DatetimePicker value={props.happenAt} type="date" title="选择年月日"
                                    onConfirm={setDate} onCancel={hideDatePicker}/>
                    </Popup>
                </span>
                <span class={s.amount}>{refAmount.value}</span>
            </div>
            <div class={s.buttons}>
                {buttons.map(button => <button onClick={button.onClick}>{button.text}</button>)}
            </div>
        </>;
    }
});