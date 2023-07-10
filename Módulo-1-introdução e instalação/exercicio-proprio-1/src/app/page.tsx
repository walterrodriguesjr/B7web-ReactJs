import { Hora } from "./components/Hora";
import { Mensagem } from "./components/Mensagem";

const horaAtual = Hora();
const mensagemAtual = Mensagem();



const Page = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center text-white
      bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="text-9xl">{horaAtual}</div>
        <div className="text-5xl font-bold">{mensagemAtual}</div>
      </div>
    </>
  );
}

export default Page;

