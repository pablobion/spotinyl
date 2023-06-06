import React, { createContext, useState, useContext, useEffect, useRef } from "react";

import sounds from '../../assets/sound.mp3';

const vinylContext = createContext();

export default function vinylProvider({ children }) {
    const [currentVinyl, setCurrentVinyl] = useState(null);
    const [currentVinylStatus, setCurrentVinylStatus] = useState(null);
    const [playing, setPlaying ] = useState(false);
    const [vinylList, setVinylList] = useState([]);
    const [playerSpotify, setPlayerSpotify] = useState(null);
    const [audio] = useState(new Audio(sounds));

    const remClass = (element, classNames) => classNames.forEach(className => element.classList.remove(className));

    useEffect(() => {
            playerSpotify?.connect();
            
            
    }, [playerSpotify]);


    const playFirstTrackOfAlbum = async (uri) => {
        const token = localStorage.getItem("bearerTokenSpotinyl");

          const response = await fetch('https://api.spotify.com/v1/me/player/play', {
            method: 'PUT',
            body: JSON.stringify({
                "context_uri": uri,
              }),
              headers: {
                "authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
        })
       
          console.log(response, 'slc')
      };

      
      
      // Example usage:
      const albumId = '"3ctW8o8ABBCNWWkdIvEGgV"';
      

    const handleChangeStatusCurrentVinyl = ({element, action, uri}) => {
        console.log('vai se fuder cade', uri)
        const animation = {
            'vinylRotate': () => {
                console.log('thunder')
                currentVinyl.classList.add("vinylRotate");
                // currentVinyl.classList.remove("vinylInsert");
                // currentVinyl.classList.remove("vinylOpen");
                if(playing){
                    playerSpotify.pause(() => {
                        console.log('Paused!');
                      })
                      audio.pause();
                } else {
                    playerSpotify.resume(() => {
                        console.log('resume!');
                      })
                      audio.volume = 0.5;
                      audio.play();
                      console.log('tenho a uri?', uri)
                      playFirstTrackOfAlbum(uri);
                }
               
            },
            'vinylInsertEject': () => {
                if(currentVinyl){
                    if(currentVinylStatus !== 'insert'){
                        console.log('entrou insert')
                        currentVinyl.classList.add("vinylInsert");
                        setTimeout(() => {
                            setCurrentVinylStatus('insert');
                        }, 1000);
                        return false
                    }
                    if(currentVinylStatus === 'insert'){ //Ejetando disco caso esteja inserido
                        console.log('entrou eject')
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
                }
            },

            'vinylUp': () => {
                playFirstTrackOfAlbum()
                if(currentVinylStatus === 'insert') return
                if(currentVinyl){
                    currentVinyl.classList.add("vinylDown");
                    setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                }

                setTimeout(() => {
                    element.classList.add("vinylUp");
                    setTimeout(() => element.classList.add("vinylOpen"), 500);
                    setCurrentVinyl(element)
                    setCurrentVinylStatus('up')
                }, currentVinyl ? 500 : 0);
            },

            'vinylDown': () => {
                if(currentVinylStatus === 'insert') return
                setTimeout(() => {
                    currentVinyl.classList.add("vinylDown");
                    setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                    setCurrentVinyl(null);
                }, currentVinylStatus === 'up' ? 200 : 0);
            },
        }

        animation[action](uri);
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
                playerSpotify, 
                setPlayerSpotify
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