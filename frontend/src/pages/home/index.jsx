import { useState, useEffect } from 'react'
 import {container, boxDiscos} from './Styles.module.scss';

import boxImage from '../../assets/box.png'

function Home() {
    let bearerToken = null;
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('token');
      localStorage.setItem("bearerTokenSpotinyl", myParam);
      bearerToken = myParam;
    }, []);

    const fetchBack = async () => {
      const response = await fetch('http://localhost:3000/albums', {
        method: 'POST',
        body: JSON.stringify({bearerToken}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    return (
      <div className={container}>
        <button onClick={fetchBack}>harrys house</button>
        <h1>asuhsauhs</h1>
        <img src={boxImage} className={boxDiscos} alt="box" />
      </div>
    )
}

export default Home
