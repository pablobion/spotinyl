import React, { useState } from "react";
import { Container, TurnTablesDeisgn } from "./styles.js";

import Anchor from "./components/anchor/index";
import PlayButton from "./components/playButton/index";
import InsertButton from "./components/insertButton/index";
import VolumeSlider from "./components/volume/index";
import SongButtons from "./components/songButtons/index";

import { useVinylContext } from "../../../pages/context/context.jsx";

const TurnTables = () => {
    const { playing, setPlaying, handleChangeStatusCurrentVinyl, currentVinylStatus, handleChangeMusicCurrentVinyl, handleChangeVolume } = useVinylContext();

    const handlePlay = () => {
        handleChangeStatusCurrentVinyl({ action: "vinylRotate" });
    };

    const handleChangeMusic = (mode) => {
        handleChangeMusicCurrentVinyl(mode)
    }

    const changeVolume = (volume) => {
        handleChangeVolume(volume)
    }

    return (
        <Container>
            <TurnTablesDeisgn playingColor={playing ? "lime" : "red"}>
                <div id="left">
                    <div id="left-master-buttons">
                        <InsertButton />
                        <PlayButton isPlaying={playing} handlePlay={handlePlay} />
                    </div>
                    <VolumeSlider changeVolume={changeVolume} />
                </div>

                <div id="right">
                    <div id="anchor">
                        <Anchor isPlaying={playing} />
                    </div>
                    <SongButtons handleChangeMusic={handleChangeMusic} />
                </div>
            </TurnTablesDeisgn>
        </Container>
    );
};

export default TurnTables;
