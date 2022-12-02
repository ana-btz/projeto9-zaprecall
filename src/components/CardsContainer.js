import Flashcard from "./Flashcard";
import deck from "../deck"
import { useState } from "react";

export default function CardsContainer() {

    //Código para ordenar o deck de forma aletória
    for (let i = 0; i < deck.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log(deck);

    //gerar um Array com 4 itens do deck
    const cardsList = [];

    for (let i = 1; i < 5; i++) {
        cardsList.push({ id: i, question: deck[i].question, answer: deck[i].answer });
    }
    console.log(cardsList);

    return (
        <>
            {cardsList.map(({ id, question, answer }) =>
                <Flashcard
                    key={id}
                    index={id}
                    question={question}
                    answer={answer}
                />
            )}
        </>
    )
}