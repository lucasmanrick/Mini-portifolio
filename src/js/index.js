const abas = document.querySelectorAll ('.aba') 
abas.forEach(aba=> {
    aba.addEventListener("click", function() {
        if (aba.classList.contains("selecionado")) { 
            return
        }

        selecaoDeAba(aba)

        selecaoDeInformacao(aba)
         } )
});

    function selecaoDeAba(aba) {const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");}


    function selecaoDeInformacao(aba) {const informacaoSelecionada = document.querySelector (".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")


    const ElementoDeInformacaoAba = `informacao-${aba.id}`; 
    
    const idInformacaoASerMostrada = document.getElementById (ElementoDeInformacaoAba)
    idInformacaoASerMostrada.classList.add ("selecionado")}
