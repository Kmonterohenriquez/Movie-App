import React from 'react';
import '../CSS/SingleMovie.css';
import API from './API';



function UpcomingAPI(){
  return(
    <div>
      <API type='upcoming' titleSection='Upcoming'/>
    </div>
  )
}

export default UpcomingAPI