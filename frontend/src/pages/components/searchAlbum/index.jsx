import React, { useState, useEffect } from "react";
import {Container} from './styles.js'


import { useVinylContext } from "../../../pages/context/context.jsx";

const SearchAlbumComponent = () => {

    const {vinylList, setVinylList} = useVinylContext();

    const [album, setAlbum] = useState('');
    let bearerToken = null;

    const handleSearchAlbum =  async () => {
        const response = await fetch('http://localhost:3000/albums', {
          method: 'POST',
          body: JSON.stringify({album, bearerToken: localStorage.getItem("bearerTokenSpotinyl")}),
          headers: {
            'Content-Type': 'application/json',
          }
        })

        setVinylList(await response.json())
    }

    const teste = async () => {
        bearerToken = await localStorage.getItem("bearerTokenSpotinyl");
    }

    useEffect( () => {
        teste()
    }, [])



    return (
        <Container>
              <input value={album} onChange={(e) => setAlbum(e.target.value)}></input>
              <button onClick={handleSearchAlbum}>Search</button>
        </Container>
    );
};

export default SearchAlbumComponent;
