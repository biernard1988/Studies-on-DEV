import { createClient } from "contentful";

// Definindo o hook personalizado useContentful
const useContentful = () => {
  // Criando uma instância do cliente Contentful com as credenciais apropriadas
  const client = createClient({
    space: "ki98gwhecfyo",
    accessToken: "RmV-uDOGsphDESUUeQTqFYr2gQeHakfcm7bhNOP12mo",
    host: "preview.contentful.com",
  });

  // Função assíncrona para buscar dados do Contentful
  const getData = async () => {
    try {
      // Obtendo entradas (entries) do Contentful com base no tipo de conteúdo "guitars"
      const entries = await client.getEntries({
        content_type: "guitars",
        select: "fields",
      });
      console.log(entries);
      // Mapeando as entradas para formatar os dados desejados
      const filterEntries = entries.items.map((item) => {
        console.log(item);
        // Extraindo campos específicos das entradas
        const brand = item.fields.model;
        const description = item.fields.description;
        const img = item.fields.img.fields.file.url;

        return {
          brand,
          description,
          img,
        };
      });

      return filterEntries; // Retornando os dados formatados
    } catch (error) {
      console.log("Contentful error: ", error); // Lidando com erros, se houver
    }
  };

  // Retornando a função getData para uso no componente App
  return { getData };
};

// Exportando o hook personalizado useContentful
export default useContentful;
