"use client"

import { useState } from "react";
import { Pessoa } from "@/types/Pessoa";

export const Form = () => {

    const [list, setList] = useState<Pessoa[]>([]);
    const [nome, setNome] = useState('');

    const handleVisualizar = (id: number) => {
        const pessoa = list.find(item => item.id === id);
        if (pessoa) {
            alert(`Nome: ${pessoa.nome}`);
        }
    }
    const handleAdicionar = () => {
        if (nome.trim() === "") { // Verifica se o nome não está vazio
            alert('O campo nome não pode ser vazio.');
            return;
        }
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

    const handleDeletar = (id: number) => {
        setList(
            list.filter(item => item.id !== id)
        )
    }

    return (
        <>
            <body className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de usuário</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text"
                            placeholder="Digite o nome..."
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        onClick={handleAdicionar}
                    >Salvar</button>
                </div>
            </body>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-200 border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Nome
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Ação
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map(item => (
                                            <tr key={item.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.nome}
                                                </td>

                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <button
                                                        type="button"
                                                        className="border border-gray-500 bg-gray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                                        onClick={() => handleVisualizar(item.id)}
                                                    >
                                                        Ver
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                                        onClick={() => handleEditar(item.id)}
                                                    >
                                                        Editar
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                                        onClick={() => handleDeletar(item.id)}
                                                    >
                                                        Deletar
                                                    </button>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}