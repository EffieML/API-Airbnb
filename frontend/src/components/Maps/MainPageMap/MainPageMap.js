import React, { useState } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import listbutton from '../../../img/listbutton.PNG';
import './MainPageMap.css';

const containerStyle = {
    width: '100vw',
    height: 'calc(100vh - 151px)',
};

const center = {
    lat: 35.34447416913044,
    lng: -100.07212787530635,
};


const MainPageMap = ({ apiKey, markers, spots }) => {
    const history = useHistory();
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        history.push(`/spots/${marker}`)
    };

    if (!markers.length) { return null }


    return (
        <div className='main-page-map-container-outer'>
            {isLoaded && (
                <div className='main-page-map-container'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={5.3}
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
            <NavLink to={'/spots'} className='all-spots-list-container'>
                <div>Show list</div>
                <img src={listbutton} />
            </NavLink>
        </div>
    );
};

export default React.memo(MainPageMap);
