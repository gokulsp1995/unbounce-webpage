import React from "react";
import { StyledLander } from "./styles/Lander.styled";
const Lander = () => {
    return(
        <>
            <StyledLander>
                <div className="title-and-image">
                    <div className="lander-text">
                        <h1>Convert 30% more with high-performing landing pages</h1>
                        <p className="lander-para">With Unbounce’s AI-powered landing page creation and optimization platform, you can build higher-converting campaigns that’ll help you scale your marketing without limits.</p>
                        <div>
                            <a href="/pricing/" target="" class="building-btn  btn">Start building for free</a>
                            <a href="/concierge/" target="" class="demo-btn  btn">Request a demo</a>
                        </div>
                    </div>
                    <div className="lander-image">
                        <img className="lander-image" src="https://unbounce.com/photos/New-banner_2x_cropped_top-mobile.png"/>
                    </div>
                </div>
            </StyledLander>
        </>
    )
}
export default Lander;