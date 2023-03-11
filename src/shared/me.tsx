import {http} from './Http';
import {AxiosResponse} from 'axios';

export let promiseMe: Promise<AxiosResponse<{ resource: { id: number } }>> | undefined;
export const refreshMe = () => {
    promiseMe = http.get<{ resource: { id: number } }>('/me');
    return promiseMe;
};
export const fetchMe = refreshMe