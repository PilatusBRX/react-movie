import React from 'react';
import Spinner from './spinner2.gif';

export const Loading = () => {
  return (
    <div className='container loading'>
      <img src={Spinner} alt='Loading...' />
    </div>
  );
};
export default Loading;
