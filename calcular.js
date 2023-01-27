function calcularTotal() {
    // Obtém os valores dos inputs de quantidade e preço
    var quantidade = document.getElementById("quantidade").value;
    var preco = document.getElementById("preco").value;
    // Calcula o preço total
    var total = quantidade * preco;
    // Atualiza o elemento HTML com o preço total
    document.getElementById("total").innerHTML = total;}