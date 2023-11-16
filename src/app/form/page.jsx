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
      <>
        <Form arrow={create}/>
      </>
  );  
}

export default FormPostMeet;
