import React from "react";
import { StyledFooter } from "./footer-styled";

function Footer() {
    return (
        <StyledFooter>
            <div className="button-container">
                <button className="button-1">Linkedin</button>
                <button className="button-2">Github</button>
                <button className="button-3">Contato</button>
            </div>
            <div>
            </div>
        </StyledFooter>
    );
}

export default Footer;