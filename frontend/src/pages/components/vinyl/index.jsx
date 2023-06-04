import React, { useState } from "react";
import {Container} from './styles.js'


const VinylComponent = ({customClass, image}) => {
    return (
        <Container className={customClass}>
            <div class="vinyl vinyl-1 paused">
                <div class="grooves"></div>
                <div class="light"></div>
                <div class="light-alt"></div>
                <div class="macaron">
                    <img class="cover" width={100} src={image} alt=""/>
                </div>
            </div>
        </Container>
    );
};

export default VinylComponent;
