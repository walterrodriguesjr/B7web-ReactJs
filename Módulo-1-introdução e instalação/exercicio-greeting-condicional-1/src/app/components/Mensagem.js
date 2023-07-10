import { horaAtual } from "./Hora";






    export const mensagem = () => {
        const hora = horaAtual();
        if(hora >= 13 || hora < 18){
            const mensagem = "Boa tarde!";
            return mensagem;
        }
    }
    
