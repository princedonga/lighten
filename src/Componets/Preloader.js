

import React from 'react';


function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner">

        <img src='https://themewagon.github.io/lighten/images/loading.gif' alt='loader' className='w-75 d-block mx-auto'></img>
      </div>
    </div>
  );
}

export default Preloader;
