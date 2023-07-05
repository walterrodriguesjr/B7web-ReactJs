const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}


export const Person = () => {

    const data = {
        nome: 'Walter',
        cargo: 'Policial',
        funcao: 'Programador',
        foto: 'https://cdn-icons-png.flaticon.com/512/17/17004.png',
    }

    return (
        <>
            <h1 style={{color: 'red'}}>Nome: {data.nome} - {getWeekday()}</h1>
            <img className="h-40" src={data.foto} alt="" />
            <ul>
                <li>Cargo: {data.cargo}</li>
                <li>Função: {data.funcao}</li>
            </ul>
        </>
    );
}