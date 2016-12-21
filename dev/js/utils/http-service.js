import R from "ramda";
import axios from 'axios';
import {apiBaseURL} from './app-constants';

const instance = axios.create();


export function httpRequest(method, url, config){
    const requestObject = R.merge(config, {
        url: url,
        method: method,
        headers: {

        }
    });
    return instance.request(requestObject);
};
