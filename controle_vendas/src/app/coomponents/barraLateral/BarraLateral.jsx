import Style from './style.module.css';
import Link from 'next/link';
import Calculadora from '../calculadora/estrutura/estrutura_Card.jsx';

export default function BarraLateral() {
    return (
        <div className={Style.container}>
        <h2>Barra Lateral</h2>
        <ul className={Style.listaLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/calculadora2">Calculadora</Link></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
        </ul>
        </div>
    );
}