import { useState } from "react"
import styled from "styled-components"
import setaPlay from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"

export default function Flashcard({ index, question, answer }) {
    const [exibirPerguntaFechada, setExibirPerguntaFechada] = useState(true);
    const [exibirPerguntaAberta, setExibirPerguntaAberta] = useState(false);
    const [exibirContainerBotoes, setExibirContainerBotoes] = useState(false);

    function exibirPergunta() {
        setExibirPerguntaFechada(false);
        setExibirPerguntaAberta(true);
    }

    // function exibirResposta() {
    //     setExibirContainerBotoes(true)
    // }

    return (
        <>
            {exibirPerguntaFechada && (
                <PerguntaFechada>
                    <p>Pergunta {index}</p>
                    <img
                        src={setaPlay}
                        alt="seta play"
                        onClick={exibirPergunta}
                    />
                </PerguntaFechada>
            )}
            {exibirPerguntaAberta && (
                <PerguntaAberta>
                    {!exibirContainerBotoes ? question : answer}
                    {!exibirContainerBotoes && (
                        <img
                            src={setaVirar}
                            alt="seta virar"
                        // onClick={exibirResposta}
                        />
                    )}
                    {exibirContainerBotoes && (
                        <ContainerBotoes>
                            <button>Não lembrei</button>
                            <button>Quase não lembrei</button>
                            <button>Zap!</button>
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
        color: #333333;
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
    }
`
/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
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
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        padding: 5px;
    }
`