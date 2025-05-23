import styled from 'styled-components'

export const Container = styled.div`

    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 50;

    

    #circleBase {
        position: absolute;
        top: 10px;
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
        top: 25px;
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
        height: 270px;
        z-index: 1;
        transform-origin: 50% 0%;

        transform: ${props => props.isPlaying ? 'rotate(35deg)' : 'rotate(0deg)'};
        transition: transform 0.6s;

       ${props => props.isPlaying ? `
            animation: mymove 2s linear infinite;
            animation-delay: 1.5s;
            @keyframes mymove {
                0% {transform: rotate(34deg);}
                50% {transform: rotate(38deg);}
                100% {transform: rotate(34deg);}
            }
        ` : `transform: rotate(0deg);`}

        /* ${props => !props.isPlaying && `transform: rotate(0deg);`} */

       
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
        width: 140%;
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