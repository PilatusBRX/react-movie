import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const API = '933802f4';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  //Get Movies
  useEffect(() => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API}&s=dragon ball`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);
  // Search movies
  const searchMovies = (searchTerm) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  };

  // Set Alert
  const showAlert = (msg) => {
    setAlert({ msg });
    setTimeout(() => setAlert(null), 4000);
  };

  // clear movie search
  const clearSearch = () => {
    setMovies([]);
  };

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <h1 className='text-center title'>React Movie List</h1>
                  <Alert alert={alert} />
                  <Search
                    searchMovies={searchMovies}
                    setAlert={showAlert}
                    clearSearch={clearSearch}
                  />
                  {movies ? (
                    <MovieList movies={movies} loading={loading} />
                  ) : (
                    <NotFound />
                  )}
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
