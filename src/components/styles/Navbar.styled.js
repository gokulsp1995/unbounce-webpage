import styled from "styled-components";

export const StyledNavbar = styled.div`
    // background-color: red;
    font-family: roboto;
    margin-left: 120px;
    button{
        background-color: #2d2d2d;
        color: snow;
        cursor: pointer;
    }
    .each-top-button{
        width: 100px;
        padding: 20px;
        margin: 10px;
        font-weight: 500;
        font-size: 16px;
        border: none;
    }
    .each-top-button:hover{
        border-bottom: 1px solid snow;
    }
    img{
        width: 150px;
        margin: 15px;
    }
    .image-button{
        display: flex;
        flex-direction:row;
        justify-content: space-around;;
        align-items: center;
    }
    .lander-image{
        width: 500px;
    }
    .log-in, .trial-button{
        padding: 13px 19px;
        margin: 5px;
        font-size: 16px;
        font-weight: 600;
    }
    .log-in:hover, .trial-button:hover{
        background-color: gray;
        border: 2px solid gray;
        transition: 0.4s;
        padding: 13px 19px;
        margin: 5px;
        font-size: 16px;
        font-weight: 600;
    }
    .log-in {
        background-color: #2d2d2d;
        color: snow;
        border: 2px solid snow;
    }
    .trial-button{
            background-color: snow;
            color: #2d2d2d;
            border: border: 2px solid snow;
     }
     .trial-button:hover{
        color: snow;
     }
`;