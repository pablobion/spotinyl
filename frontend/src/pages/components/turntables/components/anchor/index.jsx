import React, { useState } from "react";
import {Container} from './styles.js'


 const Anchor = ({isPlaying}) => {
     return (
         <Container isPlaying={isPlaying}>
            <div id='circleBase'></div>
            <div class="bottom"></div>
            <div class="arm"> 
            <div class="body">
                <div class="head"></div>
            </div>
            </div>
         </Container>
     );
 };

 export default Anchor;

