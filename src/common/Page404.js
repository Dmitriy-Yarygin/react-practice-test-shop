import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2> Page not found </h2>
    <Link to='/' activeClassName='active'>
      Return to the main page
    </Link>
  </div>
);

export default NotFound;
