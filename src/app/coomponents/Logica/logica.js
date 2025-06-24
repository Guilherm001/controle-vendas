export function calcularPorcentagem(valorProduto, porcentagem) {
  if (isNaN(valorProduto) || isNaN(porcentagem)) {
    throw new Error("Os valores devem ser números.");
  }
  return valorProduto + valorProduto * (porcentagem / 100);
}

export function calcularDesconto(valorProduto, desconto) {
  if (isNaN(valorProduto) || isNaN(desconto)) {
    throw new Error("Os valores devem ser números.");
  }
  return valorProduto - valorProduto * (desconto / 100);
}

export function calcularLucro(valorVenda, valorCusto) {
  if (isNaN(valorVenda) || isNaN(valorCusto)) {
    throw new Error("Os valores devem ser números.");
  }
  return valorVenda - valorCusto;
}

export function calcularLucroPercentual(valorVenda, valorCusto) {
  if (isNaN(valorVenda) || isNaN(valorCusto)) {
    throw new Error("Os valores devem ser números.");
  }
  if (valorCusto === 0) {
    throw new Error("O valor de custo não pode ser zero.");
  }
  return ((valorVenda - valorCusto) / valorCusto) * 100;
}

export function tes(valorProduto, desconto) {
  if (isNaN(valorProduto) || isNaN(desconto)) {
    throw new Error("Os valores devem ser números.");
  }

  const valorComDesconto = calcularDesconto(valorProduto, desconto);
  return valorProduto - valorComDesconto;
}
