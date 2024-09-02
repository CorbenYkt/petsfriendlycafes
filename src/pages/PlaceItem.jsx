import React, { useState } from 'react';
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useMap, Map, useMapsLibrary, Marker, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';


const PlaceItem = (props) => {

    const [photoUrl, setPhotoUrl] = useState(null);
    const map = useMap('gmap');
    const service = new window.google.maps.places.PlacesService(map);

    getPhotoURL();
    
    async function getPhotoURL() {
        let request = {
            placeId: props.place.id,
            fields: ['photos', 'name', 'formatted_address', 'opening_hours', 'geometry'],
        };

        service.getDetails(request, (placephoto, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && placephoto) {
                if (placephoto.photos && placephoto.photos.length > 0) {
                    const photo = placephoto.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
                    setPhotoUrl(photo);
                }
            }
        });

    };

    return (
        <div className='mt-2 pr-2' onClick={() => props.setActiveMarker(props.place)}>
            <div className="overflow-auto lock max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">{props.place.displayName}</h5>
                <div className='flex flex-col items-center'>
                    {photoUrl
                        ? <div>
                            <img className="rounded-lg" src={photoUrl} alt="" /><br></br>
                        </div>
                        :
                        <div>No image</div>
                    }
                </div>
                <div className='flex flex-row'>
                    {props.place.nationalPhoneNumber
                        ? <div className='flex items-center'>
                            <AiOutlinePhone /><a href={"tel:" + props.place.nationalPhoneNumber} className="font-normal text-gray-500">{props.place.nationalPhoneNumber}</a>
                            , &nbsp;
                        </div>
                        :
                        <div className="text-sm tracking-tight text-gray-700">Cannot find phone number, &nbsp;</div>
                    }
                    {props.place.hasWiFi
                        ? <div className='flex items-center'>
                            <AiOutlineWifi />, &nbsp;
                        </div>
                        :
                        <div className="text-sm tracking-tight text-gray-700"></div>
                    }

                    {props.place.rating
                        ? <div className='flex items-center'>
                            <AiFillStar /><p className="text-sm tracking-tight text-gray-700">{props.place.rating}</p>
                        </div>
                        :
                        <div className="text-sm tracking-tight text-gray-700">There is no Rating yet</div>
                    }
                </div>


                <p className="text-gray-700 text-base">
                    {props.place.editorialSummary}
                </p>

            </div>
        </div >);
};

export default PlaceItem;