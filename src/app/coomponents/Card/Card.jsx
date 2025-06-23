'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Card(props) {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const valorFinal = props.calcularFuncao(parseFloat(valor1), parseFloat(valor2));
            setResultado(valorFinal.toFixed(2));
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="valor1">{props.label_01}</label>
                    <input
                        id="valor1"
                        type="number"
                        value={valor1}
                        onChange={(e) => setValor1(e.target.value)}
                        placeholder={props.placeholder_01}
                    />

                    <label htmlFor="valor2">{props.label_02}</label>
                    <input
                        id="valor2"
                        type="number"
                        value={valor2}
                        onChange={(e) => setValor2(e.target.value)}
                        placeholder={props.placeholder_02}
                    />

                    <button type="submit">{props.label_03}</button>
                </form>
                {resultado !== null && (
                    <div>
                        <h4>Resultado: {resultado}</h4>
                    </div>
                    
                )}
            </div>
        </div>
    );
}