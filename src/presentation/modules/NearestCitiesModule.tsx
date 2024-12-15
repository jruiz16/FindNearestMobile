import Config from 'react-native-config';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import LottieView from 'lottie-react-native'; // Importa LottieView
import { City } from '../../domain/services/CityService';
import CityService from '../../domain/services/CityService';
import NearestCitiesModuleStyles from '../styles/NearestCitiesModuleStyles';

interface Props {
  selectedCity: City | null;
  cityService: CityService;
}

const NearestCitiesModule: React.FC<Props> = ({ selectedCity, cityService }) => {
  const citiesCount = Number(Config.NEAREST_CITIES_COUNT) || 4;
  const [nearestCities, setNearestCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para manejar la carga

  useEffect(() => {
    const loadNearestCities = async () => {
      setIsLoading(true);
      if (selectedCity) {
        const nearest = await cityService.findNearestCities(selectedCity, citiesCount);
        setNearestCities(nearest);
      } else {
        setNearestCities([]);
      }
      setIsLoading(false);
    };

    loadNearestCities();
  }, [selectedCity, cityService]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearest Cities:</Text>
      {isLoading ? (
        <LottieView
          source={require('../assets/animations/loading.json')}
          autoPlay
          loop
          testID="loading-indicator"
          style={styles.loadingAnimation}
        />
      ) : nearestCities.length > 0 ? (
        <FlatList
          data={nearestCities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.city}>{`- ${item.name} (${item.distance?.toFixed(2)} km)`}</Text>
          )}
        />
      ) : (
        <Text style={styles.noData}>No cities found. Please select a city.</Text>
      )}
    </View>
  );
};

const styles = NearestCitiesModuleStyles;

export default NearestCitiesModule;
