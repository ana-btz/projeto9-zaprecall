import styled from "styled-components";
import logo from "../assets/img/logo.png";
import deck from "../deck";

export default function Home({ setExibirTelaInicial, setExibirMain, setFlashcards }) {
    function startRecall() {
        cardsRandomize();
        setExibirMain(true);
        setExibirTelaInicial(false);
    }

    function cardsRandomize() {
        //Código para ordenar o deck de forma aletória
        for (let i = 0; i < deck.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        //gerar um Array com 8 itens do deck
        const cardsList = [];
        const numberOfCards = 8;
        let index = 1;

        for (let i = 0; i < numberOfCards; i++) {
            cardsList.push({ index: index, question: deck[i].question, answer: deck[i].answer });
            index++;
        }
        console.log(cardsList);

        setFlashcards(cardsList);
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