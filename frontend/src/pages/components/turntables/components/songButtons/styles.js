import styled from 'styled-components'



export const Container = styled.div`

    width: 120px;
    display: flex;
    justify-content: space-between;



    .button {
        width: 50px;
        background-image: linear-gradient(to bottom, #212121 , #111111);
        box-shadow: 0px 0px 5px 0px black;
        border: 1px solid black;
        cursor: pointer;

        &:active {
            box-shadow: 0px 0px 5px 0px black inset;
        }
    }
`