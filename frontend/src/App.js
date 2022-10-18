import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpotsList from "./components/AllSpotsList";
import OneSpotList from "./components/OneSpotList";
import UserListingPage from "./components/UserListingPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route exact path="/spots/current">
            <UserListingPage />
          </Route>

          <Route path="/spots/:spotId">
            <OneSpotList />
          </Route>

          <Route exact path="/spots">
            <AllSpotsList />
          </Route>

          <Route exact path="/">
            <AllSpotsList />
          </Route>

          //all other routes shown as not found
          <Route>
            <h1>Page Not Found</h1>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
