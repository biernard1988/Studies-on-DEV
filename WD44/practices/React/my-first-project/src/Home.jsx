import { useRef, useState } from "react";

//React hooks
//useRef
//useState / estado = é uma variavel, que, toda vez que troca de valor a tela irá recarregar os valores
function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    setProdutos([inputRef.current.value, ...produtos]);
    
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input placeholder="produto..." ref={inputRef} />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      {produtos.map((produto) => {
        <div key={}>{produto}</div>;
      })}
    </div>
  );
}

export default Home;
