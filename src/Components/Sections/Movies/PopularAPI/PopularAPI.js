import React from 'react';
import '../../../../CSS/SingleMovie.css';
import API from '../../../API/API';



function PopularAPI(){
  return(
    <div>
      <API type='popular' titleSection='Popular'/>
    </div>
  )
}

export default PopularAPI