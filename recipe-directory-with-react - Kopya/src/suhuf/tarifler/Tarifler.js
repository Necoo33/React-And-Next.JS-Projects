import React, { useEffect, useState } from 'react'
import "./Tarifler.css"
import { useFetch } from '../../kancalar/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../kancalar/useTheme';
import { firestoreDanisMahfazasi } from '../../firebase/config';

export default function Tarifler() {
  let { id } = useParams();
  let idNumarasi = "http://localhost:3000/yemekTarifleri" + "/" + id;
  let { danis, danisBekleniyor, hata } = useFetch(idNumarasi);
  let { renkBir, renkIki, renkleriDegistir } = useTheme();
  
  let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");

  /* Aşşağıda bu sahifede daha evvel yapılanların firebase daniş mahfazası ile yapılışı gösteriliyor:*/

  let [danisIki, danisIkiAyarla] = useState(null);
  let [danisBekleniyorIki, danisBekleniyorIkiAyarla] = useState(false);
  let [hataIki, hataIkiAyarla] = useState(false);

  useEffect(function(){

    firestoreDanisMahfazasi.collection("tarifler").doc(id).get().then(function(kistas){
      if(kistas.exists){
        danisBekleniyorIkiAyarla(false)
        danisIkiAyarla(kistas.data());
      } else{
        danisBekleniyorIki(false);
        throw new Error();
      }
    }).catch(function(hata){
      hataIkiAyarla(true);
    });

  }, [id]);

  function tecdidEtmek(tarifIsmi, malzemeler, hazirlanisMuddeti, yapilis){

    firestoreDanisMahfazasi.collection("tarifler").doc(id).update(
      { tarifIsmi: tarifIsmi, 
        malzemeler: malzemeler, 
        hazirlanisMuddeti: hazirlanisMuddeti, 
        yapilis: yapilis, 
        id: Math.random()*1000000000
      });
  }



  return (
    <div className='tarifler-ust-serlevhasi'>
      {/*danisBekleniyor*/danisBekleniyorIki && <div>Yükleniyor...</div>}
      {/*hata*/hataIki && <div>{/*hata*/hataIki}</div>}

      {mahalliMahfazaUnsuru === "green" && /*danis*/danisIki && <div className='tarifler-tum-bilgiler'>
                  
                  <h2 style={ { color: mahalliMahfazaUnsuru } }>{/*danis*/danisIki.tarifIsmi}</h2>
                  <h3 style={ { color: mahalliMahfazaUnsuru } }>Kullanılacak Malzemeler: {/*danis*/danisIki.malzemeler.join(", ")}</h3>
                  <h3 style={ { color: mahalliMahfazaUnsuru } }>Ne kadar müddetde hazır olur: {/*danis*/danisIki.hazirlanisMuddeti}</h3>

                  <p style={ { color: mahalliMahfazaUnsuru } }>{/*danis*/danisIki.yapilis/*i*/}</p>

                  {/*<div className='tus-flex-serlevhasi'>
                    <button style={ {backgroundColor: mahalliMahfazaUnsuru} } className='tecdid-et-tusu'>Tecdid Et</button>
                    </div>*/}

                </div>
      }

      {mahalliMahfazaUnsuru === "navy" && /*danis*/danisIki && <div className='tarifler-tum-bilgiler'>
                  
                  <h2 style={ { color: mahalliMahfazaUnsuru } }>{/*danis*/danisIki.tarifIsmi}</h2>
                  <h3 style={ { color: mahalliMahfazaUnsuru } }>Kullanılacak Malzemeler: {/*danis*/danisIki.malzemeler.join(", ")}</h3>
                  <h3 style={ { color: mahalliMahfazaUnsuru } }>Ne kadar müddetde hazır olur: {/*danis*/danisIki.hazirlanisMuddeti}</h3>

                  <p style={ { color: mahalliMahfazaUnsuru } }>{/*danis*/danisIki.yapilis/*i*/}</p>

                  {/*<div className='tus-flex-serlevhasi'>
                    <button style={ {backgroundColor: mahalliMahfazaUnsuru} } className='tecdid-et-tusu'>Tecdid Et</button>
                    </div>*/}

                </div>
      }

      {mahalliMahfazaUnsuru === "brown" && /*danis*/danisIki && <div className='tarifler-tum-bilgiler'>
                  
                  <h2 style={ { color: mahalliMahfazaUnsuru } }>{/*danis*/danisIki.tarifIsmi}</h2>
                  <h3 style={ { color: mahalliMahfazaUnsuru } }>Kullanılacak Malzemeler: {/*danis*/danisIki.malzemeler.join(", ")}</h3>
                  <h3 style={ { color: mahalliMahfazaUnsuru } }>Ne kadar müddetde hazır olur: {/*danis*/danisIki.hazirlanisMuddeti}</h3>

                  <p style={ { color: mahalliMahfazaUnsuru } }>{/*danis*/danisIki.yapilis/*i*/}</p>

                  {/*<div className='tus-flex-serlevhasi'>
                    <button style={ {backgroundColor: mahalliMahfazaUnsuru} } className='tecdid-et-tusu'>Tecdid Et</button>
                    </div>*/}

                </div>
      }
    </div>
  )
}
