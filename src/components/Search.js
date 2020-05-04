import React, { useState } from 'react';

const Search = ({ searchMovies, setAlert }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      setAlert('Please type a movie!');
    } else {
      searchMovies(searchTerm);
      setSearchTerm([]);
    }
  };

  return (
    <div className='search-section'>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          name='text'
          value={searchTerm}
          onChange={handleInput}
          placeholder='Search for some movie or series...'
          className='search-bar'
        />
        <button type='submit'>Search movies</button>
      </form>
    </div>
  );
};
export default Search;
