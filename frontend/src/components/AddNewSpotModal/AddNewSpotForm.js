import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as spotsActions from "../../store/spots";


function AddNewSpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState("");
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
            url
        }

        const addedSpot = await dispatch(spotsActions.addSpot(newSpot))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // console.log("NewListForm added new spot,", addedSpot);

        if (addedSpot) {
            setErrors([]);
            history.push(`/spots/${addedSpot.id}`)
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
                <div className="add-new-spot-elem">
                    <label>
                        Preview Image
                        <input
                            type="link"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button className="add-new-spot-button" type="submit">Submit</button>
            </form >
        </div >
    );
}

export default AddNewSpotForm;
