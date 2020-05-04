import React from 'react';
import Movie from './Movie';
import Loading from './layout/Loading';

const MovieList = ({ movies, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='movie-list row'>
        {movies.map((movie, i) => {
          return <Movie movie={movie} key={i} />;
        })}
      </div>
    );
  }
};

export default MovieList;
