import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const name = "Heisenberg";

  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>OLÁ</h1>
      <Frase />
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem"></img>
      <SayMyName nome="Heisenberg" />
      <HelloWorld />
      <Pessoa
        nome="Dérick"
        idade="28"
        profissao="vagabundo"
        foto="https://via.placeholder.com/50"
      />
      <List />
    </div>
  );
}

export default App;
