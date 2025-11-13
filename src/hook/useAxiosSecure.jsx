import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../component/Context/AuthContext";

const instance = axios.create({
    baseURL: 'https://fin-ease-server-indol.vercel.app'
})

const useAxiosSecure = () => {
    const { user } = use(AuthContext)
    useEffect(() => {
        const reqInterceptor = instance.interceptors.request.use(config => {
            config.headers.authorization = `Bearer ${user?.accessToken}`
            return config
        })

        return () => {
            instance.interceptors.request.eject(reqInterceptor)
        }
    }, [user])

    return instance
};

export default useAxiosSecure;