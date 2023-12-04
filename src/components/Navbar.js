import React from "react"
import { StyledNavbar } from "./styles/Navbar.styled";

const Navbar = () => {
    const buttons = ["Products", "Solutions", "Pricing", "Learn", "Contact"];
    return(
        <>
            <StyledNavbar>
                <div className="image-button">
                    <img className="unbounce-image" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1"/>
                    <div className="buttons-on-top">
                        {buttons.map((buttonText, index) => (
                            <>
                                <button className="each-top-button" key={index}>{buttonText}</button>
                            </>
                        ))}
                    </div>
                    <div>
                        <div>
                            <button className="log-in">Log In</button>
                            <button className="trial-button">Start My Free Trial</button>
                        </div>
                    </div>
                </div>
                
            </StyledNavbar>
        </>
    )
}

export default Navbar;