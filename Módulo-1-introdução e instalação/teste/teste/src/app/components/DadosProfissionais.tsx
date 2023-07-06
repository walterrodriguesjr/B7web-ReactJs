

export const DadosProfissionais = () => {

    const dados = {
        profissao: 'Policial Militar',
        graduacao: 'Soldado',
        funcao: 'Desenvolvedor',
    };
    
    return (
        <>
            <h1>Dados Profissionais</h1>  
            <p>Profissão: {dados.profissao}</p>
            <p>Graduação: {dados.graduacao}</p>
            <p>Função: {dados.funcao}</p>
        </>
    );
}