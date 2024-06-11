import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 11px;
    margin: 0 3px;
    border: none;
    border-radius: 90px;
    background-color: #B8B08D;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    
    
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }



    flex: ${ ({ percentual }) => percentual > 1 || percentual === 0 ? percentual : 1 };
`