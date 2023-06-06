import { useState, useEffect } from 'react'
import {Main, Container, DivVinylStack, DivTurnTables} from './styles';

import boxImage from '../../assets/box.png'

import VinylStack from '../components/vinylStack/index.jsx'
import TurnTables from '../components/turntables/index.jsx'
import SearchAlbumComponent from '../components/searchAlbum/index.jsx'

import { useVinylContext } from '../context/context.jsx'



function Home() {
    let bearerToken = null;

    const {currentVinyl, handleChangeStatusCurrentVinyl, setPlaying, playing, setPlayerSpotify, playerSpotify} = useVinylContext();
    const [player, setPlayer] = useState(null);

    

    const setBearerTokenStorage = async (myParam) => {
      await localStorage.setItem("bearerTokenSpotinyl", myParam);
      bearerToken = myParam;
      // if (history.replaceState) {
      //   history.replaceState(null, null, window.location.href.split('?')[0]);
      // }
    }
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('token');
      setBearerTokenStorage(myParam)

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
  
      document.body.appendChild(script);
  
      window.onSpotifyWebPlaybackSDKReady = () => {
  
          const player = new window.Spotify.Player({
              name: 'vinyl player',
              getOAuthToken: cb => { cb(myParam); },
              volume: 0.02
          });
  
          setPlayerSpotify(player);

          player?.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });
    
        player?.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });
    
      };
    }, []);




    return (
      <Main>
        <Container>
          <DivVinylStack>
            <VinylStack/>
          </DivVinylStack>
          <DivTurnTables>
            <TurnTables />
            <SearchAlbumComponent/>
          </DivTurnTables>
        </Container>
      </Main>

    )
}

export default Home
