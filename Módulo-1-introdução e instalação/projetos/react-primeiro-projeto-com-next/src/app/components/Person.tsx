const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

type Props = {
    nome: string;
    cargo: string;
    funcao: string;
    foto: string;
    extra?: string;
    idade?: number;
}


export const Person = ({nome, cargo, funcao, foto, extra, idade = 37}: Props) => {

  

    return (
        <>
            <h1 style={{color: 'red'}}>Nome: {nome}</h1>
            <img className="h-40" src={foto} alt="" />
            <ul>
                <li>Cargo: {cargo}</li>
                <li>Função: {funcao}</li>
                <li>Idade: {idade}</li>
            </ul>
        </>
    );
}