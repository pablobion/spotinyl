import React, { useState, useRef } from "react";

import { VinylDiscDiv, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'
import discoImage from '../../../assets/disco.png'

import VinylComponent from '../vinyl/index.jsx'

import { useVinylContext } from "../../../pages/context/context.jsx";

const VinylStack = () => {

  const {currentVinyl, playing, handleChangeStatusCurrentVinyl, vinylList} = useVinylContext();

  const handleSelectAlbum = (e, uri) => {
    const element = e.target;
    console.log('sleected album', uri)

    return currentVinyl === element 
      ? handleChangeStatusCurrentVinyl({element, action: 'vinylDown'}) 
      : handleChangeStatusCurrentVinyl({element, action: 'vinylUp', uri, porra: 'lala'});
  };

  return (
    <Container>
      {vinylList.map((vinyl, index) => {
        return (
          <VinylDiscDiv 
            onClick={(e) => handleSelectAlbum(e, vinyl?.uri)}
            key={`${index}`} 
            bottom={index * 30}
            index={50 - index}
            playing={playing}
            >
            <div className='vinylDisc' value={vinyl?.uri}>
              <img src={vinyl?.image} />
                <VinylComponent customClass="disco" image={vinyl?.image} />
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
