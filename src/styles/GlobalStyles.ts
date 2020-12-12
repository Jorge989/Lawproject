import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height:100%;
}
*,button, input{
    border:0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

}
html {
    background: var(--primary);

}
:root {
--bluebtn: #2A2AFC;
--blackbtn: #262626;
--white: #FFFFFF;
--primary: #F6F6F6;
    --footer: #DBDBDB; 


}
`;
