import React from 'react'
import "./TariflerTamListe.css"
import { useFetch } from '../../kancalar/useFetch'
import { useTheme } from '../../kancalar/useTheme';

export default function TariflerTamListe() {
    let { danis, danisBekleniyor, hata } = useFetch("http://localhost:3000/yemekTarifleri");
    let { renkBir, renkIki, renkleriDegistir } = useTheme();
    
    let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");

  return (
    <div>
        {danisBekleniyor && <div>{danisBekleniyor}</div>}
        {hata && <div>{hata}</div>}

        {mahalliMahfazaUnsuru === "green" && danis && danis.map(function(kistas){
            return (
                <div className='tek-yemek-tarifi' key={kistas.id}>
                    <h2 style={ { color: mahalliMahfazaUnsuru } }>{kistas.tarifIsmi}</h2>
                    <h3 style={ { color: mahalliMahfazaUnsuru } }>{kistas.malzemeler.join(", ")}</h3>
                    <h3 style={ { color: mahalliMahfazaUnsuru } }>{kistas.hazirlanisMuddeti}</h3>

                    <p style={ { color: mahalliMahfazaUnsuru } }>{kistas.yapilisi}</p>
                </div>
            )
        })}

        {mahalliMahfazaUnsuru === "navy" && danis && danis.map(function(kistas){
            return (
                <div className='tek-yemek-tarifi' key={kistas.id}>
                    <h2 style={ { color: mahalliMahfazaUnsuru } }>{kistas.tarifIsmi}</h2>
                    <h3 style={ { color: mahalliMahfazaUnsuru } }>{kistas.malzemeler.join(", ")}</h3>
                    <h3 style={ { color: mahalliMahfazaUnsuru } }>{kistas.hazirlanisMuddeti}</h3>

                    <p style={ { color: mahalliMahfazaUnsuru } }>{kistas.yapilisi}</p>
                </div>
            )
        })}

        {mahalliMahfazaUnsuru === "brown" && danis && danis.map(function(kistas){
            return (
                <div className='tek-yemek-tarifi' key={kistas.id}>
                    <h2 style={ { color: mahalliMahfazaUnsuru } }>{kistas.tarifIsmi}</h2>
                    <h3 style={ { color: mahalliMahfazaUnsuru } }>{kistas.malzemeler.join(", ")}</h3>
                    <h3 style={ { color: mahalliMahfazaUnsuru } }>{kistas.hazirlanisMuddeti}</h3>

                    <p style={ { color: mahalliMahfazaUnsuru } }>{kistas.yapilisi}</p>
                </div>
            )
        })}
    </div>
  )
}