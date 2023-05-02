import styled from 'styled-components'

export const Container = styled.div`

    width: 100px;
    height: 100px;
    position: absolute;
    right: 70px;
    top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    #circleBase {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 3px solid smoke;
        box-shadow: 0px 0px 10px 0px black inset;
        background: radial-gradient(#111111, #494949);
        outline:solid 4px #494949;
        outline-offset:-10px;   
    }


    .bottom {
        position: absolute;
        top: 15%;
        right: 15%;
        width: 70px;
        height: 70px;
        background: rgb(173, 173, 173);
        border-radius: 40px;
        box-shadow: 0px 0px 3px black;
    }

    .arm {
        position: absolute;
        top: 40%;
        right: 40%;
        width: 20px;
        height: 350px;

        transform-origin: 50% 0%;
        transform: ${props => props.isPlaying ? 'rotate(25.5deg)' : 'rotate(0deg)'};
        transition: transform 0.6s;
    }

    .body {
    position: absolute;
    top: 8%;
    right: 4%;
    width: 100%;
    height: 90%;
    background-color: rgb(173, 173, 173);
    border-radius: 5px;
    box-shadow: 0px 4px 3px black;
    transform: rotate(0deg);
    transition: transform 0.6s;
    }

    .body_play {
    transform-origin: 50% 0%;
    animation: bodyMove 2s infinite;
    }

    .head {
    position: absolute;
    bottom: -10%;
    right: 0%;
    margin: auto;
    width: 180%;
    height: 20%;
    background-color: rgb(124, 124, 124);
    border-radius: 3px;
    box-shadow: 0px 0px 3px black;
    border-top-right-radius: 28px;

    transform: rotate(35deg);
    transition: transform 0.6s;
    }

    .head::before {
    content: "";
    width: 40%;
    height: 20%;
    background: rgb(95, 95, 95);
    position: absolute;
    box-shadow: 0px 0px 3px black;
    top: 25%;
    left: 28%;
    border-radius: 50px;
    }

    .head_play {
    transform: rotate(45deg);
    transition: transform 0.3s;
    animation: move 1s infinite;
    animation: headMove 2s infinite;
    }



`;