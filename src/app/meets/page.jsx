import { loadMeets, deleteMeet } from "@/utils/utils"
import Card from "@/components/card"

async function MeetsPage() {
  const meets = await loadMeets()
  const destroyer = async (id) => {
    "use server"
    await deleteMeet(id)
  }
  return (
    <>
  <h1 className="text-2xl text-center font-italic mb-4 ">Caso sua reunião custe mais que R$ 300, sera classificada como "Não vale a pena" caso contrário "Vale a pena". </h1>
      {meets && (meets.map(meet => 
        <Card meet={meet} key={meet.id} arrow={destroyer}/>
      ))}
    </>
  )
}

export default MeetsPage