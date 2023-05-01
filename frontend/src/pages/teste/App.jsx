
  import React from 'react';
  import {container, Logocontainer, Logo, Logotitle, Logosubtitle, Spotifyloginbutton } from './App.module.css';   
  import discoImage from '../../assets/disco.png'

  const loginSpotify = () => {
    window.location.href = "http://localhost:3000/login";
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
        