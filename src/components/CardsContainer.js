import Flashcard from "./Flashcard";
import deck from "../deck";
import { useState } from "react";

export default function CardsContainer({ count, setCount }) {
    const [respondidas, setRespondidas] = useState([]);

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

    return (
        <>
            {cardsList.map(({ index, question, answer }) =>
                <Flashcard
                    key={index}
                    index={index}
                    question={question}
                    answer={answer}
                    respondidas={respondidas}
                    setRespondidas={setRespondidas}
                    setCount={setCount}
                    count={count}
                />
            )}
        </>
    );
}