import React from 'react';
import {container, Logocontainer, Logo, Logotitle, Logosubtitle, Spotifyloginbutton } from './App.module.css';
import discoImage from '../../assets/disco.png';

const loginSpotify = async () => {
  // Use a variável de ambiente, ou URL fixa se não estiver disponível
  const apiUrl = import.meta.env.VITE_API_URL || "https://spotinyl.onrender.com";
  console.log("Redirecionando para:", `${apiUrl}/login`);
  window.location.href = `${apiUrl}/login`;
}

function App() {
  return (
    <div className={container}>
      <header>
        <div className={Logocontainer}>
          <img src={discoImage} className={Logo} alt="logo" />
          <div>
            <h1 className={Logotitle}>Vinylify</h1>
            <p className={Logosubtitle}>Your ultimate vinyl collection organizer.</p>
          </div>
        </div>
        <button onClick={loginSpotify} className={Spotifyloginbutton}>Login with Spotify</button>
      </header>
    </div>
  );
}

export default App;
