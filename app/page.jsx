import ButtonNavigate from './components/button'
export default function HomePage() {
  return (
    <>
      <div className='flex flex-col text-white bg-gray-600 m-auto mb-6 p-8 rounded-md'>
          <h2 className='m-auto text-2xl mb-2'>Para que você possa utilizar o NoMoreMeet sem que aja dúvidas... </h2>
          <p className='m-auto text-lg mb-2'>Segue o que você pode esperar dele:</p>
          <ul className='m-auto mb-5'>
              <li>1. Calcular o valor de uma reunião</li>
              <li>2. Se questionar sobre a necessidade de uma reunião</li>
              <li>3. Conhecer alternativas</li> 
          </ul>
        <p className='m-auto text-lg mb-2'>Você irá preencher um formulário com: </p>
        <ul className='m-auto pb-4'>
          <li>1. Nome</li>
          <li>2. Cargo</li>
          <li>3. Quantidade de integrantes</li>
          <li>4. Média de valor da hora trabalhada de cada integrante</li>
        </ul>
        <h3 className='m-auto text-lg'>No final você terá um valor aproximado do gasto *LEVANDO EM CONTA 1 HORA DE REUNIÃO*</h3>
        <p className='m-auto text-base mb-4'>O intuito não é dizer como deve ser feito o seu trabalho, mas dar a você a oportunidade de tomar a melhor decisão.</p>
        <ButtonNavigate style={'m-auto bg-gray-900 hover:bg-gray-700 font-bold text-white p-4 rounded w-auto '} url={'form'}/>
      </div>
    </>
  )
}
