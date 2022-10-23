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
            <div className='nav-button-login-signup'>
                <div className="nav-button">
                    <LoginFormModal />
                </div>
                <div className="nav-button">
                    <SignupFormModal />
                </div>
                {/* <NavLink to="/signup">Sign Up</NavLink> */}
            </div>
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
        <div className='nav-bar-container'>
            <nav className='nav-bar'>
                <div className='nav-bar-left'>
                    <NavLink exact to="/">
                        <div><img className='nav-bar-logo' src='https://drive.google.com/uc?export=view&id=1lTKnjy9TxFpkJRf4im-aVbqSwCcWiZi8' /></div>
                        <div className='nav-bar-name'>Staybnb</div>
                    </NavLink>
                </div>
                <div className='nav-bar-right'>
                    <div className='become-a-host'>
                        <AddNewSpotModal />
                    </div>
                    <div className='nav-login-signup'>
                        <div>
                            {isLoaded && sessionLinks}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
