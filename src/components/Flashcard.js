import { useState } from "react";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";
import CloseCard from "./CloseCard";
import OpenCard from "./OpenCard";

export default function Flashcard({ index, question, answer, respondidas, setRespondidas, count, setCount }) {
    const
        [exibirPerguntaFechada, setExibirPerguntaFechada] = useState(true),
        [exibirPerguntaAberta, setExibirPerguntaAberta] = useState(false),
        [exibirContainerBotoes, setExibirContainerBotoes] = useState(false),
        [iconTest, setIconTest] = useState("play-btn"),
        [textColor, setTextColor] = useState(""),
        [status, setStatus] = useState(false),
        [icon, setIcon] = useState("");

    const
        VERDE = "#2FBE34",
        AMARELO = "#FF922E",
        VERMELHO = "#FF3030",
        CINZA = "#333333";

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
        setCount(answeredQuestions);

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
                <CloseCard
                    status={status}
                    textColor={textColor}
                    index={index}
                    iconTest={iconTest}
                    icon={icon}
                    exibirPergunta={exibirPergunta}
                    cinza={CINZA}
                />
            )}
            {exibirPerguntaAberta && (
                <OpenCard
                    exibirContainerBotoes={exibirContainerBotoes}
                    question={question}
                    answer={answer}
                    exibirResposta={exibirResposta}
                    tratarEscolha={tratarEscolha}
                    vermelho={VERMELHO}
                    amarelo={AMARELO}
                    verde={VERDE}
                    index={index}
                />
            )}
        </>
    );
}
