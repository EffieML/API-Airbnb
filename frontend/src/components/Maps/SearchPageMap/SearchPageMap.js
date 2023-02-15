import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import listbutton from '../../../img/listbutton.PNG';
import './SearchPageMap.css';

const containerStyle = {
    width: '53vw',
    height: 'calc(100vh - 151px)',
};

// const center = {
//     lat: 35.34447416913044,
//     lng: -100.07212787530635,
// };

const SearchPageMap = ({ apiKey, markers, spots }) => {
    const history = useHistory();
    const center = {
        lat: markers[0].position.lat,
        lng: markers[0].position.lng,
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        history.push(`/spots/${marker}`)
    };

    // if (!markers.length) { return null }
    // console.log('SearchPageMap markers2-------------', markers)

    return (
        <div className='search-page-map-container-outer'>
            {isLoaded && (
                <div className='main-page-map-container'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={7.5}
                    >
                        {markers.map(({ id, price, position }) => (
                            <Marker
                                key={id}
                                position={position}
                                title={price}
                                onClick={() => handleActiveMarker(id)}
                            />
                        ))}
                    </GoogleMap>
                </div>
            )}
        </div>
    );
};

export default React.memo(SearchPageMap);
