import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

const HttpRickAdnMorty = axios.create(
    {
        baseURL: 'https://rickandmortyapi.com/api/'
    }
)

const requestInterceptor = (request: AxiosRequestConfig): AxiosRequestConfig => {
    return request;
}

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
    let responseProcessed = response.data.data ?? response.data ?? response;
    return responseProcessed;
}

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

HttpRickAdnMorty.interceptors.request.use(requestInterceptor);
HttpRickAdnMorty.interceptors.response.use(responseInterceptor, errorInterceptor);

export default HttpRickAdnMorty;