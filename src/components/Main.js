import styled from "styled-components";
import CardsContainer from "./CardsContainer";
import Footer from "./Footer";
import logo from "../assets/img/logo.png";
import { useState } from "react";

export default function Main({ flashcards }) {
    const [count, setCount] = useState(0);

    return (
        <ScreenContainer>
            <LogoContainer >
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
            </LogoContainer>
            <CardsContainer count={count} setCount={setCount} flashcards={flashcards} />
            <Footer count={count} />
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 100px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`