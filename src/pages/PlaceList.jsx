import React from 'react';
import PlaceItem from './PlaceItem';

const PlaceList = ({ places, title, ActiveMarker }) => {
    return (
        <div className='ml-2'>
            <h1 className="text-lg font-bold leading-none tracking-tight text-gray-900">
                {title} ({places.length})</h1>
            {places.map((place) =>
                <PlaceItem setActiveMarker={ActiveMarker} place={place} key={place.id} />
            )}
        </div>
    );
};

export default PlaceList;