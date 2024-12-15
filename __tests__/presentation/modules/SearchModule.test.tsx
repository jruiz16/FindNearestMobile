import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import SearchModule from '../../../src/presentation/modules/SearchModule';
import mockCityService from '../../__mocks__/CityService';

describe('SearchModule', () => {
  it('should render correctly and handle search input', async () => {
    const mockCities = [
      { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060' },
      { id: '2', name: 'City B', lat: '34.0522', lng: '-118.2437' },
    ];

    jest.spyOn(mockCityService, 'fetchCities').mockResolvedValue(mockCities);

    const { getByPlaceholderText, getByText } = render(
      <SearchModule cityService={mockCityService} onCitySelected={jest.fn()} />
    );

    const input = getByPlaceholderText('Search for a city');

    await act(async () => {
      fireEvent.changeText(input, 'City A');
    });

    expect(mockCityService.searchCities).toHaveBeenCalledWith('City A');
    expect(getByText('City A')).toBeTruthy();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });
});
