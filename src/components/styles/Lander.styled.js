import styled from "styled-components";

export const StyledLander = styled.div`
    color: snow;

    h1{
        font-size: 64px;
        font-weight: 200;
        color: snow;
        font-family: calibri;
    }
    .title-and-image{
        display: flex;
        margin:  75px 150px;
        // border: 2px solid white;
    }
    .lander-image{
        margin-left: 50px;
    }
    .lander-image>img{
        // width: 600px;
    }
    .lander-text{
        // border: 1px solid yellow;
    }
    .lander-para{
        font-family: sans-serif;
        font-weight: 500;
        font-size: 18px;
        text-align: justify;
        word-wrap: break-word;
        margin-bottom: 50px;
        
    }
    .building-btn{
        color: #ffa1a1;
        border: 3px solid #ffa1a1;
        border-radius: 2px;
        text-decoration: none;
        font-weight: 700;
        padding: 20px 40px;
        margin: 10px;
        font-family: sans-serif;
        background-color: transparent;
        transition: 0.4s;
    }
    .building-btn:hover{
        background-color: #ffa1a1;
        color: #2d2d2d;
    }
    .demo-btn{
        color: rgb(255,206,0);
        border: 3px solid rgb(255,206,0);
        border-radius: 2px;
        text-decoration: none;
        font-weight: 700;
        padding: 20px 40px;
        margin: 10px;
        font-family: sans-serif;
        background-color: transparent;
        transition: 0.4s;
    }
    
    .demo-btn:hover {
        background-color: rgb(255,206,0);
        color: #2d2d2d;
    }
`;
