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
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
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
        <div className='loginform'>
            <p className='login-title'>Log in</p>
            <form onSubmit={handleSubmit}>
                <p className='login-welcome'>Welcome to Staybnb</p>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='login-elem'>
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
                <div className='login-elem'>
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
                <div>
                    <button className='login-button' type="submit">Log In</button>
                </div>
                <div>
                    <button className='login-button' onClick={demoUser}>Demo User</button>
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