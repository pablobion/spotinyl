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

    const handleChangeSpotifyPlayerObject = (name, value) => {
        const obj = {
            ...spotifyPlayerObject,
            [name]: value
        };
        setSpotifyPlayerObject(obj)
        return obj;
    }

    const remClass = (element, classNames) => classNames.forEach(className => element.classList.remove(className));

    useEffect(() => {
        spotifyPlayerObject?.player?.connect();
    }, [spotifyPlayerObject.player]);


    const playFirstTrackOfAlbum = async (uri) => {
        const token = localStorage.getItem("bearerTokenSpotinyl");

        //   const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         "context_uri": uri,
        //       }),
        //     headers: {
        //       'Authorization': 'Bearer ' + localStorage.getItem("bearerTokenSpotinyl"),
        //       'Content-Type': 'application/json',
        //     },
        // })

        
        const response = await fetch('https://api.spotify.com/v1/me/player', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("bearerTokenSpotinyl"),
            },
            body: JSON.stringify({
              device_ids:[spotifyPlayerObject.deviceId],
              play: true,
            }),
          })
          
       
          console.log(response, 'slc')
      };

      

    const handleChangeStatusCurrentVinyl = ({element, action, uri}) => {

        const animation = {
            'vinylRotate': () => {
                console.log('thunder')
                if(currentVinylStatus !== 'insert'){
                    setPlaying(true)
                    setTimeout(() => { setPlaying(false)}, 50);
                    return false;
                }

                currentVinyl.classList.add("vinylRotate");
                // currentVinyl.classList.remove("vinylInsert");
                // currentVinyl.classList.remove("vinylOpen");
                if(playing){
                    setPlaying(false);
                    console.log('1')
                    spotifyPlayerObject.player.pause(() => {
                        console.log('Paused!');
                      })
                      audio.pause();
                    
                } else {
                    console.log('2.2')
                    // spotifyPlayerObject.player.resume(() => {
                    //     console.log('resume!');
                    //   })
                      //audio.volume = 0.5;
                      //audio.play();
                      setPlaying(true);
                    
                      playFirstTrackOfAlbum(uri);
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
                        currentVinyl.classList.remove("vinylInsert");
                        currentVinyl.classList.remove("vinylEject");
                        setCurrentVinylStatus(null);
                    }, 2600);
                }
            },

            'vinylUp': () => {
                if (currentVinylStatus === 'insert') {
                    return;
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