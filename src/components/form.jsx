"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Form({ arrow }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const { nome, cargo, valorHora, integrantes } = e;
    const custo = parseFloat(integrantes) * parseFloat(valorHora);
    await arrow(nome, cargo, integrantes, valorHora, custo);
    console.log(e);
    router.push("/meets");
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <div className=" px-6 py-2 sm:py-4 lg:px-8 ">
          <h2 className=" mx-auto max-w-2xl text-center w-full text-4xl font-bold text-white sm:text-4xl">
            Calcule o seu Meet
          </h2>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col justify-center mt-8 max-w-xl sm:mt-8 "
        >
          <div className="grid m-auto mb-4 grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className=" mb-2 text-base border-2 font-semibold text-white"
              >
                Seu nome:
              </label>
              <div className="mt-2.5">
                <input
                  {...register("nome", {
                    required: "Nome é requerido.",
                    minLength: {
                      value: 3,
                      message: "Nome precisa ter pelo menos 3 caracteres",
                    },
                  })}
                  type="text"
                  name="nome"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                {errors?.name && (
                  <span className="text-red-700">{errors.name.message}</span>
                )}
                  
              </div>
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-base font-semibold leading-6 text-white"
              >
                Cargo:
              </label>
              <div className="mt-2.5">
                <input
                  {...register("cargo", {
                    required: "Cargo é requerido.",
                    minLength: {
                      value: 3,
                      message: "Cargo precisa ter pelo menos 3 caracteres",
                    },
                  })}
                  type="text"
                  name="cargo"
                  autoComplete="family-name"
                  className=" rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className=" text-base font-semibold leading-6 text-white"
              >
                Valor Médio da hora trabalhada:
              </label>
              <div className="mt-2.5">
                <input
                  {...register("valorHora", {
                    required: "Valor da hora é requerido.",
                    valueAsNumber: true,
                  })}
                  type="text"
                  name="valorHora"
                  className=" rounded-md border-x-2 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className=" text-base font-semibold leading-6 text-white"
              >
                Número de integrantes do Meet:
              </label>
              <div className="mt-2.5">
                <input
                  {...register("integrantes", {
                    required: "Integrantes é requerido.",
                    valueAsNumber: true,
                  })}
                  type="text"
                  name="integrantes"
                  className="rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="m-auto p-4 rounded-md bg-gray-900 text-center text-base font-semibol text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Calcular
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
