import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 500px;
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
                transform: translateY(-100px) translateX(50px) rotate(360deg);
                cursor: pointer;
            }
        }
    }

    .vinylDisc {
        transition: transform 0.8s;
        transform: rotateX(10deg) skewY(-7deg);
        transform-origin: 100% -30%;
        cursor: pointer;

        .disco {
            left: 30px;
            top: 30px;
            position: absolute;
            display: none;
        }
    }

    .vinylUp {
        transform: rotateX(0deg) rotateY(0deg) translateY(${props => -590+(props.bottom)}px) translateX(500px) scale(1.25);
    }  

    .vinylOpen {

        .disco {
                display: inline;
                animation: MoveUpDisco 1.3s forwards;
                z-index: -1;
            }
       
        @keyframes MoveUpDisco {
            0% {
            }
            100% {
                transform: translateX(160px) rotate(370deg);
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
            }
        }
    }



    .vinylInsert {
        .disco {
            animation: insertDiscoAnimation 1s forwards;

            @keyframes insertDiscoAnimation {
                0% {
                    transform: rotate(-180deg);
                    left: 70px;
                }
                100% {
                    left: 670px;
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
                left: 670px;
            }
            100% {
                transform: rotate(180deg);
                left: 70px;
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
                    left: 670px;
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
    z-index: 51;
    width: 370px;
    left: 55px;
`;