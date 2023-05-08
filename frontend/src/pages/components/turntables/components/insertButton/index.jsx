import React, { useState } from "react";
import {Container} from './styles.js'

import { useVinylContext } from "../../../../../pages/context/context.jsx";

const InsertButton = () => {

    const {currentVinyl, handleChangeStatusCurrentVinyl} = useVinylContext();

    const handleInsertDisk = (target) => {
        handleChangeStatusCurrentVinyl({action: 'vinylInsertEject'});    
    }


    return (
        <Container onClick={(e) => handleInsertDisk(e)}>
            
            <p>Insert / Eject</p>
            <p>Disc</p>
        </Container>
    );
};

export default InsertButton;
