import { useContext } from "react";
import { TemaContexti } from "../context/TemaContexti";

export let useTheme = function(){
    let contextinKendisi = useContext(TemaContexti);
    /* bu tema'nın geriye döndürdüğü değerler: "renkBir: 'green', "renkIki: '#005800'(koyu yeşil) */

    if(contextinKendisi === undefined){
        throw new Error("Bu kanca Mütemmin(Provider) Serlevha içinde kullanılmalıdır.");
    }

    return contextinKendisi;
}