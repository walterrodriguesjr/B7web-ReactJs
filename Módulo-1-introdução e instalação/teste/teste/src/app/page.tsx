import { LinhaDois, LinhaUm } from "@/components/Linhas";
import { TextoUm, TextoDois } from "../components/Textos";

const Page = () => {
  return (
    <div>
      <h1>Tela de Page</h1>
      <br />
      <h1>Componente Textos</h1>
      <TextoUm />
      <TextoDois />

      <div>
        <h1>Componentes Linhas</h1>
      </div>
      <LinhaUm />
      <LinhaDois />
    </div>
  );
}

export default Page;