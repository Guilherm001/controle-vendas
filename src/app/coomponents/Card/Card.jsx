'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Card(props) {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado1, setResultado1] = useState(null);
    const [resultado2, setResultado2] = useState(null);
    const [resultado3, setResultado3] = useState(null);

    const handleSubmit = (e) => {
    e.preventDefault();
    try {
        const valorFinal1 = props.calcularFuncao(parseFloat(valor1), parseFloat(valor2));
        setResultado1(valorFinal1.toFixed(2));
        if (typeof props.calcularFuncao2 === 'function') {
    const valorFinal2 = props.calcularFuncao2(parseFloat(valor1), parseFloat(valor2));
    setResultado2(valorFinal2.toFixed(2));
} else {
    setResultado2(null);
}
        
        if  (typeof props.calcularFuncao3 === 'function') {
            const valorFinal3 = props.calcularFuncao3(parseFloat(valor1), parseFloat(valor2));
            setResultado3(valorFinal3.toFixed(2));
        } else {
            setResultado3(null);
        }
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

                    <button type="submit" style={{backgroundColor: props.corBotao, color: "#fff" }}>{props.label_03}</button>
                </form>
                {(resultado1 !== null || resultado2 || resultado3 !== null) && (
                    <div className={styles.resultContainer}>
                        <div className={styles.result1}>
                            <p>{props.result_resposta1}</p>
                            <h2 style={{color: props.corResultado1}}>{resultado1}</h2>
                        </div>
                        <div className={styles.result1}>
                            <p>{props.result_resposta2}</p>
                            <h2 style={{color: props.corResultado2}}>{resultado2}</h2>
                        </div>
                        <div className={styles.result1}>
                            <p>{props.result_resposta3}</p>
                            <h2 style={{color: props.corResultado3}}>{resultado3}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}