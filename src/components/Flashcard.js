import { useState } from "react"
import styled from "styled-components"
import setaPlay from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeQuase from "../assets/img/icone_quase.png"

export default function Flashcard({ index, question, answer, respondidas, setRespondidas, count, setCount }) {
    const [exibirPerguntaFechada, setExibirPerguntaFechada] = useState(true);
    const [exibirPerguntaAberta, setExibirPerguntaAberta] = useState(false);
    const [exibirContainerBotoes, setExibirContainerBotoes] = useState(false);
    const [status, setStatus] = useState(false);
    const [textColor, setTextColor] = useState("");
    const [icon, setIcon] = useState("");
    const [iconTest, setIconTest] = useState("play-btn");

    function exibirPergunta(index) {
        if (!respondidas.includes(index)) {
            setExibirPerguntaFechada(false);
            setExibirPerguntaAberta(true);
        }
    }

    function exibirResposta() {
        setExibirContainerBotoes(true);
    }

    function tratarEscolha(index, color) {
        setExibirContainerBotoes(false);
        setExibirPerguntaAberta(false);
        setExibirPerguntaFechada(true);
        setTextColor(color);
        setStatus(true);

        const listaRespondidas = [...respondidas, index];
        setRespondidas(listaRespondidas);

        const answeredQuestions = count + 1;
        setCount(answeredQuestions)

        if (color === VERDE) {
            setIcon(iconeCerto);
            setIconTest("zap-icon");
        }
        if (color === AMARELO) {
            setIcon(iconeQuase);
            setIconTest("partial-icon");
        }
        if (color === VERMELHO) {
            setIcon(iconeErro);
            setIconTest("no-icon");
        }


    }

    return (
        <>
            {exibirPerguntaFechada && (
                <PerguntaFechada data-test="flashcard" status={status} textColor={textColor} >
                    <p data-test="flashcard-text">Pergunta {index}</p>
                    <img
                        data-test={iconTest}
                        src={!status ? setaPlay : icon}
                        alt="seta play"
                        onClick={() => exibirPergunta(index)}
                    />
                </PerguntaFechada>
            )}
            {exibirPerguntaAberta && (
                <PerguntaAberta data-test="flashcard" >
                    <div data-test="flashcard-text">
                        {!exibirContainerBotoes ? question : answer}
                    </div>
                    {!exibirContainerBotoes && (
                        <img
                            data-test="turn-btn"
                            src={setaVirar}
                            alt="seta virar"
                            onClick={exibirResposta}
                        />
                    )}
                    {exibirContainerBotoes && (
                        <ContainerBotoes>
                            <Botao
                                data-test="no-btn"
                                color={VERMELHO}
                                onClick={() => tratarEscolha(index, VERMELHO)}>Não lembrei</Botao>
                            <Botao
                                data-test="partial-btn"
                                color={AMARELO}
                                onClick={() => tratarEscolha(index, AMARELO)}>Quase não lembrei</Botao>
                            <Botao
                                data-test="zap-btn"
                                color={VERDE}
                                onClick={() => tratarEscolha(index, VERDE)}>Zap!</Botao>
                        </ContainerBotoes>
                    )}
                </PerguntaAberta>
            )}
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => !props.status ? CINZA : props.textColor};
        text-decoration: ${props => !props.status ? "" : "line-through"};
    }
    img:hover {
        cursor: pointer;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
        &:hover {
            cursor: pointer;
        }
    }
`
/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/

const
    VERDE = "#2FBE34",
    AMARELO = "#FF922E",
    VERMELHO = "#FF3030",
    CINZA = "#333333";

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
`
const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding: 5px;
    background: ${props => props.color};
    &:hover {
        cursor: pointer;
    }
`