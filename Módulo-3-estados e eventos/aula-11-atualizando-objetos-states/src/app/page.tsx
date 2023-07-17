
"use client"

import Image from 'next/image'
import { useState } from 'react';
import { Dados } from './types/Person';


const Page = () => {

  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleClick = () => {
    setNome(nome);
    setSobreNome(sobreNome);
    setIdade(idade);
  }
  

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center text-3xl'>
        <input type="text"
          placeholder='Nome'
          className='border border-black p-3 text-2xl text-black rounded-md mb-3'
          onChange={e => setNome(e.target.value)}
        />

        <input type="text"
          placeholder='Sobrenome'
          className='border border-black p-3 text-2xl text-black rounded-md mb-3' 
         onChange={e => setSobreNome(e.target.value)}
        />

        <input type="number"
          placeholder='idade'
          className='border border-black p-3 text-2xl text-black rounded-md mb-3' 
        onChange={e => setIdade(e.target.value)}
        />

        <p>Meu nome é: {nome}</p>
        <p>Meu sobrenome é: {sobreNome}</p>
        <p>Minha idade é: {idade}</p>
      
        <button
        type="button"
        onClick={handleClick}
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        Salvar
      </button>
      </div>
    </>
  );
}

export default Page;
