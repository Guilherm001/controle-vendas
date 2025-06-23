import Style from './style.module.css';
import Link from 'next/link';
import Calculadora from '../calculadora/estrutura/estrutura_Card.jsx';

export default function BarraLateral() {
    return (
        <div className={Style.container}>
        <h2>Controle Finanças</h2>
        <ul className={Style.listaLinks}>
            <ol><Link href="/">Home</Link></ol>
            <ol><Link href="/calculadora2">Calculadora</Link></ol>
            <ol><a href="#">Estoque</a></ol>
            <ol><a href="#">Cadastros</a></ol>
            <ol><a href="#">Fiscal</a></ol>
        </ul>
        </div>
    );
}