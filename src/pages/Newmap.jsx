import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const center = { lat: -41.2865, lng: 174.7762 }; // пример координат (центр Веллингтона)

const Newmap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAxhj-KG3sJCclJ6pgp8XZNTpKJ-vuqsvU', // замените YOUR_API_KEY на ваш API ключ
    libraries: ['places'],
  });

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      const request = {
        location: new window.google.maps.LatLng(center.lat, center.lng),
        radius: 500,
        type: ['cafe'],
        rankBy: window.google.maps.places.RankBy.POPULARITY,
      };

      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        } else {
          console.error('Error:', status);
        }
      });
    }
  }, [isLoaded]);

  if (!isLoaded) return <div>Загрузка карты...</div>;

  return (
    <GoogleMap 
      zoom={13} 
      center={center} 
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      {places.map((place) => (
        <Marker
          key={place.place_id}
          position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}
          title={place.name}
        />
      ))}
    </GoogleMap>
  );
};

export default Newmap;
