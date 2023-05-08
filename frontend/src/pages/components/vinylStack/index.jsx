import React, { useState, useRef } from "react";

import { VinylDiscDiv, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'
import discoImage from '../../../assets/disco.png'

import { useVinylContext } from "../../../pages/context/context.jsx";

const VinylStack = ({ vinyls }) => {

  const {currentVinyl, playing, handleChangeStatusCurrentVinyl} = useVinylContext();

  const handleSelectAlbum = (e, currentVinyl) => {
    const element = e.target;
    return currentVinyl === element 
      ? handleChangeStatusCurrentVinyl({element, action: 'vinylDown'}) 
      : handleChangeStatusCurrentVinyl({element, action: 'vinylUp'});
  };

  return (
    <Container>
      {vinyls.map((vinyl, index) => {
        return (
          <VinylDiscDiv 
            onClick={(e) => handleSelectAlbum(e, currentVinyl)}
            key={`${index}`} 
            bottom={index * -50}
            playing={playing}
            >
            <div className='vinylDisc'>
              <img src={vinyl.image} />
              <img className='disco' src={discoImage} onClick={() => alert('oie')}/>
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
