function pesquisarAmazonia (){
    pesquisar(biomaAmazonia)

}
function pesquisarCerrado (){
    pesquisar(biomaCerrado)

}

function pesquisarCaatinga (){
    pesquisar(biomaCaatinga)

}

function pesquisarMataAtlantica (){
    pesquisar(biomaMataAtlantica)

}

function pesquisarPampa (){
    pesquisar(biomaPampa)

}

function pesquisarPantanal (){
    pesquisar(biomaPantanal)

}

function pesquisarBioma(){
    let section = document.getElementById("resultados-pesquisa");
    let resultado = `<div >
    
    
    
    </div>`;
    section.innerHTML = resultado;
}

function pesquisar (listaBichos){
    let section = document.getElementById("resultados-pesquisa");
console.log(section)
    let resultados = "";
    for (let dado of listaBichos) {
         
            resultados += `<div class="item-resultado">
            <h2 class="titulo-animal">${dado.titulo}</h2>

            <div class="imagem-animal" style="background-image:url('./${dado.imagem}')"></div>
            <div class="texto-animal">
            <p class="nome-meta"><b> Nome Científico: </b>   <i> ${dado.nomeCientifico} </i></p>
            <p><b> Descrição: </b>${dado.descricao} </p>
            <p><b>Ameaças à extinção: </b>${dado.ameaca}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            </div>
            `
        
        }
        section.innerHTML = resultados;
        /**
     * <div class="item-resultado">
        <h2>Cachorro-do-mato-vinagre

        </h2>
        <p class="nome-meta">Nome Científico: Speothos venaticus</p>
        <p>Descrição: Conhecido por sua longa língua e pelos longos pelos, o tamanduá-bandeira é um animal solitário que se alimenta de formigas e cupins. </p>
        <p>Ameaças à extinção: destruição de seu habitat e a caça ilegal ...</p>
        <a href="https://www.iucnredlist.org/species/20468/9203243" target="_blank">Mais informações</a>
    </div>
     */
}
