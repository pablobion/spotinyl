import styled from 'styled-components'

export const Main = styled.div`
  background-color: #232929;
  width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    background-color: #232929;
    width: 2000px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; //para nao ter scroll
    /* background-color: red; */
`;

export const DivVinylStack = styled.div`
    /* background-color: yellow; */
    height: 100vh;
    width: 50%;
`;

export const DivTurnTables = styled.div`
    /* background-color: blue; */
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
`;


