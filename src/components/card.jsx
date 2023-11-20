"use client";
import { useRouter } from "next/navigation";
function Card({ meet, arrow }) {
  const router = useRouter();
  return (
    <>
      <div className="flex-row text-sm font-bold flex gap-8 mb-4 bg-gray-700 text-white p-3">
        <h1>Nome: {meet.nome}</h1>
        <p>Cargo: {meet.cargo}</p>
        <p>Data: {meet.createdAt.toLocaleDateString("pt-BR")}</p>
        <p>Integrantes: {meet.integrantes}</p>
        <p>Valor hora de trabalho: R$ {meet.valorHora}</p>
        <p className="w-full font-bold">
          {meet.custo > 300 ? "Não vale a pena" : "Vale a pena"}
        </p>
        <h2>Custo: R${meet.custo}</h2>
        <div>
          <button
            className="w-full font-bold p-2 rounded cursor-pointer bg-gray-900 hover:bg-gray-700"
            onClick={() => (arrow(meet.id), router.push(`/`))}
          >
            Deletar
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
