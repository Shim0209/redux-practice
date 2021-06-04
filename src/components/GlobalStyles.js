import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    div {
        border: 2px solid black;
        padding: 5px;
        margin: 5px;
    }
`;

export default globalStyles;