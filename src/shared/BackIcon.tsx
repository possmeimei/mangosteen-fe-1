import {defineComponent} from 'vue';
import s from '../components/Items/ItemCreate.module.scss';
import {Icon} from './Icon';
import {useRoute, useRouter} from 'vue-router';

export const BackIcon = defineComponent({
    setup(props, context) {
        const route = useRoute();
        const router = useRouter();
        const onClick = () => {
            const {return_to} = route.query;
            if (return_to) {
                router.push(return_to.toString());
            }else {
                router.back()
            }
        };
        return () => (
            <Icon name={'return'} class={s.menu} onClick={onClick}/>
        );
    }
});