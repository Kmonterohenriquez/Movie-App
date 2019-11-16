import React from 'react';
import '../../../../CSS/SingleMovie.css';
import API from '../../../API/API';



function TopRatedAPI(){
  return(
    <div>
      <API type='top_rated'titleSection='Top rated'/>
    </div>
  )
}

export default TopRatedAPI