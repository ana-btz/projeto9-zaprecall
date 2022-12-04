import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";

export default function CloseCard({ status, textColor, index, iconTest, icon, exibirPergunta, cinza }) {
    return (
        <PerguntaFechada data-test="flashcard" status={status} textColor={textColor} color={cinza} >
            <p data-test="flashcard-text">Pergunta {index}</p>
            <img
                data-test={iconTest}
                src={!status ? setaPlay : icon}
                alt="seta play"
                onClick={() => exibirPergunta(index)}
            />
        </PerguntaFechada>
    );
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
        color: ${props => !props.status ? props.cinza : props.textColor};
        text-decoration: ${props => !props.status ? "" : "line-through"};
    }
    img:hover {
        cursor: pointer;
    }
            
`