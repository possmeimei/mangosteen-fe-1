import {defineComponent, PropType, ref} from 'vue';
import s from './Charts.module.scss';
import {FormItem} from '../../shared/Form';
import {LineChart} from './LineChart';
import {PieChart} from './PieChart';
import {Bar} from './Bar';

export const Charts = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: false
        },
        endDate: {
            type: String as PropType<string>,
            required: false
        },
    },
    setup(props, context) {
        const category = ref('expenses');
        return () => (
            <div class={s.wrapper}>
                <FormItem class={s.kind} type={'select'} options={[
                    {value: 'expenses', text: '支出'},
                    {value: 'income', text: '收入'},
                ]} v-model={category.value}/>
                <LineChart/>
                <PieChart/>
                <Bar/>
            </div>
        );
    }
});