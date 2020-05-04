import React from 'react';
const NotFound = () => {
  return (
    <div className='container not-found about'>
      <h2>
        Sorry! The movie that you're looking for is unavailable in the database.
      </h2>
      <a href='/' back-to-home>
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
