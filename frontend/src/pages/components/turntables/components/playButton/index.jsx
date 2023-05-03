import React, { useState } from "react";
import {Container} from './styles.js'


const PlayButton = ({isPlaying, handlePlay}) => {
    return (
        <Container playingColor={isPlaying ? 'lime' : 'red'}>
            <button id="playButton" onClick={() => handlePlay(!isPlaying)}>
                <div id='playerButtonLed'/>
                <p>Start / Stop</p>
            </button>
        </Container>
    );
};

export default PlayButton;
