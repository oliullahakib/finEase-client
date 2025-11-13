import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fin-ease-server-indol.vercel.app'
})


const useAxios = () => {
    return instance
};

export default useAxios;