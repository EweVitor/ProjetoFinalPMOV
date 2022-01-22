const livros = [
    { "id": "1", "title": "1 – O Almanaque do Pobre Charlie – a inteligência e sabedoria de Charles T. Munger", "releaseYear": "1977", 
    "descricao":"A obra reúne os melhores discursos, palestras, comentários e ensinamentos sobre investimentos e a vida de Charlie Munger, um dos maiores nomes dos investimentos de valor de todos os tempos.Há um trecho no livro que apresenta o checklist de Munger para investir. São dez áreas que o braço direito de Warren Buffett leva em consideração em suas tomadas de decisões." },
    { "id": "2", "title": "2 – Previsivelmente irracional", "releaseYear": "1985",
    "descricao":"Dan Ariely utiliza experimentos para comprovar o quanto somos suscetíveis à irracionalidade e o quanto isso afeta nossa vida e decisões. Através de exemplos do cotidiano, o autor quebra paradigmas racionais da economia tradicional e mostra que seguir os conceitos da economia comportamental é o caminho para entendermos mais sobre nós mesmos e, consequentemente, nos tornarmos investidores mais conscientes e, por que não, mais racionais." },
    { "id": "3", "title": "3 – Contrarian Investment Strategies: beat the market by going against the crowd", "releaseYear": "1999",
    "descricao": "Este livro ainda não tem uma edição brasileira, mas em tradução livre seria algo como Estratégias de Investimento Contrário: supere o mercado indo contra a multidão. Nele, David Dreman reúne 41 regras que devem ser respeitadas se você deseja ter uma postura oposta à da maioria dos que investem em ações. Se quiser saber mais sobre o livro (recomendo), leia este artigo. Aqui estão algumas de minhas regras favoritas: Regra 1 – Respeite a dificuldade de lidar com uma infinidade de informações. Poucos conseguem fazer isso com sucesso. Regra 2 – Não existem segmentos altamente previsíveis em que você pode traçar previsões 100% seguras. Contar com isso pode lhe causar problemas." },
    { "id": "4", "title": "4 – O poder do hábito", "releaseYear": "2010",
    "descricao":"Outro livro que pode ajudá-lo a compreender melhor as armadilhas criadas por sua cabeça é O poder do hábito – Por que fazemos o que fazemos na vida e nos negócios, escrito por Charles DuhiggNele, o autor explica a origem dos hábitos – bons e ruins – e mostra, através de exemplos e experimentos práticos, como você pode criar o cenário para transformar seus hábitos."},
    { "id": "5", "title": "5 – A lógica do mercado: como lucrar com finanças comportamentais", "releaseYear": "2014",
    "descricao":"John R. Nofsinger, doutor e professor de Finanças da Washington State University, aborda vários conceitos importantes para quem está buscando controlar emoções ao investir e ser mais racional em seus investimentos neste livro. Já escrevi um artigo sobre ele, inclusive. Abaixo, resumo algumas de minhas lições favoritas:1 – Saiba por que está investindo.2 – Antes de comprar uma ação, compare os critérios da empresa em que está investindo com os seus próprios.3 – Diversifique seus investimentos.4 – Crie hábitos e evite tentações." }
  ]

  function getLivros() {
    const promise = new Promise(
        (resolve, reject) =>{
            try {
                resolve(livros)
            } catch (error) {
                console.log(error);
                reject(error);
            }

        }

    );return promise;

  }

  export {getLivros}