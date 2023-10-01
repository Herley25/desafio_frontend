import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #CEFD56;
        text-rendering: optimizeLegibility;
    }
    
    html, border-style, #root {
        height: 100%;
    }
`;