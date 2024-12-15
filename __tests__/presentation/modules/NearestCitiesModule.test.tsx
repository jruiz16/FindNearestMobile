import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import NearestCitiesModule from '../../../src/presentation/modules/NearestCitiesModule';
import mockCityService from '../../__mocks__/CityService';

describe('NearestCitiesModule', () => {
  it('should render nearest cities correctly', async () => {
    const mockCities = [
      { id: '1', name: 'City A', lat: '40.7128', lng: '-74.0060', distance: 10 },
      { id: '2', name: 'City B', lat: '34.0522', lng: '-118.2437', distance: 20 },
    ];

    jest.spyOn(mockCityService, 'findNearestCities').mockResolvedValue(mockCities);

    const { getByText } = render(
      <NearestCitiesModule
        selectedCity={{ id: '0', name: 'Base City', lat: '40.7128', lng: '-74.0060' }}
        cityService={mockCityService}
      />
    );

    await act(async () => {
        await waitFor(() => {
        expect(getByText('- City A (10.00 km)')).toBeTruthy();
        expect(getByText('- City B (20.00 km)')).toBeTruthy();
        });
    });
  }, 10000);

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });
});
