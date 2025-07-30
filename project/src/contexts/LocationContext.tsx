import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Location {
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  country?: string;
  address?: string;
}

interface LocationContextType {
  location: Location | null;
  loading: boolean;
  error: string | null;
  getCurrentLocation: () => Promise<void>;
  updateLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}

interface LocationProviderProps {
  children: ReactNode;
}

export function LocationProvider({ children }: LocationProviderProps) {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reverse geocoding function to get address from coordinates
  const reverseGeocode = async (latitude: number, longitude: number): Promise<Partial<Location>> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
      );
      const data = await response.json();
      
      if (data.display_name) {
        const addressParts = data.display_name.split(', ');
        return {
          city: addressParts[1] || '',
          state: addressParts[3] || '',
          country: addressParts[addressParts.length - 1] || '',
          address: data.display_name
        };
      }
    } catch (error) {
      console.error('Reverse geocoding failed:', error);
    }
    
    return {};
  };

  const getCurrentLocation = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser');
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        });
      });

      const { latitude, longitude } = position.coords;
      const addressData = await reverseGeocode(latitude, longitude);

      const newLocation: Location = {
        latitude,
        longitude,
        ...addressData
      };

      setLocation(newLocation);
      
      // Save to localStorage
      localStorage.setItem('userLocation', JSON.stringify(newLocation));
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get location';
      setError(errorMessage);
      console.error('Location error:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateLocation = (newLocation: Location) => {
    setLocation(newLocation);
    localStorage.setItem('userLocation', JSON.stringify(newLocation));
  };

  // Load saved location on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      try {
        const parsedLocation = JSON.parse(savedLocation);
        setLocation(parsedLocation);
      } catch (error) {
        console.error('Failed to parse saved location:', error);
      }
    }
  }, []);

  const value: LocationContextType = {
    location,
    loading,
    error,
    getCurrentLocation,
    updateLocation
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
} 