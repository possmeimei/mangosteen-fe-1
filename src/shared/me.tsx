import {http} from './Http';
import {AxiosResponse} from 'axios';

export let promiseMe: Promise<AxiosResponse<Resource<User>>> | undefined;
export const refreshMe = () => {
    promiseMe = http.get<Resource<User>>('/me');
    return promiseMe;
};
export const fetchMe = refreshMe