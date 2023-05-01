import { useState, useEffect } from 'react'


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
      <>
        <button onClick={fetchBack}>harrys house</button>
        <h1>asuhsauhs</h1>
      </>
    )
}

export default Home
