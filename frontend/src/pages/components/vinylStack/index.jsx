import React, { useState, useRef } from "react";

import { VinylDiscDiv, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'
import discoImage from '../../../assets/disco.png'

import VinylComponent from '../vinyl/index.jsx'

import { useVinylContext } from "../../../pages/context/context.jsx";

const VinylStack = () => {

  const {currentVinyl, playing, handleChangeStatusCurrentVinyl, vinylList} = useVinylContext();

  const handleSelectAlbum = (e, currentVinyl) => {
    const element = e.target;
    return currentVinyl === element 
      ? handleChangeStatusCurrentVinyl({element, action: 'vinylDown'}) 
      : handleChangeStatusCurrentVinyl({element, action: 'vinylUp'});
  };

  return (
    <Container>
      <button onClick={() => console.log(vinylList)}>apesar de querer</button>
      {vinylList.map((vinyl, index) => {
        return (
          <VinylDiscDiv 
            onClick={(e) => handleSelectAlbum(e, currentVinyl)}
            key={`${index}`} 
            bottom={index * 30}
            index={50 - index}
            playing={playing}
            >
            <div className='vinylDisc'>
              <img src={vinyl?.image} />
              
                <VinylComponent customClass="disco" image={vinyl?.image} />

              {/* <img className='disco' style={{ width: 400}} src={discoImage} onClick={() => alert('oie')}/> */}
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
