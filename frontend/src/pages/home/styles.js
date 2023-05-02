import styled from 'styled-components'

export const Container = styled.div`
    background-color: #232929;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DivVinylStack = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10vw;
`;

export const DivTurnTables = styled.div`
    position: absolute;
    left: 40vw;
    bottom: 40vh;

`;

export const BoxDiscosImage = styled.img`
    filter: drop-shadow(0px 20px 20px rgba(rgb(48, 48, 48), 0.9));
    position: absolute;
    bottom: 10px;
    z-index: 2;
    width: 480px;
    left: 10vw;
`;


