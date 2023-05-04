import React, { useState } from "react";
import {Container} from './styles.js'


import Anchor from './components/anchor/index'
import PlayButton from './components/playButton/index'
import InsertButton from './components/insertButton/index'

const TurnTables = () => {

    const [playing, setPlaying ] = useState(false);

    const handlePlay = (action) => {
        setPlaying(action)
    }

    return (
        <Container playingColor={playing ? 'lime' : 'red'}>
            <InsertButton/>
            <PlayButton isPlaying={playing} handlePlay={handlePlay}/>
            <Anchor isPlaying={playing}/>
        </Container>
    );
};

export default TurnTables;
