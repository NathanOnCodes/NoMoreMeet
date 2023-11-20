import Form from "@/components/form";
import { createMeet } from "@/utils/utils";
 
function FormPostMeet() {
  async function create(nome, cargo, integrantes, valorHora, custo) {
    "use server"
    const parseIntegrantes = String(integrantes);
    await createMeet({
      nome,
      cargo,
      integrantes: parseIntegrantes,
      valorHora,
      custo
    });
  }
  return (

    <section className="p-6 flex flex-col align-middle justify-center bg-gray-600">
      <Form arrow={create}/>
    </section>
        
    
      
  );  
}

export default FormPostMeet;
