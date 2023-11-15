// Importando os módulos necessários do React e o hook personalizado useContentful
import { useState, useEffect } from "react";
import useContentful from "./hooks/useContentful";
import "./App.css";

// Definindo o componente App
function App() {
  // Definindo o estado inicial para a variável "guitar" usando o useState
  const [guitar, setGuitar] = useState([]);

  // Chamando a função getData do hook useContentful
  const { getData } = useContentful();

  // Usando o useEffect para buscar os dados assim que o componente é montado
  useEffect(() => {
    getData()
      .then((data) => {
        // Atualizando o estado "guitar" com os dados recebidos
        setGuitar(data);
        console.log(data); // Exibindo os dados no console
      })
      .catch((error) => {
        console.log(error); // Lidando com erros, se houver
      });
  }, []);

  // Renderização do componente
  return (
    <>
      {/* Verificando se a variável "guitar" está vazia (ou seja, carregando) */}
      {!guitar ? (
        <p>Loading...</p> // Se estiver carregando, exibir "Loading..."
      ) : (
        guitar.map((guitars) => {
          return (
            <div className="card">
              {/* Renderizando uma imagem com o atributo "src" e "alt" baseado nos dados */}
              <img src={guitars.img} alt={guitars.brand} />
              <div className="card-body">
                {/* Renderizando o nome da marca da guitarra */}
                <h2 className="card-title">{guitars.brand}</h2>
                {/* Renderizando a descrição da guitarra */}
                <p className="card-text">{guitars.description}</p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

// Exportando o componente App para ser usado em outros lugares
export default App;
