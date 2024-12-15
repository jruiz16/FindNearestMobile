import { City } from '../services/CityService';

export interface ICityCache {
  getCities(): City[] | null;
  setCities(cities: City[]): void;
}
