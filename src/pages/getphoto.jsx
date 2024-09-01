import React, { useEffect, useState } from 'react';

const GoogleMapComponent = () => {
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -33.8688, lng: 151.2195 },
                zoom: 15,
            });

            const service = new window.google.maps.places.PlacesService(map);

            const request = {
                query: 'Starbucks',
                fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
            };

            service.findPlaceFromQuery(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
                    const place = results[0];
                    if (place.photos && place.photos.length > 0) {
                        const photo = place.photos[0].getUrl({ maxWidth: 400, maxHeight: 400 });
                        setPhotoUrl(photo);
                    }
                }
            });
        };

        // Загружаем Google Maps JavaScript API и запускаем initMap после загрузки
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxhj-KG3sJCclJ6pgp8XZNTpKJ-vuqsvU&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => initMap();
            document.head.appendChild(script);
        };

        loadScript();
    }, []);

    return (
        <div>
            <div id="map" style={{ height: '500px' }}></div>
            {photoUrl && (
                <div>
                    <h3>Фотография:</h3>
                    <img src={photoUrl} alt="Фотография места" style={{ maxWidth: '400px', maxHeight: '400px' }} />
                </div>
            )}
        </div>
    );
};

export default GoogleMapComponent;
