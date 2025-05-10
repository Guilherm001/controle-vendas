/**
 * Calcula o valor final de um produto com base em uma porcentagem.
 * @param {number} valorProduto - O valor do produto.
 * @param {number} porcentagem - A porcentagem a ser aplicada.
 * @returns {number} - O valor final após aplicar a porcentagem.
 */
export function calcularPorcentagem(valorProduto, porcentagem) {
    if (isNaN(valorProduto) || isNaN(porcentagem)) {
        throw new Error("Os valores devem ser números.");
    }
    return valorProduto + (valorProduto * (porcentagem / 100));
}