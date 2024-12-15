import { HttpClient } from '../../src/domain/interfaces/HttpClient';

const mockHttpClient: jest.Mocked<HttpClient> = {
  get: jest.fn()
};

export default mockHttpClient;
  