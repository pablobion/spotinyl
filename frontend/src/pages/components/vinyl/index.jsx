import React, { useState } from "react";
import {Container} from './styles.js'


const VinylComponent = (props) => {
    return (
        <Container>
            <div class="vinyl vinyl-1 paused">
                <div class="grooves"></div>
                <div class="light"></div>
                <div class="light-alt"></div>
                <div class="macaron">
                    <img class="cover" width={100} src="http://trunkfunk.com/yaki-da/wp-content/uploads/Ian-Pooley-Chord-Memory-Remixes-Force-Inc.-Music-Works.jpg" alt=""/>
                </div>
            </div>
        </Container>
    );
};

export default VinylComponent;
