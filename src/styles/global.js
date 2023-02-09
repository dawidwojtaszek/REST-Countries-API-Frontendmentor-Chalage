import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: ${({ theme }) => theme.colors.background};
        color:${({ theme }) => theme.colors.color};
        font-family: 'Nunito Sans', sans-serif;
    }
`;
