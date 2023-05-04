import React, { useState } from "react";
import {Container} from './styles.js'


 const Anchor = ({isPlaying}) => {
     return (
         <Container isPlaying={isPlaying}>
            <div id='circleBase'></div>
            <div className="bottom"></div>
            <div className="arm"> 
            <div className="body">
                <div className="head"></div>
            </div>
            </div>
         </Container>
     );
 };

 export default Anchor;

