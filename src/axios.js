import axios from "axios";
import {baseUrl} from './constants/Constant.js'

const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

export default axiosInstance;