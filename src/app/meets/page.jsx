import { prisma } from "@/libs/prisma"

async function loadMeets() {
  return await prisma.meet.findMany()
}

async function MeetsPage() {
  const meets = await loadMeets()
  return (
    <>
  <h1 className="text-2xl text-center font-italic mb-4 ">Caso sua reunião custe mais que R$ 300, sera classificada como "Não vale a pena" caso contrário "Vale a pena". </h1>
      {meets && (meets.map(meet => 
        <div className="w-1/2  m-auto mb-8 text-center bg-slate-500 text-lg font-light text-white" key={meet.id}>
          <h1>Nome: {meet.nome}</h1>
          <p>Cargo: {meet.cargo}</p>
          <p>Data: {meet.createdAt.toLocaleDateString('pt-BR')}</p>
          <p>Númer de integrantes: {meet.integrantes}</p>
          <p>Valor médio da hora de trabalho: R$ {meet.valorHora}</p>
          <p className="bg-red-500 w-full font-bold">{meet.custo > 300 ? 'Não vale a pena' : 'Vale a pena'}</p>
          <h2>Custo: R${meet.custo}</h2>
        </div>
      ))}
    </>
  )
}

export default MeetsPage