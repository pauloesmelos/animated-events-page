import initAnimateNumbers from './numeros-animados.js';
export default function initFetch(){
    const url = './animaisapi.json';
    const grid = document.querySelector('.grid-animais');

    async function fetchUrl(path){
        try{
            console.log('fecth');
            const response = await fetch(path);
            const r = await response.json();
            console.log(r);
            r.forEach(e => {
                let novaDiv = createElement(e);
                grid.appendChild(novaDiv);
            })
            initAnimateNumbers();
        }
        catch(Error){
            console.log('Erro tipo: ',Error);
        }
    }
    fetchUrl(url);

    function createElement(elemento){
        let div = document.createElement('div');
        div.classList.add('animal');
        div.innerHTML = 
        `
            <h3>${elemento.specie}</h3>
            <span data-anima="numero">${elemento.total}</span>
        `;
        return div;
    }
}
//IDEIA PRINCIPAl: pegar os dados via json() e criar novos elementos html com eles

//criar o conteudo HTML de acordo com os dados obtidos no fetch (podemos até excluir os originais no final)
//fectAnimais(url)
//createAnimals()

//passos:
//1)pegar os dados json com a primeira function
//2)ainda na primeira function percorrer todos os dados e chamar uma função que cria uma div com os dados e retorna
//3)na segunda function criar exatamenteo mesmo corpo HTML com as mesmas tags e classes
//mudar apenas o título e o total (dados capturando via json())
