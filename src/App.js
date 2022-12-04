import GlobalStyle from "./styles/GlobalStyles";
import { useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";

function App() {
  const
    [exibirTelaInicial, setExibirTelaInicial] = useState(true),
    [exibirMain, setExibirMain] = useState(false);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      {exibirTelaInicial && (
        <Home setExibirTelaInicial={setExibirTelaInicial} setExibirMain={setExibirMain} />
      )}
      {exibirMain && (
        <Main />
      )}
    </>
  );
}

export default App;
