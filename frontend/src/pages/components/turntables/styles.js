import styled from 'styled-components'



export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const TurnTablesDeisgn = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    width: 700px;
    height: 450px;
    background-image: linear-gradient(to left, #2E2D2D , #111111);
    border: 5px solid black;
    border-radius: 10px;
    box-shadow: 0px 5px 30px 5px #494949;

    #left {
        border: 1px solid;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }

    #right {
        border: 1px solid;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
        width: 105px;
    }
`;