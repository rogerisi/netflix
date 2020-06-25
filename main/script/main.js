const sectionMainIndex= ['h1','h3','h5'] 

const sectionMain = {
    h1:"Filmes séries, e muito mais.Sem limites.",  
    h3:"Assista quando quiser. Cancele quando quiser.", 
    h5:"Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura"
} 

sectionMainIndex.forEach(e => {
    let idSectionMain = `section__main__${e}` 
    document.getElementById(idSectionMain).innerHTML = sectionMain[e] 
}) 

const mostrarTextoPorPosicao = (arg) => {  
    let classe   =  `content${arg}`
    let elemento =  document.getElementById(classe); 
    let texto = conteudosPerguntasFrequentes[arg]; 
    let styleDisplay = ``;  
    styleDisplay = elemento.style.display
    
    if (!styleDisplay) {
        styleDisplay = `none`; 
    }

    if (styleDisplay == `none`) {
        elemento.style.display = `block`;    
        let idCoteudo =`conteudo${arg}` 
        document.getElementById(idCoteudo).innerHTML = texto;
    } else {
        elemento.style.display = `none`;   
    }
}

const collapse = (param) => {
    theTarget = event.target; 
    const value = param;     
    if(value){
        theTarget.addEventListener(`click`,mostrarTextoPorPosicao(value)) 
    }  
}

   