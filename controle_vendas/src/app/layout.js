
import "./globals.css";
import BarraLateral from "./coomponents/barraLateral/BarraLateral";
import BarraSuperior from "./coomponents/barraSuperior/BarraSuperior";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <BarraSuperior />
          {/* barra superior */}
          <div style={{ display: 'flex', flex: 1 }}>
            <BarraLateral />
            {/* barra lateral */}
            <main style={{ flex: 1 }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
