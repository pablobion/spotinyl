import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: -10px;
    border: 1px solid red;
    width: 1000px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
`;


export const VinylDisc = styled.div`
    position: absolute;
    bottom: ${props => props.bottom}px;
    box-shadow: 0px 0px 2px 0px #494949;
    transform: scale(1.3);

    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateX(20deg) rotateY(-5deg);

    &:hover {
        transform: translateY(-20px) rotateY(0deg);
        cursor: pointer;
    }

    .animationDiscUp {
        box-shadow: 0px 0px 20px 0px gray;
        transition: transform 0.8s;
        
        transform: translateY(-450px);
    }
    .animationDiscDown {
        transition: transform 0.8s;
        transform: translateY(0px);
    }
`;




export const BoxDiscosImage = styled.img`
    filter: drop-shadow(0px 20px 20px rgba(rgb(48, 48, 48), 0.9));
    position: absolute;
    bottom: -20px;
    z-index: 2;
    width: 370px;
    left: 16vw;
`;
