import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;


export const VinylDiscDiv = styled.div`
    position: absolute;
    bottom: ${props => props.bottom}px;
    z-index: ${props => props.index};

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
        cursor: pointer;

        .disco {
            width: 450px;
            left: -70px;
            position: absolute;
            display: none;
        }
    }

    .vinylUp {
        transform: translateY(${props => -550+(props.bottom)}px) translateX(2) scale(1.25);
    }  

    .vinylOpen {
        .disco {
                display: inline;
                animation: MoveUpDisco 1.5s forwards;
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

    .vinylDown {
        .disco {
                display: inline;
                animation: MoveDownDisco 1s forwards;
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



    .vinylInsert {
        .disco {
            animation: insertDiscoAnimation 1s forwards;

            @keyframes insertDiscoAnimation {
                0% {
                    transform: rotate(-180deg);
                }
                100% {
                    left: 730px;
                }
            }
        }
    }

    .vinylEject {
        .disco {
            animation-name: ejectDiscoAnimation;
            animation-duration: 1.5s;
            animation-fill-mode: forwards;
        }

        @keyframes ejectDiscoAnimation {
            0% {
                left: 730px;
            }
            100% {
                transform: rotate(180deg);
                transform-origin: inherit;
            }
        }
    }

    .vinylRotate {
        .disco {
         
            left: 730px;
            ${props => props.playing && `
             animation: rotate 4s linear infinite;
            `}
            
              @keyframes rotate {
                0% {
                    left: 730px;
                }
                100% {
                   
                    transform: rotate(1turn);
                }
            }
            
          
        }

    }

  
`;




export const BoxDiscosImage = styled.img`
    filter: drop-shadow(0px 20px 20px rgba(rgb(48, 48, 48), 0.9));
    position: absolute;
    bottom: -20px;
    z-index: 60;
    width: 370px;
    left: 305px;
`;
