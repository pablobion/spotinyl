import React, { useState, useRef } from "react";

import { VinylDiscDiv, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'

const VinylStack = ({ vinyls }) => {

  let currentElement = null;

  const handleSelectAlbum = (e) => {
    const target = e.target;
    if (currentElement === target) {
      currentElement.classList.remove("animationDiscUp");
      currentElement = null;
    } else {
      if (currentElement) {
        currentElement.classList.remove("animationDiscUp");
      }
      target.classList.add("animationDiscUp");
      currentElement = target;
    }
  };

  return (
    <Container>
      {vinyls.map((vinyl, index) => {
        return (
          <VinylDiscDiv 
            onClick={(e) => handleSelectAlbum(e)}
            key={`${index}`} 
            bottom={index * -50}>
            <div className='vinylDisc' >
              <img  src={vinyl.image} />
            </div>
          </VinylDiscDiv>
        )
        })
      }
      <BoxDiscosImage src={boxImage} alt="box" />
    </Container>
  );
};

export default VinylStack;
