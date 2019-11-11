import React from 'react';
import '../CSS/SingleMovie.css';
import API from './API';



function NowPlayingAPI(){
  return(
    <div>
      <API type='now_playing' titleSection='Now playing'/>
    </div>
  )
}

export default NowPlayingAPI