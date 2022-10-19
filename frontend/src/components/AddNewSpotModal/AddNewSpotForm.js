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
            history.replace(`/spots/${addedSpot.id}`)
        }
    };

    return (
        <form className="create-spot-form" onSubmit={handleSubmit} >
            <div className="bnb-form-header">Create a spot</div>
            {errors.length > 0 && (<div className="form-error-message">
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </div>)}


            <input
                type="text"
                value={address}
                placeholder="Street"
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
            />
            <input
                type="text"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Latitude"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Longitude"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Spot name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="text"
                value={url}
                placeholder="Image url"
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <textarea
                value={description}
                placeholder="Description of this spot"
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddNewSpotForm;
