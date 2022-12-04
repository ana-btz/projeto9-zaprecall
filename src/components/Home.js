import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Home({ setExibirTelaInicial, setExibirMain }) {
    function startRecall() {
        setExibirTelaInicial(false);
        setExibirMain(true);
    }

    return (
        <ScreenContainer>
            <LogoContainer >
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
                <button onClick={startRecall}>Iniciar Recall!</button>
            </LogoContainer>
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
`

const LogoContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 136px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-top: 13px;
        margin-bottom: 30px;
    }
    button {
        width: 246px;
        height: 54px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
        font-family: 'Recursive';
        border: 1px solid #D70900;
        &:hover {
            cursor: pointer;
        }
    }
`