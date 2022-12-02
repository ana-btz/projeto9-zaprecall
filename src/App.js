import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
      </div>
      <div>
        <div className="pergunta-fechada">
          <p>Pergunta 1</p>
        </div>
        <div className="pergunta-fechada">
          <p>Pergunta 2</p>
        </div>
        <div className="pergunta-fechada">
          <p>Pergunta 3</p>
        </div>
        <div className="pergunta-fechada">
          <p>Pergunta 4</p>
        </div>
      </div>
      <div className="footer-concluidos">
        0/4 CONCLUÍDOS
      </div>
    </div>
  );
}

export default App;
