import { dadosPessoais } from "@/data/dadosPessoais";
import { Frase } from "./components/Frase";
import { dadosProfissionais } from "@/data/dadosProfissionais";



const Page = () => {
  return (
    <>
      <Frase />
      <ul>
        <h1 className="font-bold">Dados Pessoais</h1>
        {dadosPessoais.map(dadoPessoal => <li>id: {dadoPessoal.id} - nome: {dadoPessoal.nome} - idade: {dadoPessoal.idade} - cidade: {dadoPessoal.cidade}</li>)}
      </ul>

      <hr />

      <h1 className="font-bold">Dados Profissionais</h1>
        <ul>
          {dadosProfissionais.map(dadoProfissional => <li>Profissão: {dadoProfissional.profissao} - Cargo: {dadoProfissional.cargo}</li>)}
        </ul>
    </>
  );
}

export default Page;