import styled from 'styled-components'



export const Container = styled.div`
       display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;

        input {
            width: 400px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            border: none;
            margin-right: 20px;
            padding-left: 10px;
            &:focus {
                outline: none;
            
            }
        }

        button {
            width: 100px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            border: none;   
            cursor: pointer;
            &:hover {
                background-color: rgba(255, 255, 255, 0.4);
            }
            &:active {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
`