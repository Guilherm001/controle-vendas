import Image from "next/image";
import styles from "./page.module.css";
import Card from "./coomponents/calculadora";
import App from "./coomponents/calculadora/teste/teste";

export default function Home() {
  return (
    <div>
      <h1>HELLO WORD</h1>
      <App />
    </div>

  );
}
