import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E7E7E7;
        --blue-light: #90CAF9;
        --blue-dark: #0080E4;
        --red: #E02041;
        --green: #04D361;
        --white: #fff;
        --black-dark: #4C4C4C;
        --black-light: #E6E6F0;


        --text-title: #1D1D1D;
        --text-dashboard: #13131A;
        --text-component: #A8A8B3;
        --component-shape: #4C4C4C;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) { //when it's less than 1080px  
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {//when it less than 720px
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

`