'use client';
import React from 'react';
import Card from '../../Card/Card';
import { calcularPorcentagem, calcularDesconto, calcularLucro, calcularLucroPercentual, tes } from '../../Logica/logica';
import Style from './Styles.module.css';

export default function App() {
    return (
        <div className={Style.container}>
            <Card 
                titulo="Calculadora de Porcentagem"
                descricao="Calcule o valor final com base em uma porcentagem."
                label_01="Valor de custo do produto"
                label_02="Porcentagem a ganhar"
                label_03="Calcular"
                placeholder_01="Digite o valor do produto"
                placeholder_02="Digite a porcentagem"
                result_resposta1="Valor Final: "
                result_resposta2=" "    
                result_resposta3=" "
                calcularFuncao={calcularPorcentagem}
                corBotao="#fba02d" // Cor do botão
                corResultado1="#008000" // Cor do resultado
                corResultado2="#004080"
                corResultado3="#f0f"
            />
            <Card
                titulo="Calculadora de Desconto"
                descricao="Calcule o valor final após aplicar um desconto."
                label_01="Valor do Produto"
                label_02="Desconto (%)"
                label_03="Calcular"
                placeholder_01="Digite o valor do produto"
                placeholder_02="Digite o desconto"
                result_resposta1="valor com desconto: "
                result_resposta2="valor do desconto: "  
                calcularFuncao={calcularDesconto}
                calcularFuncao2={tes}
                corBotao="#d32f2f" // Cor do botão
                corResultado1="#008000" // Cor do resultado
                corResultado2="#ff0f85"
            />
            <Card
                titulo="Margem de Lucro"
                descricao="Calcule o lucro com base no valor de venda e custo."
                label_01="Valor de Venda"
                label_02="Valor de Custo"
                label_03="Calcular"
                placeholder_01="Digite o valor de venda"
                placeholder_02="Digite o valor de custo"
                result_resposta1="Lucro Percentual: "
                result_resposta2="Lucro $: "
                result_resposta3=" "
                calcularFuncao={calcularLucroPercentual}                
                calcularFuncao2={calcularLucro}
                calcularFuncao3={''}
                corBotao="#388e3c" // Cor do botão
                corResultado1="#008000" // Cor do resultado
                corResultado2="#004080"

            />
            <Card 
                titulo="Calculadora de Lucro Percentual"
                descricao="Calcule o lucro percentual com base no valor de venda e custo."
                label_01="Valor de Venda"
                label_02="Valor de Custo"
                label_03="Calcular"
                placeholder_01="Digite o valor de venda"
                placeholder_02="Digite o valor de custo"
                result_resposta1="Lucro Percentual: "
                result_resposta2="Lucro Percentual: "
                result_resposta3="Lucro Percentual: "
                calcularFuncao={calcularLucroPercentual}                
                calcularFuncao2={calcularDesconto}
                calcularFuncao3={calcularPorcentagem}
                corBotao="#459" // Cor do botão
                corResultado1="#008000" // Cor do resultado
                corResultado2="#004080"
                corResultado3="#f0f"
                

            
            />
            
        </div>
    );
}