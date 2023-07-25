import { useEffect } from "react";

export const Square = () => {
    
    useEffect(() => {
        console.log("Rodou o effect do quadrado");
        
        return () => {
            console.log('Rodou o cleanUp');
            
        }
    })

    return(
        <div className="w-40 h-40 bg-red-400"></div>
    )
}