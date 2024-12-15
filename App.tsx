import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchModule from './src/presentation/modules/SearchModule';
import NearestCitiesModule from './src/presentation/modules/NearestCitiesModule';
import CityService from './src/domain/services/CityService';
import AxiosHttpClient from './src/infrastructure/http/AxiosHttpClient';
import CityCache from './src/infrastructure/cache/CityCache';
import { City } from './src/domain/services/CityService';
import AppStyles from './src/presentation/styles/AppStyles';

// Crear instancias globales de CityService y CityCache
const httpClient = new AxiosHttpClient();
const cache = CityCache.getInstance();
const cityService = new CityService(httpClient, cache);

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleCitySelected = (city: City): void => {
    console.log('City Selected:', city);
    setSelectedCity(city); // Actualiza la ciudad seleccionada
  };

  const resetSelectedCity = (): void => {
    console.log('Resetting selected city.');
    setSelectedCity(null); // Resetea la ciudad seleccionada
  };

  return (
    <View style={styles.container}>
      {/* Sección de búsqueda y listado de ciudades */}
      <View style={styles.listSection}>
        <SearchModule onCitySelected={handleCitySelected} cityService={cityService} />
      </View>

      {/* Sección de ciudades cercanas */}
      <View style={styles.nearestSection}>
        {selectedCity ? (
          <NearestCitiesModule selectedCity={selectedCity} cityService={cityService} />
        ) : (
          <Text style={styles.placeholderText}>Select a city to see nearby cities.</Text>
        )}
      </View>

      {/* Botón para reiniciar la selección */}
      {selectedCity && (
        <View style={styles.resetSection}>
          <Text style={styles.resetButton} onPress={resetSelectedCity}>
            Reset Selected City
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = AppStyles;

export default App;
