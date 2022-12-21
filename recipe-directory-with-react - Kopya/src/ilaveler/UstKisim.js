import React, { useState, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import "./UstKisim.css"
import { TemaContexti } from '../context/TemaContexti';
import { useTheme } from '../kancalar/useTheme';

export default function UstKisim() {
    let [aramakKismiDegeri, aramakKismiDegeriAyarla] = useState("");
    let aramakSahifesineYolla = useHistory();
    let { renkBir, renkIki, renkleriDegistir } = useTheme();

    let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");


    function aramayiYap(){
        /* Dikkat et, eğer bir query çekecek isen ve bu query'yi çekeceğin aramak girdisinin bir "name" prop'u varsa query'nin
           "?" ve "=" değerlerinin arasındaki yazı "name" prop'uyla aynı olmaya mecburdur. Diğer sahifede "get" ufulesini bağladığın
           koddaki aynı ufule'nin kıstasında da aynı yazı olmalıdır.*/ 
        aramakSahifesineYolla.push(`/ara/?aramakyeri=${aramakKismiDegeri}`);
    }

    /* Dikkat et, useReducer ile bir rengi değişdirebilmek istiyorsan onun bu onun yanında getirdiğin mübeddili de css vasfı
    verirken kullanmış olman lazım, faraza altdaki style prop'u olmasa sağdaki ufule çalışmaz. */
  return (
    /*<div ref={flexRefi} className='flex-serlevhasi' style={ { backgroundColor: renkBir } } value="1">*/
    <div>
    {mahalliMahfazaUnsuru === "green" && <div className='flex-serlevhasi' style={ { backgroundColor: mahalliMahfazaUnsuru } }>
            <div className='logo'>
                <a href='/'>Necdet'in Tarifleri</a>
            </div>

            <div className='aramak-kismi'>
                <form onSubmit={aramayiYap}>
                    <label htmlFor="aramakyeri">Tarif Arayın:</label>
                    <input type="search" 
                        name='aramakyeri'
                        onChange={(kistas) => aramakKismiDegeriAyarla(kistas.target.value)}
                        required/>
                    <input type="submit" value="Ara" style={ { backgroundColor: "#005800" } }/>
                </form>
            </div>

            <div className='tarif-ekle-tusu'>
                <button style={ { backgroundColor: "#005800" } }><a href='/tarif-ekle'>Tarif Ekle</a></button>
            </div>
        </div>}

        {mahalliMahfazaUnsuru === "navy" && <div className='flex-serlevhasi' style={ { backgroundColor: mahalliMahfazaUnsuru } }>
            <div className='logo'>
                <a href='/'>Necdet'in Tarifleri</a>
            </div>

            <div className='aramak-kismi'>
                <form onSubmit={aramayiYap}>
                    <label htmlFor="aramakyeri">Tarif Arayın:</label>
                    <input type="search" 
                        name='aramakyeri'
                        onChange={(kistas) => aramakKismiDegeriAyarla(kistas.target.value)}
                        required/>
                    <input type="submit" value="Ara" style={ { backgroundColor: "#010154" } }/>
                </form>
            </div>

            <div className='tarif-ekle-tusu'>
                <button style={ { backgroundColor: "#010154" } }><a href='/tarif-ekle'>Tarif Ekle</a></button>
            </div>
        </div>}

        {mahalliMahfazaUnsuru === "brown" && <div className='flex-serlevhasi' style={ { backgroundColor: mahalliMahfazaUnsuru } }>
            <div className='logo'>
                <a href='/'>Necdet'in Tarifleri</a>
            </div>

            <div className='aramak-kismi'>
                <form onSubmit={aramayiYap}>
                    <label htmlFor="aramakyeri">Tarif Arayın:</label>
                    <input type="search" 
                        name='aramakyeri'
                        onChange={(kistas) => aramakKismiDegeriAyarla(kistas.target.value)}
                        required/>
                    <input type="submit" value="Ara" style={ { backgroundColor: "#6a0404" } }/>
                </form>
            </div>

            <div className='tarif-ekle-tusu'>
                <button style={ { backgroundColor: "#6a0404" } }><a href='/tarif-ekle'>Tarif Ekle</a></button>
            </div>
        </div>}
    </div>
  )
}
