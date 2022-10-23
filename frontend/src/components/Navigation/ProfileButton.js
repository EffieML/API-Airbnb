import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout()).then(() => history.push('/'));
    };

    return (
        <div className="nav-bar-drop-down">
            <button className="profile-buttons" onClick={openMenu}>
                {/* <i className="fas fa-user-circle" /> */}
                <i className="fa-solid fa-bars" />
                <i className="fa-solid fa-user" />
            </button>
            {showMenu && (
                <div className="profile-dropdown-container">
                    <ul className="profile-dropdown">
                        <div className="profile-dropdown-item">
                            {user.username}
                        </div>
                        <div className="profile-dropdown-item">
                            {user.email}
                        </div>
                        <hr className="solid"></hr>
                        <div className="profile-dropdown-link-item">

                            <Link to={'/spots/current'}> Manage Listings</Link>

                        </div>
                        <div className="profile-dropdown-link-item">

                            <Link to={'/reviews/current'}> Manage Reviews</Link>

                        </div>
                        <div className="profile-dropdown-link-item">

                            <button className='profile-dropdown-logout-button' onClick={logout}>
                                {/* <Redirect to="/spots" /> */}
                                Log Out
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProfileButton;
