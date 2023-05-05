import React, { useState } from "react";
import {Container, TurnTablesDeisgn} from './styles.js'


import Anchor from './components/anchor/index'
import PlayButton from './components/playButton/index'
import InsertButton from './components/insertButton/index'

const TurnTables = () => {

    const [playing, setPlaying ] = useState(false);

    const handlePlay = (action) => {
        setPlaying(action)
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
