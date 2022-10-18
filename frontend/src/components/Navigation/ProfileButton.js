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
        <>
            <button className="profile-buttons" onClick={openMenu}>
                {/* <i className="fas fa-user-circle" /> */}
                <i className="fa-solid fa-bars" />
                <i className="fa-solid fa-user" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        {/* <Link to={`/spots/${spot.??}`}> Manage Reviews</Link> */}
                        <Link> Manage Reviews</Link>
                    </li>
                    <li>
                        <Link to={'/spots/current'}> Manage Listings</Link>
                    </li>
                    <li>
                        <button onClick={logout}>
                            {/* <Redirect to="/spots" /> */}
                            Log Out
                        </button>

                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
