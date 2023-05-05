import React, { useState, useRef } from "react";

import { VinylDiscDiv, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'
import discoImage from '../../../assets/disco.png'

import { useVinylContext } from "../../../pages/context/context.jsx";

const VinylStack = ({ vinyls }) => {

  const {currentVinyl, setCurrentVinyl} = useVinylContext();

  const removeClassNames = (element, classNames) => classNames.forEach(className => element.classList.remove(className));
  
  const handleSelectAlbum = (e, currentVinyl) => {
    const target = e.target;
    if (currentVinyl === target) {
      currentVinyl.classList.add("vinylClose");
      setTimeout(() => removeClassNames(currentVinyl, ["vinylUp", "vinylOpen", "vinylClose"]), 600);
      setCurrentVinyl(null);
      return
    } 

    if (currentVinyl) {
      currentVinyl.classList.add("vinylClose");
      setTimeout(() => removeClassNames(currentVinyl, ["vinylUp", "vinylOpen", "vinylClose"]), 600);
    }

    
    const runClose = target.classList.contains('vinylClose');
    if(runClose) return
    
    target.classList.add("vinylUp");
    setTimeout(() => target.classList.add("vinylOpen"), 500);
    setCurrentVinyl(target)
    console.log('olok')
    
  };

  return (
    <Container>
      {vinyls.map((vinyl, index) => {
        return (
          <VinylDiscDiv 
            onClick={(e) => handleSelectAlbum(e, currentVinyl)}
            key={`${index}`} 
            bottom={index * -50}>
            <div className='vinylDisc'>
              <img src={vinyl.image} />
              <img className='disco' src={discoImage}/>
            </div>
          </VinylDiscDiv>
        )
        })
      }
      { currentVinyl && (
        <button>Abrir este disco</button>
      )}
      <BoxDiscosImage src={boxImage} alt="box" />
    </Container>
  );
};

export default VinylStack;
