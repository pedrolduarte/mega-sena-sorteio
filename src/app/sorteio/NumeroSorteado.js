'use client';

export default function NumeroSorteado({ numero }) {
  return (
    <div className="numero-sorteado m-2 p-4 rounded-circle bg-success text-white d-flex justify-content-center align-items-center shadow-lg border border-light">
      <span className="fs-3 fw-bold">{numero}</span>
    </div>
  );
}
