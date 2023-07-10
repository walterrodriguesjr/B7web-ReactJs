

const horaAtual = () => {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    return hora;
}

const minutoAtual = () => {
    const minutoAtual = new Date();
    const minuto = minutoAtual.getMinutes();
    return minuto;
}

export const Hora = () => {
    return (
        <>
            <h1>Hora atual</h1>
            <h3>{horaAtual()} : {minutoAtual()}</h3>
        </>
    );
}