document.querySelectorAll('.botaoAssinar').forEach(function (e) {
    e.addEventListener('click', function () {
        window.location.href = './pages/telaPagamento.html'
    });
})



const inicio = document.querySelector("[inicio]");

if (inicio) {
    inicio.addEventListener('click', _ => {
        inicio.href = "../index.html";
    })

}
