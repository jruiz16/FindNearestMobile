import CityService from '../../src/domain/services/CityService';

const mockHttpClient = { get: jest.fn() };
const mockCache = { get: jest.fn(), set: jest.fn(), getInstance: jest.fn() };

const mockCityService = new CityService(mockHttpClient as any, mockCache as any);

jest.spyOn(mockCityService, 'fetchCities').mockResolvedValue([]);
jest.spyOn(mockCityService, 'searchCities').mockImplementation(() => []);
jest.spyOn(mockCityService, 'findNearestCities').mockImplementation(() => Promise.resolve([]));

export default mockCityService;
