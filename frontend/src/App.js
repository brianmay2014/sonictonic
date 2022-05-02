import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SongSquare from './components/SongSquare';

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
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/login">
						<LoginFormPage />
					</Route>
					<Route path="/signup">
						<SignupFormPage />
					</Route>
					<Route path="/cabinet">
						{/* <SongSquare /> */}
						{/* <FilterCabinet />
            <CabinetDisplay /> */}
					</Route>
					<Route path="/upload">
						{/* <TrackNavButtons />
            <UploadForm /> */}
					</Route>
					<Route path="/yourtracks">
						{/* <TrackNavButtons />
            <YourTrackList /> */}
					</Route>
          <Route path="/song/:songId">
            {/* <BigPlayer />
            <SongComments /> */}
          </Route>
				</Switch>
			)}
		</>
  );
}

export default App;
