import React, { useEffect, useState } from 'react';
import "./Anasayfa.css";
import { useFetch } from '../../kancalar/useFetch';
import { useTheme } from '../../kancalar/useTheme';
import { firestoreDanisMahfazasi } from '../../firebase/config';
import deleteTusu from "../../resimler/deleteTusu.svg"
import { useHistory } from 'react-router-dom';

export default function Anasayfa() {
  let { danis, danisBekleniyor, hata} = useFetch("http://localhost:3000/yemekTarifleri");
  let {renkBir, renkIki, renkleriDegistir} = useTheme();

  let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");

  /* Firebase'in daniş mahfazasından daniş çekmek için kullanılacak olan kodlar:*/

  let [danisIki, danisIkiAyarla] = useState(null);
  let [danisBekleniyorIki, danisBekleniyorIkiAyarla] = useState(false);
  let [hataIki, hataIkiAyarla] = useState(false);

  // Aşşağıdaki ufulede şe'nî zaman muakkibi yok. o sebeble onu şerhledim, altındakinde olacak.

  /*useEffect(function(){
    danisBekleniyorIkiAyarla(true);

    firestoreDanisMahfazasi.collection("tarifler").get().then(function(kistas){
      if(kistas.empty){
        hataIkiAyarla("gösterilecek tarif yok");
        danisBekleniyorIkiAyarla(false);
      } else{
        let danis = [];
        kistas.docs.forEach(function(kistas){
          danis.push( { ...kistas.data(), id: kistas.id } );
        });
        danisIkiAyarla(danis);
        danisBekleniyorIkiAyarla(false);
      }
    }).catch(function(hata){
      hataIkiAyarla(hata.message);
      danisBekleniyorIkiAyarla(false);
    })
  }, []);*/

  useEffect(function(){
    danisBekleniyorIkiAyarla(true);

    let takibdenCik = firestoreDanisMahfazasi.collection("tarifler").onSnapshot(function(kistas){
      if(kistas.empty){
        hataIkiAyarla("gösterilecek tarif yok");
        danisBekleniyorIkiAyarla(false);
      } else{
        let danis = [];
        kistas.docs.forEach(function(kistas){
          danis.push( { ...kistas.data(), id: kistas.id } );
        });
        danisIkiAyarla(danis);
        danisBekleniyorIkiAyarla(false);
      }
    }, function(hata){
      hataIkiAyarla(true);
      danisBekleniyorIkiAyarla(false);
      console.log(hata.message)
    })

    return function(){
      takibdenCik()
    }
    
  }, []);

  /* daniş'i firebase'deki daniş mahfazasından çekmek için bu mahfazaya vasıl olmak için kullandığımız useEffect kancasının içinde
     daha evvelki kodumuzdaki değerlere karşılık gelen unsurları ekledik.*/

  let anaSayfayaDon = useHistory(); 

  function tarifSil(kistas){
    firestoreDanisMahfazasi.collection("tarifler").doc(kistas).delete();
    anaSayfayaDon.push("/")
  }

  return (
    <div>
      <div className='anasayfa-ust-serlevhasi'>
       {mahalliMahfazaUnsuru === "green" && <h1 className='serlevha' style={ {color: mahalliMahfazaUnsuru} }>Anasayfa</h1>}
       {mahalliMahfazaUnsuru === "navy" && <h1 className='serlevha' style={ {color: mahalliMahfazaUnsuru} }>Anasayfa</h1>}
       {mahalliMahfazaUnsuru === "brown" && <h1 className='serlevha' style={ {color: mahalliMahfazaUnsuru} }>Anasayfa</h1>}
        
       {mahalliMahfazaUnsuru === "green" && <h2 className='alt-serlevha' style={ {color: mahalliMahfazaUnsuru} }>Yemek Tarifleri</h2>}
       {mahalliMahfazaUnsuru === "navy" && <h2 className='alt-serlevha' style={ {color: mahalliMahfazaUnsuru} }>Yemek Tarifleri</h2>}
       {mahalliMahfazaUnsuru === "brown" && <h2 className='alt-serlevha' style={ {color: mahalliMahfazaUnsuru} }>Yemek Tarifleri</h2>}
        
        {/*danisBekleniyor*/danisBekleniyorIki && <div>Yükleniyor...</div>}
        {/*hata*/hataIki && <div>{hataIki}</div>}

        <div className='grid-serlevhasi'>
          {/*danis*/danisIki && /*danis*/danisIki.map(function(kistas){
            return (
              <div>
                {mahalliMahfazaUnsuru === "green" && <div> 
                  <div className='yemek-tarifi-kutusu' key={kistas.id} style={ {backgroundColor: mahalliMahfazaUnsuru, borderColor: mahalliMahfazaUnsuru} }>
                    <div className='yemek-tarifi-kutusu-ust-kisim'>
                      <h2>{kistas.tarifIsmi}</h2>
                      <img src={deleteTusu} alt="delete tuşu" onClick={() => tarifSil(kistas.id)} />
                    </div>
                    <h3>{`${kistas.malzemeler.join(", ").slice(0, 25)}...`}</h3>
                    <h3>Şu müddetde hazır olur: {kistas.hazirlanisMuddeti}</h3>
                    <a href={`/tarifler/${kistas.id}`}>Yapılışını Okuyun...</a>
                  </div>
                </div>}

                {mahalliMahfazaUnsuru === "brown" && <div>
                  <div className='yemek-tarifi-kutusu' key={kistas.id} style={ {backgroundColor: mahalliMahfazaUnsuru, borderColor: mahalliMahfazaUnsuru} }>
                    <div className='yemek-tarifi-kutusu-ust-kisim'>
                      <h2>{kistas.tarifIsmi}</h2>
                      <img src={deleteTusu} alt="delete tuşu" onClick={() => tarifSil(kistas.id)}/>
                    </div>
                    <h3>{kistas.malzemeler.join(", ").slice(0, 25)}</h3>
                    <h3>Şu müddetde hazır olur: {kistas.hazirlanisMuddeti}</h3>
                    <a href={`/tarifler/${kistas.id}`}>Yapılışını Okuyun...</a>
                  </div>
                </div>}

                {mahalliMahfazaUnsuru === "navy" && <div> 
                  <div className='yemek-tarifi-kutusu' key={kistas.id} style={ {backgroundColor: mahalliMahfazaUnsuru, borderColor: mahalliMahfazaUnsuru} }>
                    <div className='yemek-tarifi-kutusu-ust-kisim'>
                      <h2>{kistas.tarifIsmi}</h2>
                      <img src={deleteTusu} alt="delete tuşu" onClick={() => tarifSil(kistas.id)}/>
                    </div>
                    <h3>{kistas.malzemeler.join(", ").slice(0, 25)}</h3>
                    <h3>Şu müddetde hazır olur: {kistas.hazirlanisMuddeti}</h3>
                    <a href={`/tarifler/${kistas.id}`}>Yapılışını Okuyun...</a>
                  </div>
                </div>}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
