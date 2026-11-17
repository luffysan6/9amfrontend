import axios from 'axios'

const AxiosInstan = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     adapter:"fetch",
      withCredentials: true,
})

export default AxiosInstan