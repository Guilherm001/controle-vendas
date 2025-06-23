import Style from './style.module.css';
import Link from 'next/link';


export default function BarraSuperior() {
    return (
        <div className={Style.container}>
            <h2>Barra Superior</h2>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </div>
    );
}