type Props = {
    nome: string,
    sexo: string,
    idade: number,
    cidade: string,
}



export const DadosPessoais = ({nome = 'Não Cadastrado', sexo = "Não Cadastrado", idade = 0, cidade = "Não Cadastrada" }: Props) => {

    return (
        <>
            <h2>Dados Pessoais</h2>
            <ul>
                <li>Nome Completo: {nome}</li>
                <li>Sexo: {sexo}</li>
                <li>Idade: {idade}</li>
                <li>Cidade Atual: {cidade}</li>
            </ul>
           
        </>
    );
}