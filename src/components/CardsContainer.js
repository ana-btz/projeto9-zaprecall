import Flashcard from "./Flashcard";
import { useState } from "react";

export default function CardsContainer({ count, setCount, flashcards }) {
    const [respondidas, setRespondidas] = useState([]);

    return (
        <>
            {flashcards.map(({ index, question, answer }) =>
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