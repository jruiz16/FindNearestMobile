import Config from 'react-native-config';
import { HttpClient } from '../interfaces/HttpClient';
import { ICityCache } from '../interfaces/ICityCache';
import haversine from 'haversine';

export interface City {
  id: string;
  name: string;
  lat: string;
  lng: string;
  distance?: number;
}

class CityService {
  private httpClient: HttpClient;
  private apiUrl: string;
  private cache: ICityCache;

  constructor(httpClient: HttpClient, cache: ICityCache) {
    this.httpClient = httpClient;
    this.apiUrl = Config.API_URL || 'https://drive.google.com/uc?export=download&id=13n_5oUlT_qaabqAO-xjuypDxt8GYFp76';
    this.cache = cache;
  }

  async fetchCities(): Promise<City[]> {
    const cachedCities = this.cache.getCities();
    
    if (cachedCities && cachedCities.length > 0) {
      return cachedCities;
    }
  
    const cities = await this.httpClient.get<City[]>(this.apiUrl);
    this.cache.setCities(cities);
  
    return cities;
  }
  

  searchCities(query: string): City[] {
    const cachedCities = this.cache.getCities();

    if (!cachedCities) {
      console.error('No cities available in cache.');
      return [];
    }

    return cachedCities.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  validateCityData(city: City): boolean {
    const isValid =
      city.lat !== undefined &&
      city.lng !== undefined &&
      !isNaN(parseFloat(city.lat)) &&
      !isNaN(parseFloat(city.lng));
  
    if (!isValid) {
      console.error(`Invalid city data: ${JSON.stringify(city)}`);
    }
  
    return isValid;
  }

  async findNearestCities(baseCity: City, count: number = 4): Promise<City[]> {
    
    const cities = await this.fetchCities();
    
    const validCities = cities
    .filter((city) => this.validateCityData(city) && city.name !== baseCity.name)
    .map((city) => ({
      ...city,
      distance: haversine(
        { latitude: parseFloat(baseCity.lat), longitude: parseFloat(baseCity.lng) },
        { latitude: parseFloat(city.lat), longitude: parseFloat(city.lng) }
      ),
    }));


  // Ordenamiento parcial para obtener solo las ciudades más cercanas
  return validCities
    .sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0))
    .slice(0, count);
  }
}

export default CityService;
