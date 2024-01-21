import {useLayoutEffect} from "react";
import {ApiClient} from "./ApiClient";
import {InternalAxiosRequestConfig} from "axios/index";
import {useRecoilState} from "recoil";
import axios, {AxiosError, AxiosResponse} from "axios";
import {LoginState, loginState} from "../../session/LoginSession";
import {useToast} from "@chakra-ui/react";

export const AxiosInterceptor = ({children}: { children: any }) => {
    const [{session, loggedIn}] = useRecoilState<LoginState>(loginState);
    const toast = useToast();

    const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        if (loggedIn) {
            config.headers.Authorization = `Bearer ${session.accessToken}`;
        }
        config.headers["Time-Zone"] = "Asia/Seoul";
        return config;
    };

    const onResponse = (res: AxiosResponse): AxiosResponse => {
        // const {method, url} = res.config;
        // const {code, message} = res.data;
        // if ()
        // if (code === 'SUCCESS') {
        //     console.log(
        //         `🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${code} : ${message}`,
        //     );
        // } else {
        //     console.log(
        //         `🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${code} : ${message}`,
        //     );
        // }

        return res;
    };

    const onError = (error: AxiosError | Error): Promise<AxiosError> => {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                toast({
                    title: '오류가 발생했습니다.',
                    description: error.response.data.error,
                    status: "error",
                    position: "bottom-right",
                    isClosable: true,
                })
            }
        } else {
            console.log(`Error ${error.message}`);
        }
        return Promise.reject(error);
    };

    useLayoutEffect(() => {
        const reqInterceptor = ApiClient.interceptors.request.use(onRequest);
        const resInterceptor = ApiClient.interceptors.response.use(
            onResponse,
            onError,
        );

        // 클린업
        return () => {
            ApiClient.interceptors.request.eject(reqInterceptor);
            ApiClient.interceptors.response.eject(resInterceptor);
        };
    })

    return children
}