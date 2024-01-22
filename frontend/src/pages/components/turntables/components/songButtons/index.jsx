import React, { useState } from "react";
import {Container} from './styles.js'


const songButtons = ({handleChangeMusic}) => {



    return (
        <Container>
             <button onClick={() => handleChangeMusic('previous')} className='button'>{'<<'}</button>
             <button onClick={() => handleChangeMusic('next')} className='button'>{'>>'}</button>
        </Container>
    );
};

export default songButtons;
