import { useState, useEffect } from "react";
import { Main, Container, DivVinylStack, DivTurnTables } from "./styles";

import boxImage from "../../assets/box.png";

import VinylStack from "../components/vinylStack/index.jsx";
import TurnTables from "../components/turntables/index.jsx";
import SearchAlbumComponent from "../components/searchAlbum/index.jsx";

import { useVinylContext } from "../context/context.jsx";

function Home() {
    let bearerToken = null;

    const { handleChangeSpotifyPlayerObject, spotifyPlayerObject } = useVinylContext();

    const setBearerTokenStorage = async (name, myParam) => {
        await localStorage.setItem(name, myParam);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get("token");
        const refreshToken = urlParams.get("refresh_token");

        setBearerTokenStorage("bearerTokenSpotinyl", accessToken);
        setBearerTokenStorage("refreshToken", refreshToken);

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

     
        if(!refreshToken){
          window.location.href = '/login';
        }

        try {
          window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: "Web Playback SDK",
                getOAuthToken: (cb) => {
                    cb(accessToken);
                },
                volume: 0.5,
            });

            player.addListener("ready", ({ device_id }) => {
                console.log("Ready with Device ID", device_id);
                handleChangeSpotifyPlayerObject("player", player);
                handleChangeSpotifyPlayerObject("deviceId", device_id);
            });

            player.addListener("not_ready", ({ device_id }) => {
                console.log("Device ID has gone offline", device_id);
            });

            player.addListener("authentication_error", ({ message }) => {
                console.error("Erro de autenticação:", message);
                console.log("Player não tem um token válido.");
                window.location.href = '/login';
            });

            player.connect();
        };

        } catch(error) {
          alert('deu erro')
        }

      
    }, []);

    return (
        <Main>


            <Container>
                <DivVinylStack>
                    <VinylStack />
                </DivVinylStack>
                <DivTurnTables>
                    <TurnTables />
                    <SearchAlbumComponent />
                </DivTurnTables>
            </Container>
  
        </Main>
    );
}

export default Home;
