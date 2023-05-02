import styled from 'styled-components'

export const VinylDisc = styled.div`
    position: absolute;
    bottom: ${props => props.bottom}px;
    border: 1px solid  ${props => props.inputColor || "palevioletred"};
    transform: scale(1.3);

    transition: transform 0.8s;
    &:hover {
        transform: translateY(-180px) scale(1.3);
        cursor: pointer;
    }

    &:active {
        transform: translateY(-500px) scale(1.3);
    }
`;

export const Vinylls = styled.div`
    position: absolute;
    bottom: 150px;
    border: 1px solid red;
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;

    align-items: center;
`;

