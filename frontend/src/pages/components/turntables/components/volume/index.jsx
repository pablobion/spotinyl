import React, { useState } from "react";
import {Container} from './styles.js'


const VolumeSlider = () => {


    const [rangeval, setRangeval] = useState(null);
    

    return (
        <Container>
              <div id='base'></div>
        
 

      <input type="range" id='myRange' className="slider" min="0" max="100" 
       onChange={(event) => setRangeval(event.target.value)} />
   
      <h4>The range value is {rangeval}</h4>
        </Container>
    );
};

export default VolumeSlider;
