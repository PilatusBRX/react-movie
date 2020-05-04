import React from 'react';
import DEFAULT_IMAGE from './layout/deafult.jpg';

const Modal = ({ movie }) => {
  const { Poster, Title, Year } = movie;
  const poster = Poster === 'N/A' ? DEFAULT_IMAGE : Poster;
  return (
    <div className='wrapper'>
      <a href='#modal-one' className='btn openbtn'>
        Open Dialog
      </a>

      <div className='modal' id='modal-one'>
        <div className='modal-content'>
          <div className='movie col-lg-12 col-md-8 col-sm-6 col-xs-12 '>
            <img src={poster} className='card-img-top' alt={Title} />
            <div className='movie-body'>
              <h2 className='card-title'>{Title}</h2>
              <span>Year: {Year}</span>
              <Modal movie={movie} />
            </div>
          </div>
          <a href='#close' className='btn closebtn'>
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
