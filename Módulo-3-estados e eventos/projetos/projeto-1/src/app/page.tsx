"use client"

import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center text-2xl'>

        <h1 text-4xl mt-5>Lista de Tarefas</h1>

        <div className='flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 '>

          <input type="text"
          placeholder='O que deseja fazer?'
          className='flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3'
          />

          <button>Adicionar</button>

        </div>

        <ul className='w-full max-w-lg list-disc pl-5'>
            <li>Tarefa específica - <button className='hover:underline'>[ deletar ]</button></li>
            <li>Tarefa específica - <button className='hover:underline'>[ deletar ]</button></li>
        </ul>

      </div>
    </>
  );
}


export default Page;

