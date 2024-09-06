"use client";

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './fireworks.css';

export default function SorteioPage() {
  const [numeros, setNumeros] = useState([]);
  const [entradaNumeros, setEntradaNumeros] = useState(Array(6).fill(''));
  const [error, setError] = useState('');

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 60))) {
      const newEntradaNumeros = [...entradaNumeros];
      newEntradaNumeros[index] = value;
      setEntradaNumeros(newEntradaNumeros);
    }
  };

  const handleSubmit = () => {
    const entradas = entradaNumeros.map(num => parseInt(num)).filter(num => num >= 1 && num <= 60);
    const entradasUnicas = [...new Set(entradas)];

    if (entradasUnicas.length !== 6) {
      setError('Por favor, insira 6 números únicos entre 1 e 60.');
      return;
    }

    setError('');

    const numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numero)) {
        numerosSorteados.push(numero);
      }
    }

    setNumeros(numerosSorteados);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="bg-overlay"></div>
      <img
        src="/images/logo-mega-sena-2048.png"
        alt="Mega-Sena Logo"
        className="mb-5 img-fluid"
        style={{ maxWidth: '400px', height: 'auto', filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5))' }}
      />
      <h1 className="mb-5 text-center text-light">Mega-Sena Sorteio</h1>
      <div className="card p-4 shadow-lg bg-light border-light rounded-4 text-center">
        <div className="row mb-4">
          {entradaNumeros.map((numero, index) => (
            <div className="col-md-2 col-sm-4 mb-3" key={index}>
              <input
                type="number"
                value={numero}
                onChange={(e) => handleChange(e, index)}
                className="form-control text-center"
                min="1"
                max="60"
                style={{ height: '70px', fontSize: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-success w-100 mb-4 py-3"
          onClick={handleSubmit}
          style={{ fontSize: '1.5rem', borderRadius: '1rem', backgroundColor: '#28a745', borderColor: '#28a745', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', transition: 'background-color 0.3s, box-shadow 0.3s' }}
        >
          Gerar Números da Sorte
        </button>
        <div className="numero-container mb-4">
          {numeros.map((numero, index) => (
            <div
              key={index}
              className={`numero ${entradaNumeros.includes(numero) ? 'acertou' : ''}`}
            >
              {numero}
            </div>
          ))}
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}
