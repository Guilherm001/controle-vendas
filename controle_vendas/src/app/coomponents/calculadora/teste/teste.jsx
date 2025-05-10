'use client';
import React from 'react';
import Card from '..';
import { calcularPorcentagem, calcularDesconto, calcularLucro } from '../logica';

export default function App() {
    return (
        <div>
            <Card
                titulo="Calculadora de Porcentagem"
                descricao="Calcule o valor final com base em uma porcentagem."
                label_01="Valor do Produto"
                label_02="Porcentagem"
                label_03="Calcular"
                placeholder_01="Digite o valor do produto"
                placeholder_02="Digite a porcentagem"
                calcularFuncao={calcularPorcentagem}
            />
            <Card
                titulo="Calculadora de Desconto"
                descricao="Calcule o valor final após aplicar um desconto."
                label_01="Valor do Produto"
                label_02="Desconto (%)"
                label_03="Calcular"
                placeholder_01="Digite o valor do produto"
                placeholder_02="Digite o desconto"
                calcularFuncao={calcularDesconto}
            />
            <Card
                titulo="Calculadora de Lucro"
                descricao="Calcule o lucro com base no valor de venda e custo."
                label_01="Valor de Venda"
                label_02="Valor de Custo"
                label_03="Calcular"
                placeholder_01="Digite o valor de venda"
                placeholder_02="Digite o valor de custo"
                calcularFuncao={calcularLucro}
            />
        </div>
    );
}