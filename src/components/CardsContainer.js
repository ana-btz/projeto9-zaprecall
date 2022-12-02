import Flashcard from "./Flashcard";

export default function CardsContainer() {
    const indexList = [1, 2, 3, 4]
    return (
        <>
            {indexList.map((index) =>
                <Flashcard
                    key={index}
                    index={index}
                />)}
        </>
    )
}