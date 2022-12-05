import GlobalStyle from "./styles/GlobalStyles";
import { useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";

function App() {
  const
    [exibirTelaInicial, setExibirTelaInicial] = useState(true),
    [exibirMain, setExibirMain] = useState(false),
    [flashcards, setFlashcards] = useState([]);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      {exibirTelaInicial && (
        <Home
          setExibirTelaInicial={setExibirTelaInicial}
          setExibirMain={setExibirMain}
          setFlashcards={setFlashcards} />
      )}
      {exibirMain && (
        <Main flashcards={flashcards} />
      )}
    </>
  );
}

export default App;
