import { useEffect, useRef, useState } from "react";
import { AxiosInstance, AxiosRequestConfig } from "axios";

interface IConfigRequestAxios {
    axiosInstance: AxiosInstance,
    method: string,
    url: string,
    othersConfigs?: AxiosRequestConfig
}


const useAxios = (configRequest: IConfigRequestAxios) => {
    const { axiosInstance, method, url, othersConfigs = {} } = configRequest;
    const [data, setData] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();
    const effectRun = useRef(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await axiosInstance.request({
                    method,
                    url,
                    ...othersConfigs,
                    signal: controller.signal
                })
                setData(response.data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Erro desconhecido");
                }
            } finally {
                setLoading(false);
            }
        }
        effectRun && fetchData();

        return () => {
            controller.abort();
            effectRun.current = true;
        }
    }, [])
    return [data, loading, error];
}
export default useAxios;
