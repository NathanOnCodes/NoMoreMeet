"use client";
function Card({ meet, arrow }) {
  return (
    <>
      <div
        className="w-1/2  m-auto mb-8 text-center bg-slate-500 text-lg font-light text-white"
      >
        <h1>Nome: {meet.nome}</h1>
        <p>Cargo: {meet.cargo}</p>
        <p>Data: {meet.createdAt.toLocaleDateString("pt-BR")}</p>
        <p>Númer de integrantes: {meet.integrantes}</p>
        <p>Valor médio da hora de trabalho: R$ {meet.valorHora}</p>
        <p className="bg-red-500 w-full font-bold">
          {meet.custo > 300 ? "Não vale a pena" : "Vale a pena"}
        </p>
        <h2>Custo: R${meet.custo}</h2>
        <div className="bg-black">
            <button className="w-full font-bold text-white p-2 rounded"
            onClick={() => arrow(meet.id)}
            > Deletar </button>
        </div>
      </div>
    </>
  );
}

export default Card;
