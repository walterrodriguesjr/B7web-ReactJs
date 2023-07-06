

export const DadosPessoais = () => {

    const dados = {
        nome: 'Walter',
        idade: 37,
        cidade: 'Curitiba',
    };

    return (
        <>
            <h1>Dados Pessoais</h1>
            <p>Nome: {dados.nome}</p>
            <p>Idade: {dados.idade}</p>
            <p>Cidade: {dados.cidade}</p>
        </>
    );
}