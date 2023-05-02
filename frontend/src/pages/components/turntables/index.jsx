import React, { useState } from "react";
import {Container} from './styles.js'


import Anchor from './components/anchor/index'

const TurnTables = () => {

    const [playing, setPlaying ] = useState(true);

    const handlePlay = (action) => {
        setPlaying(action)
    }

    return (
        <Container playingColor={playing ? 'lime' : 'red'}>
            <button id="playButton" onClick={() => handlePlay(!playing)}>
                <div id='playerButtonLed'/>
                <p>Start / Stop</p>
            </button>
            <Anchor isPlaying={playing}/>
        </Container>
    );
};

export default TurnTables;
