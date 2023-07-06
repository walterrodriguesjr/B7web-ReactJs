import { DadosProfissionais } from "./components/DadosProfissionais";
import { DadosPessoais } from "./components/dadosPessoais";

const Page = () => {
  return (
    <>
      <h1>Page</h1>
      <br />
      <DadosPessoais
        nome="Walter"
        sexo="Masculino"
        idade={37}
        cidade="Curitiba"
      />

      <hr />

      <DadosProfissionais
        empresa="Policia Militar do Estado do Paraná"
        profissao="Policial Militar"
        funcao="Desenvolvedor"
        cargo="Soldado"
      />

    </>
  );
}

export default Page;