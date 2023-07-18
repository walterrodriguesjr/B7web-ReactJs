"use client"

import { TodoItem } from '@/types/TodoItem';
import Image from 'next/image'
import { useState } from 'react';

const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer dever de casa', checked: false },
    { label: 'Comprar o bolo', checked: false },
  ]);

  const handleAddButton = () => {
    setList([
      ...list,
      { label: itemInput, checked: false }])
      setItemInput('');
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center text-2xl'>
        <h1 className='text-4xl mt-5'>Lista de Tarefas</h1>

        <div className='flex w-full max-w-lg my-3 p-4 rounded-md bfg-gray-700 border-2'>
          <input type="text"
            placeholder='O que deseja fazer?'
            className='flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3'
            value={itemInput}
            onChange={e => setItemInput(e.target.value)}
          />
          <button onClick={handleAddButton}>Adicionar</button>
        </div>

        <p className='my-4'>{list.length} itens na lista</p>

        <ul className='w-full max-w-lg list-disc pl-5'>
          {list.map(item => (
            <li>{item.label} <button className='hover:underline'>[ deletar ]</button></li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default Page;
