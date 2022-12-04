import styled from "styled-components";
import setaVirar from "../assets/img/seta_virar.png";

export default function OpenCard({ exibirContainerBotoes, tratarEscolha, question, answer, exibirResposta, vermelho, amarelo, verde, index }) {
    return (
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
                        color={vermelho}
                        onClick={() => tratarEscolha(index, vermelho)}>Não lembrei</Botao>
                    <Botao
                        data-test="partial-btn"
                        color={amarelo}
                        onClick={() => tratarEscolha(index, amarelo)}>Quase não lembrei</Botao>
                    <Botao
                        data-test="zap-btn"
                        color={verde}
                        onClick={() => tratarEscolha(index, verde)}>Zap!</Botao>
                </ContainerBotoes>
            )}
        </PerguntaAberta>
    );
}

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