import React, { useState } from "react";
import {Container} from './styles.js'


const VolumeSlider = ({changeVolume}) => {
    const [rangeval, setRangeval] = useState(null);

    return (
        <Container>
        <input type="range" id='myRange' className="slider" min="0" max="100" 
        onChange={(event) => changeVolume(Number(event.target.value))} />
        </Container>
    );
};

export default VolumeSlider;
