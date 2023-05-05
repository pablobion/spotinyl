import React, { useState } from "react";
import {Container} from './styles.js'

import { useVinylContext } from "../../../../../pages/context/context.jsx";

const InsertButton = () => {

    const {currentVinyl} = useVinylContext();

    const handleInsertDisk = () => {
        currentVinyl.classList.add("vinylInsert")
    }


    return (
        <Container onClick={() => handleInsertDisk()}>
            
            <p>Insert / Eject</p>
            <p>Disc</p>
        </Container>
    );
};

export default InsertButton;
