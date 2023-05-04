import React, { useState, useRef } from "react";

import { VinylDiscDiv, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'
import discoImage from '../../../assets/disco.png'

const VinylStack = ({ vinyls }) => {

  const [currentElement, setCurrentElement] = useState();

  const handleSelectAlbum = (e) => {
    const target = e.target;
    if (currentElement === target) {

      currentElement.classList.add("vinylClose");
      setTimeout(() => {
        currentElement.classList.remove("vinylUp");
        currentElement.classList.remove("vinylOpen");
        currentElement.classList.remove("vinylClose");
      }, 1000);

      setCurrentElement(null)
    } else {
      if (currentElement) {
        currentElement.classList.add("vinylClose");
        setTimeout(() => {
          currentElement.classList.remove("vinylUp");
          currentElement.classList.remove("vinylOpen");
          currentElement.classList.remove("vinylClose");
        }, 1000);
      }

      target.classList.add("vinylUp");
      setTimeout(() => {
        target.classList.add("vinylOpen");
      }, 500);
      setCurrentElement(target)
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
              <img src={vinyl.image} />
              <img className='disco' src={discoImage} />
            </div>
          </VinylDiscDiv>
        )
        })
      }
      { currentElement && (
        <button>Abrir este disco</button>
      )}
      <BoxDiscosImage src={boxImage} alt="box" />
    </Container>
  );
};

export default VinylStack;
