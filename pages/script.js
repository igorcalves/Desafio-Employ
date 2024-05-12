document.querySelectorAll('.botaoAssinar').forEach(function (e) {
    e.addEventListener('click', function () {
        window.location.href = './telaPagamento.html'
    });
})






const planos = document.querySelector("[planos]");

const planosIndex = document.querySelector("[planosIndex]");

if (planosIndex) {
    planosIndex.addEventListener('click', _ => {
        planosIndex.href = "./pages/telaPlanos.html";
    })

}


if (planos) {
    planos.addEventListener('click', _ => {
        planos.href = "./telaPlanos.html";
    })

}


const entrada = document.querySelector("[entrada]")


if (entrada) {
    entrada.addEventListener('click', _ => {
        entrada.href = "../index.html";
    })

}
