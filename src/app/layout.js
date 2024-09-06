export const metadata = {
  title: 'Sorteio da Mega-Sena',
  description: 'Simulação de sorteio da Mega-Sena',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">Mega-Sena</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
