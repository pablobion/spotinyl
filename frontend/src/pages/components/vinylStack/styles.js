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


export const VinylDiscDiv = styled.div`
    position: absolute;
    bottom: ${props => props.bottom}px;


    &:hover { // Passar mouse na stack
        .vinylDisc {
            &:not(.animationDiscUp) { // Faz o efeito de passar o mouse apenas nos que não tao up
                transform: rotateX(0deg) rotateY(-4deg) translateY(-5px);
                cursor: pointer;
            }
        }
    }

    .vinylDisc {
        transition: transform 0.8s;
        transform: rotateX(40deg) rotateY(-4deg);
        border: 1px solid green;
    }

    .animationDiscUp {
        border: 1px solid red;
        transform: rotateX(0deg) rotateY(0deg) translateY(${props => -550+(props.bottom)}px) scale(1.3);
    }
`;




export const BoxDiscosImage = styled.img`
    filter: drop-shadow(0px 20px 20px rgba(rgb(48, 48, 48), 0.9));
    position: absolute;
    bottom: -20px;
    z-index: 2;
    width: 370px;
    left: 305px;
`;
