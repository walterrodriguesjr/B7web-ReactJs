

export const Hora = () => {

    const fullTime = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
      }).format();
    
      return fullTime;
}