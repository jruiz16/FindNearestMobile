import axios from 'axios';
import { HttpClient } from '../../domain/interfaces/HttpClient';

class AxiosHttpClient implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);
    return response.data;
  }
}

export default AxiosHttpClient;
