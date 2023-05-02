import React, { useState } from "react";

import { VinylDisc, Vinylls } from './styles'

const VinylStack = ({ vinyls }) => {
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [translateY, setTranslateY] = useState(0);

  const [teste, setTeste] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart(e.clientY);
    console.log('apertou o mouse')
    console.log(e.clientY)
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      console.log('movendo')
      const diff = e.clientY - dragStart;
      console.log(diff)
      setTranslateY((prev) => prev + diff);
      setDragStart(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    console.log('soltou o mouse')
  };

  const clickOnVinyl = (index) =>{
    setTeste(index)
  }



  return (
    <Vinylls
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {vinyls.map((vinyl, index) => {
        return (
          <VinylDisc onClick={() => clickOnVinyl(index)} key={index} inputColor="rebeccapurple" bottom={index * -50}>
            <img src={vinyl.image} />
          </VinylDisc>
        )
        })
      }
    </Vinylls>
  );
};

export default VinylStack;
