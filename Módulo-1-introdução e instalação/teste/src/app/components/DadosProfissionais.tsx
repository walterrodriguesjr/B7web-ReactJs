
type Props = {
    empresa: string,
    profissao: string,
    funcao: string,
    cargo: string
};


export const DadosProfissionais = ({ empresa = "Não Cadastrado", profissao = "Não Cadastrado", funcao = "Não Cadastrado", cargo = "Não Cadastrado" }: Props) => {
    return (
        <>
            <h1>Dados Profissionais</h1>
            <ul>
                <li>Empresa: {empresa}</li>
                <li>Profissão: {profissao}</li>
                <li>funcao: {funcao}</li>
                <li>cargo: {cargo}</li>
            </ul>
        </>
    );
}