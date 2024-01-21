import axios, {InternalAxiosRequestConfig} from "axios";
import {API_DOMAIN} from "../../api/constants";

export const ApiClient = axios.create({
    baseURL: API_DOMAIN,
})
