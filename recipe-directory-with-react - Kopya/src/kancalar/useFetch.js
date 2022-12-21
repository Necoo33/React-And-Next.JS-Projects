import { useState, useEffect, useRef } from "react";

export function useFetch(linkKistasi, muameleNevi = "GET"){
    let [danis, danisAyarla] = useState(null);
    let [danisBekleniyor, DanisinBeklendiginiGoster] = useState(false);
    let [hata, hataIkazMesajiVer] = useState(null);
    let [muameleSekli, muameleSekliAyarla] = useState(null)


    function postMuamelesi(kistas){
        muameleSekliAyarla({method: "POST", 
        headers: { 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(kistas)
        })
    }

    useEffect(() => {
        let murakib = new AbortController();

        async function danisiCelbet(yapilacakMuamele){
            DanisinBeklendiginiGoster(true);

            try{
                let kabul = await fetch(linkKistasi, {...yapilacakMuamele, signal: murakib.signal});
                let cevab = await kabul.json();

                if(kabul.ok === false){
                    throw new Error(kabul.statusText);                  
                }

                DanisinBeklendiginiGoster(false);
                danisAyarla(cevab);
                hataIkazMesajiVer(null);
            } catch(hataninKendisi){
                if(hataninKendisi === "AbortError"){
                    console.log("daniş celbi durduruldu.");
                } else{
                    DanisinBeklendiginiGoster(false);
                    hataIkazMesajiVer("Daniş celb olunamadı");
                    console.log(hataninKendisi.message);
                }
            };


        };

        if(muameleNevi === "GET"){
            danisiCelbet();
        }

        if(muameleNevi === "POST" && muameleSekli){
            danisiCelbet(muameleSekli);
        }

        return function(){
            murakib.abort()
        } 

    }, [linkKistasi, muameleNevi, muameleSekli]);

    return { danis: danis,
            danisBekleniyor: danisBekleniyor,
            hata: hata,
            postMuamelesi};
};
