import styled from 'styled-components'

export const ButtonAdd = styled.button`
    background-color: #E6B009;
    color: black;
    font-size: 1.6em;
    font-weight: bold;
    border: 4px solid #fff;
    margin: 1em;
    width: 25.5vw;
    cursor: pointer;

    &: hover {
        border-color: black;
    }
`;

export const ButtonEdit = styled.button`
    background-color: blue;
    color: white;
    font-size: .6em;
    font-weight: 600;
    border: 3px solid #fff;
    margin: .5em;
    width: 5em;
    cursor: pointer;    

    &: hover {
        border-color: black;
    }
`;

export const ButtonDelete = styled.button`
    background-color: red;
    color: white;
    font-size: .6em;
    font-weight: 600;
    border: 3px solid #fff;
    margin: .5em;
    width: 5em;
    cursor: pointer;

    &: hover {
        border-color: black;
    }
`;