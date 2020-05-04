import React, { Fragment } from 'react';

import DEFAULT_IMAGE from './layout/default.jpg';
const Movie = ({ movie }) => {
  const { Poster, Title, Year, Type } = movie;
  const poster = Poster === 'N/A' ? DEFAULT_IMAGE : Poster;
  return (
    <Fragment>
      <div className='movie col-lg-3 col-md-3 col-sm-6 col-xs-12 '>
        <div className='image-scale'>
          <img src={poster} alt={Title} />
        </div>
        <div className='movie-body'>
          <h2 className='card-title'>{Title}</h2>
          <span> {Year}</span>
          <h4 className='type'>{Type}</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
