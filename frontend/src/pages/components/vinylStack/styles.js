import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: -10px;
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
            &:not(.vinylUp) { // Faz o efeito de passar o mouse apenas nos que não tao up
                transform: rotateX(0deg) rotateY(-4deg) translateY(-5px);
                cursor: pointer;
            }
        }
    }

    .vinylDisc {
        transition: transform 0.8s;
        transform: rotateX(40deg) rotateY(-4deg);

        .disco {
            width: 450px;
            left: -70px;
            position: absolute;
            display: none;
        }
    }

    .vinylUp {
        transform: rotateX(0deg) rotateY(0deg) translateY(${props => -550+(props.bottom)}px) scale(1.25);
    }  

    .vinylOpen {
        .disco {
                display: inline;
                animation-name: MoveUpDisco;
                animation-duration: 1.5s;
                animation-fill-mode: forwards;
                z-index: -1;
            }
       
        @keyframes MoveUpDisco {
            0% {
            }
            100% {
                transform: translateX(160px) rotate(180deg);
                transform-origin: inherit;
            }
        }
    }

    .vinylClose {
        .disco {
                display: inline;
                animation-name: MoveDownDisco;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                z-index: -1;
            }
       
        @keyframes MoveDownDisco {
            0% {
                transform: translateX(160px) rotate(0deg);
            }
            100% {
                transform: translateX(0px) rotate(180deg);
                transform-origin: inherit;
            }
        }
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
