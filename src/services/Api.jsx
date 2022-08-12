import axios from 'axios';
import { constantsApi } from 'constants/constants';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: constantsApi.BASE_URL,
});

export const getDecodeVIN = async searchInput => {
  try {
    const decodeVin = await api.get(
      `/vehicles/DecodeVin/${searchInput}?format=json`
    );
    if (decodeVin) {
      return decodeVin.data.Results;
    }
    if (decodeVin.data.Results.length === 0) {
      return toast.info(
        'по вашему запросу не чего не найденно,ищите что-то адекватное. '
      );
    }
  } catch (error) {
    return toast.info(error);
  }
};
