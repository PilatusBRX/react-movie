import React, { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';

const About = () => {
  return (
    <Fragment>
      <div className='container about'>
        <h2>About this site</h2>
        <p>
          This site was built in order to test the OMDB api movies. See more in:
          <a href='http://www.omdbapi.com/' target='_blank'>
            {' '}
            http://www.omdbapi.com
          </a>
        </p>
        <br />
        <p>
          Link of the Github files: https://github.com/PilatusBRX/react-movie{' '}
        </p>
        <p>Demo of the site: https://netmovie.netlify.app/</p>
      </div>
    </Fragment>
  );
};

export default About;
