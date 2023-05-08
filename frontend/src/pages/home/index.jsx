import { useState, useEffect } from 'react'
import {Main, Container, DivVinylStack, DivTurnTables} from './styles';

import boxImage from '../../assets/box.png'

import VinylStack from '../components/vinylStack/index.jsx'
import TurnTables from '../components/turntables/index.jsx'

function Home() {
    let bearerToken = null;

    const vinyls = [
      {
        title: "The Dark Side of the Moon",
        image: "http://trunkfunk.com/yaki-da/wp-content/uploads/Ian-Pooley-Chord-Memory-Remixes-Force-Inc.-Music-Works.jpg",
      },
      {
        title: "Thriller",
        image: "http://trunkfunk.com/yaki-da/wp-content/uploads/Ian-Pooley-Chord-Memory-Remixes-Force-Inc.-Music-Works.jpg",
      },
      {
        title: "Nevermind",
        image: "http://trunkfunk.com/yaki-da/wp-content/uploads/Ian-Pooley-Chord-Memory-Remixes-Force-Inc.-Music-Works.jpg",
      },
    ];
    

    const setBearerTokenStorage = async (myParam) => {
      await localStorage.setItem("bearerTokenSpotinyl", myParam);
      bearerToken = myParam;
      if (history.replaceState) {
        history.replaceState(null, null, window.location.href.split('?')[0]);
      }
    }
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('token');
      setBearerTokenStorage(myParam)
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
      <Main>
        <Container>
          {/* <button onClick={fetchBack}>harrys house</button> */}
          <DivVinylStack>
            <VinylStack vinyls={vinyls}/>
          </DivVinylStack>
          <DivTurnTables>
            <TurnTables />
          </DivTurnTables>
        
          
        </Container>
      </Main>

    )
}

export default Home
