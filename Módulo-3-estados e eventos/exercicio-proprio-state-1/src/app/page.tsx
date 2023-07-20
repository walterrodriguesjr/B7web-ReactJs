
"use client"

import { Pessoa } from "@/types/Pessoa";
import { useState } from "react";

const Page = () => {

  const [nome, setNome] = useState('');
  const [list, setList] = useState<Pessoa[]>([

  ]);

  const handleAdicionar = () => {
    setList([
      ...list,
      { id: list.length + 1, nome: nome }
    ])
    setNome('');
  }

  const handleEditar = (id: number) => {
    const novoArray = list.map(item => {
      if (item.id === id) {
        return { ...item, nome: nome }; 
      }
      return item;
    });
    setList(novoArray);
    setNome('')
  }

  const handleDelete = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
    )
  }

  return (
    <>
      <input className="bg-gray-400"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <button onClick={handleAdicionar} className="bg-blue-400">Adicionar</button>
      <ul className="bg-green-300">
        {
          list.map(item => (

            <li key={item.id} className="bg-green-300">
              {item.nome}<button onClick={() => handleEditar(item.id)} className="bg-blue-500">Editar</button>
              <button onClick={() => handleDelete(item.id)} className="bg-red-500">Deletar</button>
            </li>

          ))}
      </ul>

    </>
  );
}

export default Page;