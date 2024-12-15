import { ICityCache } from '../../domain/interfaces/ICityCache';
import { City } from '../../domain/services/CityService';

class CityCache implements ICityCache {
  private static instance: CityCache | null = null;
  private cities: City[] | null = null;

  private constructor() {}

  static getInstance(): CityCache {
    if (!CityCache.instance) {
      CityCache.instance = new CityCache();
    }
    return CityCache.instance;
  }

  getCities(): City[] | null {
    return this.cities;
  }

  setCities(cities: City[]): void {
    console.log('Storing cities in cache');
    this.cities = cities;
  }
}

export default CityCache;
