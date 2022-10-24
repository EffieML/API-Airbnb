import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);

                if (res.status === 401) {
                    // console.log("error 401:", errors)
                    setErrors(["The provided credentials were invalid."])
                }
                // {
                //     let arr = [];
                //     arr.push(data.errors)
                //     setErrors(arr)
                // }
            });
    };

    const demoUser = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential: 'DemoUser1', password: 'password' })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };


    return (
        <div className='form'>
            <p className='form-title'>Log in</p>
            <form onSubmit={handleSubmit}>
                <p className='form-welcome'>Welcome to Staybnb</p>
                <ul className="form-errors">
                    {errors.map((error, idx) => <li key={idx} id='error' >{error}</li>)}
                </ul>
                <div className='form-elem'>
                    <label>
                        Username or Email
                        <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='form-elem'>
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
                <div className='form-button-container'>
                    <div >
                        <button className='form-button' type="submit">Log In</button>
                    </div>
                    <div>
                        <button className='form-button' onClick={demoUser}>Demo User</button>
                    </div>
                </div>
            </form>
        </div >
        // <form onSubmit={handleSubmit}>
        //     <ul>
        //         {errors.map((error, idx) => (
        //             <li key={idx}>{error}</li>
        //         ))}
        //     </ul>
        //     <label>
        //         Username or Email
        //         <input
        //             type="text"
        //             value={credential}
        //             onChange={(e) => setCredential(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <label>
        //         Password
        //         <input
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <button type="submit">Log In</button>
        // </form>
    );
}

export default LoginForm;
