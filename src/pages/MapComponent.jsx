import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useMap, Map, useMapsLibrary, Marker, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

import {
    PlaceReviews,
    PlaceDataProvider,
    PlaceDirectionsButton,
    SplitLayout
} from '@googlemaps/extended-component-library/react';
import PlaceList from './PlaceList';
import { PlaceMarker } from './PlaceMarker';

const mapStyles = {
    width: '100%',
    height: "100%",
};

function MapComponent() {
    const [isloading, setLoading] = useState(true);
    const WellingtonCityCenter = { lat: -41.2865, lng: 174.7762, accuracy: 100 }
    const [userLocation, setUserLocation] = useState(WellingtonCityCenter);
    const [globalPlaces, setGlobalPlaces] = useState(null);
    const [infoWindow, setInfoWindow] = useState(false);
    const [userLocationmarkerRef, userLocationmarker] = useAdvancedMarkerRef();
    const map = useMap('gmap');
    const routesLibrary = useMapsLibrary('routes');
    const [directionsService, setDirectionsService] =
        useState(null);
    const [directionsRenderer, setDirectionsRenderer] =
        useState(null);
    // const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        setLoading(true);
        if (!routesLibrary || !map) return;
        getUserLocation().then(() => {
            nearbySearch()
            setLoading(false);
        });
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);

    async function getUserLocation() {
        if (navigator.geolocation) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log(position.coords)
                        setUserLocation({ lat: latitude, lng: longitude });
                        resolve();
                    },
                    (error) => {
                        console.error('Error getting user location:', error);
                        reject(error);
                    }
                );
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    async function nearbySearch() {
        const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary(
            "places",
        );
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        let center = new google.maps.LatLng(userLocation.lat, userLocation.lng);
        const request = {
            fields: ["id", "photos", "rating", "displayName", "editorialSummary", "location", "businessStatus", "allowsDogs", "nationalPhoneNumber", "hasWiFi"],
            locationRestriction: {
                center: center,
                radius: 500,
            },
            includedPrimaryTypes: ["american_restaurant", "bakery", "bar", "barbecue_restaurant", "brazilian_restaurant", "breakfast_restaurant", "brunch_restaurant", "cafe", "chinese_restaurant", "coffee_shop", "fast_food_restaurant", "french_restaurant", "greek_restaurant", "hamburger_restaurant", "ice_cream_shop", "indian_restaurant", "indonesian_restaurant", "italian_restaurant", "japanese_restaurant", "korean_restaurant", "lebanese_restaurant", "meal_delivery", "meal_takeaway", "mediterranean_restaurant", "mexican_restaurant", "middle_eastern_restaurant", "pizza_restaurant", "ramen_restaurant", "restaurant", "sandwich_shop", "seafood_restaurant", "spanish_restaurant", "steak_house", "sushi_restaurant", "thai_restaurant", "turkish_restaurant", "vegan_restaurant", "vegetarian_restaurant", "vietnamese_restaurant",
            ],
            maxResultCount: 10,
            rankPreference: SearchNearbyRankPreference.POPULARITY,
            language: "en-US",
            region: "nz",
        };
        const { places } = await Place.searchNearby(request);
        setLoading(false);

        if (places.length) {
            const { LatLngBounds } = await google.maps.importLibrary("core");
            const bounds = new LatLngBounds();
            const filteredPlaces = places.filter(place => place.allowsDogs);
            // const service = new window.google.maps.places.PlacesService(map);

            setGlobalPlaces(filteredPlaces);

            filteredPlaces.forEach((place) => {
                // let request = {
                //     placeId: place.id,
                //     fields: ['photos', 'name', 'formatted_address', 'opening_hours', 'geometry'],
                // };

                // service.getDetails(request, (placephoto, status) => {
                //     if (status === window.google.maps.places.PlacesServiceStatus.OK && placephoto) {
                //         if (placephoto.photos && placephoto.photos.length > 0) {
                //             const photo = placephoto.photos[0].getUrl({ maxWidth: 400, maxHeight: 400 });
                //             setPhotoUrl(photo);
                //             console.log(photoUrl);
                //         }
                //     }
                // });


                // place.photos.forEach(function (placePhoto) {
                //     console.log(place.photos[0].getUrl({ 'maxWidth': 500, 'maxHeight': 500 }))
                // });
                
                //console.log(place)
                const AdvancedMarker = new AdvancedMarkerElement({
                    map,
                    gmpClickable: true,
                    position: place.location,
                    title: place.displayName,
                });
                AdvancedMarker.addListener("click", ({ domEvent, latLng }) => {
                    routeTo(latLng);
                });
                bounds.extend(place.location);
            });

            bounds.extend({ lat: userLocation.lat, lng: userLocation.lng })
            map.fitBounds(bounds);
        } else {
            console.log("No results");
        }
    }

    function routeTo(location) {
        if (!directionsService || !directionsRenderer) return;

        directionsService
            .route({
                origin: userLocation,
                destination: location,
                travelMode: google.maps.TravelMode.WALKING,
                provideRouteAlternatives: true
            })
            .then(response => {
                directionsRenderer.setDirections(response);
            })
            .catch(error => {
                console.error('Error in route calculation:', error);
            });
    }

    const onMapClick = ((props) => {
        console.log('try to close all windows')
    })

    const setActiveMarker = (ActiveMarker) => {
        const place = ActiveMarker
        map.setCenter(place.location)
        console.log(place.location)
        routeTo(place.location)
    };

    return (
        <SplitLayout rowReverse rowLayoutMinWidth={'700'}>
            <div className="SplitLayoutContainer max-h-56" slot="fixed" >
                <br></br>
                {isloading ? <p className='ml-2'>Loading...</p> : null}

                {globalPlaces?.length && (
                    <PlaceList ActiveMarker={setActiveMarker} places={globalPlaces} title="Nearest Places"></PlaceList>
                )
                }
            </div>
            <div className="SplitLayoutContainer" slot="main">
                <Map
                    mapId={'cbefae1f2de85910'}
                    onClick={onMapClick}
                    id="gmap"
                    style={mapStyles}
                    defaultCenter={userLocation}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                >
                    <AdvancedMarker
                        ref={userLocationmarkerRef}
                        position={userLocation}
                        title={'My position'}>
                        <Pin
                            background={'#22ccff'}
                            borderColor={'#1e89a1'}
                            glyphColor={'#0f677a'}></Pin>
                    </AdvancedMarker>
                    <InfoWindow
                        anchor={userLocationmarker}
                        maxWidth={200}
                    >
                        I'm here
                    </InfoWindow>
                </Map>
            </div>
        </SplitLayout>
    );
}
export default MapComponent;