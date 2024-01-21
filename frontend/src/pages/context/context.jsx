import React, { createContext, useState, useContext, useEffect, useRef } from "react";

import sounds from '../../assets/sound.mp3';

const vinylContext = createContext();

export default function vinylProvider({ children }) {
    const [currentVinyl, setCurrentVinyl] = useState(null);
    const [currentVinylStatus, setCurrentVinylStatus] = useState(null);
    const [playing, setPlaying ] = useState(false);
    const [vinylList, setVinylList] = useState([]);
    const [audio] = useState(new Audio(sounds));

    const [spotifyPlayerObject, setSpotifyPlayerObject] = useState({
        player: null,
        deviceId: null,
        albumUri: ''
    })

   useEffect(() => {
    const mode  = playing ? 'play' : 'pause';
    if(spotifyPlayerObject.deviceId){
        playAndPause(mode);
    }
   }, [playing]);

    const handleChangeSpotifyPlayerObject = (name, value) => {
        const obj = {
            ...spotifyPlayerObject,
            [name]: value
        };
        setSpotifyPlayerObject(obj)
        return obj;
    }

    const remClass = (element, classNames) => classNames.forEach(className => element.classList.remove(className));



    const playFirstTrackOfAlbum = async (uri) => {
        const token = localStorage.getItem("bearerTokenSpotinyl");

        if(spotifyPlayerObject.deviceId === null) return alert('nao foi possivel encontrar device id')


        const deviceId = spotifyPlayerObject.deviceId; // Substitua pelo seu ID de dispositivo
        const albumUri = spotifyPlayerObject.albumUri; // Substitua pelo URI do álbum

        const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("bearerTokenSpotinyl"),
            },
            body: JSON.stringify({
                context_uri: albumUri,
            }),
          })
          const status = response.status;
          if (status === 204 || status === 202) {
            console.log('Álbum reproduzido com sucesso!');
          } else {
            console.error('Ocorreu um erro primeir atrack do album:', response.status);
          }


    };

    const nextSong = async () => {
        const token = localStorage.getItem("bearerTokenSpotinyl");
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            },
        };

        try {
            const response = await fetch('https://api.spotify.com/v1/me/player/next', requestOptions);

            if (response.status === 204) {
            console.log('Avançou para a próxima música com sucesso.');
            } else {
            console.error('Erro ao avançar para a próxima música:', response.status);
            }
        } catch (error) {
            console.error('Erro na solicitação:', error);
        }
    }

    const playAndPause =  async (mode) => {
        const response = await fetch(`https://api.spotify.com/v1/me/player/${mode}?device_id=${spotifyPlayerObject.deviceId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("bearerTokenSpotinyl"),
            },
            body: JSON.stringify({
              device_ids:[spotifyPlayerObject.deviceId],
            }),
          })

          if (response.status === 204) {
            console.log('Álbum reproduzido com sucesso!');
          } else {
            console.error('Ocorreu um erro ao dar play/pause', response.status);
          }
    };
      

    const handleChangeStatusCurrentVinyl = ({element, action, uri, porra}) => {
        const animation = {
            'vinylRotate': () => {
                if(currentVinylStatus !== 'insert'){
                    setPlaying(true)
                    setTimeout(() => { setPlaying(false)}, 50);
                    return false;
                }

                
             
                if(playing){
                    setPlaying(false);
                    console.log(spotifyPlayerObject.player);
                      audio.pause();

                 
                   
                } else {
                    if(uri){
                        setPlaying(true);
                        console.log('2.2', uri)
                        currentVinyl.classList.add("vinylRotate");
                        // spotifyPlayerObject.player.resume(() => {
                        //     console.log('resume!');
                        //   })
                          audio.volume = 0.5;
                          audio.play();
                         
                         // playAndPause('play');
                          playFirstTrackOfAlbum(uri);
                    }
                }
               
            },
            'vinylInsertEject': () => {
                if (!currentVinyl) {
                    return false;
                }
            
                if (currentVinylStatus !== 'insert') {
                    console.log('entrou insert');
                    currentVinyl.classList.add("vinylInsert");
                    setTimeout(() => {
                        setCurrentVinylStatus('insert');
                    }, 1000);
                    return false;
                }
            
                if (currentVinylStatus === 'insert') {
                    console.log('entrou eject');
                    setPlaying(false);
                   
                    setTimeout(() => {
                        currentVinyl.classList.remove("vinylRotate");
                        currentVinyl.classList.add("vinylEject");
                    }, 1000);
            
                    setTimeout(() => {
                        remClass(currentVinyl, ["vinylInsert", "vinylEject"])
                        setCurrentVinylStatus(null);
                    }, 2600);
                }
            },

            'vinylUp': () => {
                if (currentVinylStatus === 'insert') {
                    currentVinyl.classList.add("vinylEject");
                    setTimeout(() => {
                        remClass(currentVinyl, ["vinylInsert", "vinylEject"])
                        currentVinyl.classList.add("vinylDown");
                        setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                        setCurrentVinylStatus(null);
                    }, 2600);
                }
                handleChangeSpotifyPlayerObject('albumUri', uri);
            
                if (currentVinyl) {
                    currentVinyl.classList.add("vinylDown");
                    setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                }
            
                setTimeout(() => {
                    element.classList.add("vinylUp");
                    setTimeout(() => element.classList.add("vinylOpen"), 500);
                    setCurrentVinyl(element);
                    setCurrentVinylStatus('up');
                }, currentVinyl ? 500 : 0);
            }
            ,

            'vinylDown': () => {
                if (currentVinylStatus === 'insert') {
                    return;
                }
            
                setTimeout(() => {
                    if (currentVinylStatus === 'up') {
                        currentVinyl.classList.add("vinylDown");
                        setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                        setCurrentVinyl(null);
                    }
                }, currentVinylStatus === 'up' ? 200 : 0);
            }
            ,
        }

        animation[action]();
    }

    return (
        <vinylContext.Provider
            value={{
                currentVinyl,
                setCurrentVinyl,
                currentVinylStatus,
                handleChangeStatusCurrentVinyl,
                playing, 
                setPlaying,
                vinylList, 
                setVinylList,
                handleChangeSpotifyPlayerObject,
                spotifyPlayerObject

            }}
        >
            {children}
        </vinylContext.Provider>
    );
}

export function useVinylContext() {
    const context = useContext(vinylContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");

    const { currentVinyl, setCurrentVinyl, currentVinylStatus, handleChangeStatusCurrentVinyl, playing, setPlaying, vinylList, setVinylList} = context;

    return { ...context};
}