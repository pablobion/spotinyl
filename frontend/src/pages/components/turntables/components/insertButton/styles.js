import styled from 'styled-components'



export const Container = styled.button`

        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: 1px solid black;

        background-image: linear-gradient(to top, #212121 , #111111);
        box-shadow: 0px 0px 5px 0px black;
        cursor: pointer;

        p {
            color: gray;
            font-size: 14px;
        }
        
        &:active {
            box-shadow: 0px 0px 5px 0px black inset;
        }
`