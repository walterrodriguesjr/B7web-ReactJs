import { Pessoa } from "../types/Pessoa";

type Props = {
    pessoa: Pessoa[];
}

export const Table = ({pessoa}: Props) => {
    return (
        <>

            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Nome</th>
                                    <th className="px-4 py-3">Idade</th>
                                    <th className="px-4 py-3">Profissão</th>
                                   
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {pessoa.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-4 py-3 text-ms font-semibold border">{item.nome}</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">{item.idade}</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">{item.profissao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}