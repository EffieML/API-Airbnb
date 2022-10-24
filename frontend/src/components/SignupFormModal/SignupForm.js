import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors)
                    // setErrors(data.errors)
                    {
                        let arr = [];
                        let dataErr = Object.values(data.errors)
                        // console.log("ming error: ", dataErr)
                        dataErr.forEach((err) => { arr.push(err) })
                        // console.log("ming arr: ", arr)
                        setErrors(arr)
                    };

                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="form">
            <p className='form-title'>Sign up</p>
            <form onSubmit={handleSubmit}>
                <p className='form-welcome'>Welcome to Staybnb</p>
                <ul className="form-errors">
                    {errors.map((error, idx) => <li key={idx} id='error'>{error}</li>)}
                </ul>
                <div className="form-elem">
                    <label>
                        Email
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-elem">
                    <label>
                        First Name
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-elem">
                    <label>
                        Last Name
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-elem">
                    <label>
                        Username
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-elem">
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-elem">
                    <label>
                        Confirm Password
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='form-button-container'>
                    <button className="form-button" type="submit">Sign Up</button>
                </div>
            </form >
        </div >
    );
}

export default SignupForm;

// onClick={handleSubmit}
