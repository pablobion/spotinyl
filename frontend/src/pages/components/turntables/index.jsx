import React, { useState } from "react";
import {Container, TurnTablesDeisgn} from './styles.js'


import Anchor from './components/anchor/index'
import PlayButton from './components/playButton/index'
import InsertButton from './components/insertButton/index'

import { useVinylContext } from "../../../pages/context/context.jsx";

const TurnTables = () => {

    const {playing, setPlaying, handleChangeStatusCurrentVinyl, currentVinylStatus} = useVinylContext();

    const handlePlay = () => {
        if(currentVinylStatus !== 'insert'){
            setPlaying(true)
            setTimeout(() => {
                setPlaying(false)
            }, 100);
            return false;
        }
        handleChangeStatusCurrentVinyl({action: 'vinylRotate'});
        setPlaying(!playing)  
    }

    return (
        <Container>
            <TurnTablesDeisgn playingColor={playing ? 'lime' : 'red'}>
                <div id='left'>
                    <InsertButton/>
                    <PlayButton isPlaying={playing} handlePlay={handlePlay}/>
                </div>
                <div id='right'>
                    <Anchor isPlaying={playing}/>
                </div>
                 
                    
            </TurnTablesDeisgn>
        </Container>
    );
};

export default TurnTables;
