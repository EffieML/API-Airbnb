import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as spotsActions from "../../store/spots";


function EditSpotForm(spotId) {
    const dispatch = useDispatch();
    const history = useHistory();

    const allSpots = Object.values(useSelector(state => state.spots.allSpots));
    console.log('editSpotForm spot', allSpots);
    const spot = allSpots[spotId];

    const [address, setAddress] = useState(spot ? spot.address : '');
    const [city, setCity] = useState(spot ? spot.city : '');
    const [state, setState] = useState(spot ? spot.state : '');
    const [country, setCountry] = useState(spot ? spot.country : '');
    const [lat, setLat] = useState(spot ? spot.lat : '');
    const [lng, setLng] = useState(spot ? spot.lng : '');
    const [name, setName] = useState(spot ? spot.name : '');
    const [description, setDescription] = useState(spot ? spot.description : '');
    const [price, setPrice] = useState(spot ? spot.price : '');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSpot = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
        }

        const editedSpot = await dispatch(spotsActions.editSpot(newSpot))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // console.log("NewListForm added new spot,", addedSpot);

        if (editedSpot) {
            setErrors([]);
            // history.replace(`/spots/${editedSpot.id}`)
        }
    };

    return (
        <div className="add-new-spot-form">
            <p className='add-new-spot-title'>Create new listing</p>
            <form onSubmit={handleSubmit}>
                <p className='add-new-spot-welcome'>Open your door to hosting</p>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="add-new-spot-elem">
                    <label>
                        Address
                        <input
                            type="text"
                            // placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        City
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        State
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        Country
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        Latitude
                        <input
                            type="float"
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        Longitude
                        <input
                            type="float"
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        Listing Title
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        Description
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-spot-elem">
                    <label>
                        Price
                        <input
                            type="float"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button className="add-new-spot-button" type="submit">Submit</button>
            </form >
        </div >
    );
}

export default EditSpotForm;
