import React, { createContext, useReducer } from 'react'

export let TemaContexti = createContext();

function TemaDusurucu(ahval, fiil){
    switch(fiil.type){
        case "CHANGE_COLOR": return { ...ahval, renkBir: fiil.payload }

        default: return ahval;
    }

}



/* Dikkat et, aşşağıdaki ufule'nin içindeki nesnede muhakkak "children" yazması lazım, onu kendi istediğin gibi ayarlayamazsın.*/

export function TemaMutemmini( { children } ){
            /* Eğer birden fazla değer ayarlayabilmek istersen birden fazla "renkleriDegistir()" gibi ufule ilan etmelisin. 
               Eğer farklı bir şey yapacaksan, mesela "CHANGE_MODE" gibi, bunu "TemaDusurucu()" ufulesinin içindeki switch
               kod bloğunun içinde ayri bir case olarak ilan edersin. */

        let [ahval, dispatchUfulesi] = useReducer(TemaDusurucu, {
            renkBir: "green",
            renkIki: "#005800",
        });


    function renkleriDegistir(renkler){
        dispatchUfulesi( {type: "CHANGE_COLOR", payload: renkler} )
    }

    return <TemaContexti.Provider value={ {...ahval, renkleriDegistir} }>
                {children}
           </TemaContexti.Provider>

}