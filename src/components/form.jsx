"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Form({arrow}) {
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
      <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calcule o seu Meet
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="mx-auto mt-8 max-w-xl sm:mt-8"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
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
                className="block text-sm font-semibold leading-6 text-gray-900"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
