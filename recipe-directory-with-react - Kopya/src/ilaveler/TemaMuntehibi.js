import "./TemaMuntehibi.css";
import React, { useCallback, useEffect } from 'react'
import { useTheme } from "../kancalar/useTheme";

let temaRenkleri = ["green", "brown", "navy"];

export default function TemaMuntehibi() {
    let { renkBir, renkIki, renkleriDegistir } = useTheme();


        /*renkleriDegistir(mahalliMahfazaUnsuru);*/


    
  return (
    <div className="tema-secici">
        <div className="tema-tuslari">
            {temaRenkleri.map(function(kistas){
                return (
                    <input type="radio"
                           checked={false}
                           onChange={() => console.log(kistas)}
                           key={kistas} 
                           value={kistas}
                           onFocus={function(){
                            localStorage.setItem("renkBir Degeri", kistas);
                            renkleriDegistir(kistas)
                           }}
                           style={ {backgroundColor: kistas} }/>
                )
            })}
        </div>
    </div>
  )
}
