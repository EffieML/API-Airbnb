import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import AddNewSpotModal from '../AddNewSpotModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                {/* <NavLink to="/signup">Sign Up</NavLink> */}
            </>
        );
    }


    //     return (
    //         <ul>
    //             <li>
    //                 <NavLink exact to="/">Home</NavLink>
    //                 {isLoaded && sessionLinks}
    //             </li>
    //         </ul>
    //     );
    // }

    return (
        <nav className='nav-bar'>
            <div className='nav-home'>
                <NavLink exact to="/">
                    <span><img src='https://drive.google.com/uc?export=view&id=1lTKnjy9TxFpkJRf4im-aVbqSwCcWiZi8' /></span>
                    <span>Staybnb</span>
                </NavLink>
            </div>
            <div className='Become a Host'>
                <AddNewSpotModal />
            </div>
            <div className='nav-login-signup'>
                <div>
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
