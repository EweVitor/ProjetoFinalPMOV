

const livros = [
    { "id": "1", "title": "Aprendendo a mexer com a mente.", "releaseYear": "1977" },
    { "id": "2", "title": "O dinheiro é so uma questão?", "releaseYear": "1985" },
    { "id": "3", "title": "Treine sua mente!", "releaseYear": "1999" },
    { "id": "4", "title": "Seja melhor que ontem.", "releaseYear": "2010" },
    { "id": "5", "title": "O poder da mente!", "releaseYear": "2014" }
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