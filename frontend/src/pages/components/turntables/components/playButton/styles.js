import styled from 'styled-components'



export const Container = styled.div`
    #playButton{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid black;
        background-image: linear-gradient(to bottom, #212121 , #111111);
        box-shadow: 0px 0px 5px 0px black;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 30px;
        padding: 10px;
        position: absolute;
        bottom: 10px;
        cursor: pointer;

        &:active {
            box-shadow: 0px 0px 5px 0px black inset;
        }

        #playerButtonLed{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: ${props => props.playingColor};
            box-shadow: ${props => props.playingColor === 'lime' ? '0px 0px 10px 0px lime' : '0px 0px 10px 0px black inset'}
        }

        p {
            font-size: 15px;
            color: gray;
        }
    }
`;