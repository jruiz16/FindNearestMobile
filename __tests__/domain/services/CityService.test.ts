import CityService, { City } from '../../../src/domain/services/CityService';
import mockHttpClient from '../../__mocks__/HttpClient';
import CityCache from '../../../src/infrastructure/cache/CityCache';

describe('CityService', () => {
  const mockCities: City[] = [
    { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060' },
    { id: '2', name: 'City B', lat: '34.0522', lng: '-118.2437' },
    { id: '3', name: 'City C', lat: '41.8781', lng: '-87.6298' },
  ];

  const mockCache = {
    get: jest.fn(),
    set: jest.fn(),
    clear: jest.fn(),
    getCities: jest.fn().mockReturnValue(mockCities),
    setCities: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockHttpClient.get.mockResolvedValue(mockCities);
  });

  it('should fetch cities correctly', async () => {
    const mockCities: City[] = [
      { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060' },
      { id: '2', name: 'City B', lat: '34.0522', lng: '-118.2437' },
    ];
  
    // Configurar mocks
    mockHttpClient.get.mockResolvedValueOnce(mockCities);
    mockCache.getCities.mockReturnValueOnce(null); // Caché vacía
  
    const cityService = new CityService(mockHttpClient, mockCache);
    const cities = await cityService.fetchCities();
  
    expect(cities).toEqual(mockCities);
  
    expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
    expect(mockCache.setCities).toHaveBeenCalledWith(mockCities);
  }, 10000);
  

  it('should cache fetched cities', async () => {
    const mockCities: City[] = [
      { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060' },
      { id: '2', name: 'City B', lat: '34.0522', lng: '-118.2437' },
      { id: '3', name: 'City C', lat: '41.8781', lng: '-87.6298' },
    ];
  
    mockCache.getCities.mockReturnValue([]);
    mockHttpClient.get.mockResolvedValue(mockCities);
  
    const cityService = new CityService(mockHttpClient, mockCache);
  
    await cityService.fetchCities();
  
    expect(mockCache.setCities).toHaveBeenCalledTimes(1);
    expect(mockCache.setCities).toHaveBeenCalledWith(mockCities);
  });
  

  it('should use cached cities if available', async () => {
    // Datos simulados para la caché
    const mockCities: City[] = [
      { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060' },
      { id: '2', name: 'City B', lat: '34.0522', lng: '-118.2437' },
      { id: '3', name: 'City C', lat: '41.8781', lng: '-87.6298' },
    ];

    mockCache.getCities.mockReturnValueOnce(null);
    mockHttpClient.get.mockResolvedValueOnce(mockCities);

    const cityService = new CityService(mockHttpClient, mockCache);
    const citiesFirstCall = await cityService.fetchCities();

    expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
    expect(mockCache.setCities).toHaveBeenCalledWith(mockCities);
    expect(citiesFirstCall).toEqual(mockCities);

    mockCache.getCities.mockReturnValue(mockCities);
    mockCache.getCities.mockReturnValueOnce(mockCities);

    const citiesSecondCall = await cityService.fetchCities();
    expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
    expect(mockCache.getCities).toHaveBeenCalledTimes(2);
    expect(citiesSecondCall).toEqual(mockCities);
  });
  
  

  it('should find nearest cities', async () => {
    const cityService = new CityService(mockHttpClient, mockCache);
    const baseCity: City = { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060' };

    const nearestCities = await cityService.findNearestCities(baseCity, 2);

    expect(nearestCities.length).toBe(2);
    expect(nearestCities[0].name).toBe('City C');
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });
  
});
