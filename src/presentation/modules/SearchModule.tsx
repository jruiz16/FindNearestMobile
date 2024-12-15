import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, FlatList, Text, TouchableOpacity, View, Button } from 'react-native';
import { City } from '../../domain/services/CityService';
import CityService from '../../domain/services/CityService';
import SearchModuleStyles from '../styles/SearchModuleStyles';


interface Props {
  onCitySelected: (city: City) => void;
  cityService: CityService;
}

const SearchModule: React.FC<Props> = ({ onCitySelected, cityService }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const cities = await cityService.fetchCities();
        setFilteredCities(cities);
        console.log('Cities loaded in SearchModule');
      } catch (error) {
        console.error('Error loading cities:', error);
      }
    };

    loadCities();
  }, [cityService]);

  const handleSearch = (text: string): void => {
    setSearchText(text);

    if (text.trim() === '') {
      // Si el cuadro de texto está vacío, muestra todas las ciudades
      cityService.fetchCities().then(setFilteredCities);
      return;
    }

    const filtered = cityService.searchCities(text);
    setFilteredCities(filtered);
  };

  const clearSearch = (): void => {
    setSearchText('');
    cityService.fetchCities().then(setFilteredCities);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for a city"
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredCities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCitySelected(item)}>
            <Text style={styles.city}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = SearchModuleStyles;

export default SearchModule;
