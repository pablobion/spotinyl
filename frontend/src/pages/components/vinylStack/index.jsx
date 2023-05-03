import React, { useState } from "react";

import { VinylDisc, Container, BoxDiscosImage } from './styles'

import boxImage from '../../../assets/box.png'

const VinylStack = ({ vinyls }) => {
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [translateY, setTranslateY] = useState(0);

  const [teste, setTeste] = useState(0);

  const handleMouseDown = (e) => {
    // setDragging(true);
    // setDragStart(e.clientY);
    // console.log('apertou o mouse')
    // console.log(e.clientY)
    const element = e.target.childNodes[0];
    console.log(element)
    element.classList.add("animationDiscUp")
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

  const handleMouseUp = (e) => {
    const element = e.target.childNodes[0];
    console.log(element)
    element.classList.remove("animationDiscUp")
    element.classList.add("animationDiscDown")
    setTimeout(() => {
      element.classList.remove("animationDiscDown")
    }, 500)

  };

  return (
    <Container
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
    >
      {vinyls.map((vinyl, index) => {
        return (
          
          <VinylDisc 
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
           key={`${index}`} index={index} bottom={index * -50}>
            <img  src={vinyl.image} />
          </VinylDisc>
        )
        })
      }
      <BoxDiscosImage src={boxImage} alt="box" />
    </Container>
  );
};

export default VinylStack;
