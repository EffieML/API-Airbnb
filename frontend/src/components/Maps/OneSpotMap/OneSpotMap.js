import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import housepin from '../../../img/house_droppin.PNG'
import mlogopin from '../../../img/Mlogo_red.jpg'
import './OneSpotMap.css';

const containerStyle = {
    width: '1120px',
    height: '480px',
};



const OneSpotMap = ({ apiKey, spot }) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    let lat = parseFloat(spot.lat)
    let lng = parseFloat(spot.lng)

    const center = {
        lat: lat,
        lng: lng,
    };


    return (
        <>
            {isLoaded && (
                <div className='one-spot-map-container'>
                    <div className='one-spot-map-title'>Where you'll be</div>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker
                            position={center}
                            title='Exact location provided after booking'
                        // icon={housepin}

                        />
                        {/* <img style={imgStyle} src={housepin} alt="House Icon" />
                    </Marker> */}
                    </GoogleMap>
                    <div className='one-spot-map-loc-container'>
                        <div className='one-spot-map-loc'>{`${spot.city}, ${spot.state}, ${spot.country}`} </div>
                        <div className='one-spot-map-loc2'>{`(exact location provided after booking)`} </div>
                    </div>

                </div>

            )}
        </>
    );
};

export default React.memo(OneSpotMap);
