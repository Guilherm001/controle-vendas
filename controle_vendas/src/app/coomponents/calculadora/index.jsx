'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import { calcularPorcentagem } from './logica';

export default function Card(props) {
    const [valorVenda, setValorVenda] = useState('');
    const [valorCusto, setValorCusto] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const valorFinal = calcularPorcentagem(parseFloat(valorVenda), parseFloat(valorCusto));
            setResultado(valorFinal.toFixed(2));
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={styles.card}>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="valorVenda">{props.label_01}</label>
                    <input
                        id="valorVenda"
                        type="number"
                        value={valorVenda}
                        onChange={(e) => setValorVenda(e.target.value)}
                        placeholder="Digite o valor de venda"
                    />

                    <label htmlFor="valorCusto">{props.label_02}</label>
                    <input
                        id="valorCusto"
                        type="number"
                        value={valorCusto}
                        onChange={(e) => setValorCusto(e.target.value)}
                        placeholder="Digite a porcentagem"
                    />

                    <button type="submit">{props.label_03}</button>
                </form>
                {resultado !== null && (
                    <div>
                        <h4>Resultado: R$ {resultado}</h4>
                    </div>
                )}
            </div>
        </div>
    );
}