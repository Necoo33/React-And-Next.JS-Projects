import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../kancalar/useFetch';
import "./Ara.css";
import "../anasayfa/Anasayfa.css";
import { useTheme } from '../../kancalar/useTheme';
import { firestoreDanisMahfazasi } from '../../firebase/config';


export default function Ara() {
  let {renkBir, renkIki, renkleriDegistir} = useTheme();

  /* Bu kod bende arıza yapmışdı, sebebini buldum. Query'yi aldığımız UstKisim.js sahifesinde aramak girdisinin "name" adeti
     ile query yazısındaki "?" ve "=" işaretinin arasındaki yazı aynı olmalıymış. */
  let queryYazisi = useLocation().search;
  let queryKistasi = new URLSearchParams(queryYazisi);
  let queryninKendisi = queryKistasi.get("aramakyeri");
  let { danis, danisBekleniyor, hata } = useFetch(`http://localhost:3000/yemekTarifleri?q=${queryninKendisi}`);

  
  let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");

  /* Aşşağıda aynı şeylerin firebase'deki daniş mahfazasına bağlanarak yapılışını görüyoruz:*/

  let rastgeleNesne = {isim: "john", soyisim: "doe" };

  console.log(rastgeleNesne);

  let [danisIki, danisIkiAyarla] = useState(null);
  let [danisBekleniyorIki, danisBekleniyorIkiAyarla] = useState(false);
  let [hataIki, hataIkiAyarla] = useState(false);

  useEffect(function(){
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

          danis.forEach(function(kistas){
            if(JSON.stringify(kistas).includes(queryninKendisi)){
              /*Object.assign(kistas, {dogru: true});*/
              kistas.dogru = true;
            }
          });

          let danisleriFiltrele = danis.filter(function(kistas){
            return kistas.dogru === true;
          });

          danisIkiAyarla(danisleriFiltrele);
 
          danisBekleniyorIkiAyarla(false);
      }
    }).catch(function(hata){
      hataIkiAyarla(hata.message);
      danisBekleniyorIkiAyarla(false);
    })
  }, []);
 

  return (
      <div className='anasayfa-ust-serlevhasi'>
        {mahalliMahfazaUnsuru === "green" && <h1 style={ { color: mahalliMahfazaUnsuru } } className='serlevha'>Aradığınıza intibak eden tarifler</h1>}
        {mahalliMahfazaUnsuru === "brown" && <h1 style={ { color: mahalliMahfazaUnsuru } } className='serlevha'>Aradığınıza intibak eden tarifler</h1>}
        {mahalliMahfazaUnsuru === "navy" && <h1 style={ { color: mahalliMahfazaUnsuru } } className='serlevha'>Aradığınıza intibak eden tarifler</h1>}

        {mahalliMahfazaUnsuru === "green" && /*danisBekleniyor*/danisBekleniyorIki && <div style={ {color: mahalliMahfazaUnsuru} }>Yükleniyor...</div>}
        {mahalliMahfazaUnsuru === "brown" && /*danisBekleniyor*/danisBekleniyorIki && <div style={ {color: mahalliMahfazaUnsuru} }>Yükleniyor...</div>}
        {mahalliMahfazaUnsuru === "navy" && /*danisBekleniyor*/danisBekleniyorIki && <div style={ {color: mahalliMahfazaUnsuru} }>Yükleniyor...</div>}

        {mahalliMahfazaUnsuru === "green" && /*hata*/hataIki && <div style={ {color: mahalliMahfazaUnsuru} }>{/*hata*/hataIki}</div>}
        {mahalliMahfazaUnsuru === "navy" && /*hata*/hataIki && <div style={ {color: mahalliMahfazaUnsuru} }>{/*hata*/hataIki}</div>}
        {mahalliMahfazaUnsuru === "brown" && /*hata*/hataIki && <div style={ {color: mahalliMahfazaUnsuru} }>{/*hata*/hataIki}</div>}

        {(/*danis*/danisIki && /*danis*/danisIki.length === 0) && 
          <div className='grid-serlevhasi'>
            <div className='tarif-bulunamadi-yazisi'>

              {mahalliMahfazaUnsuru === "green" && <h1 style={ {color: mahalliMahfazaUnsuru } }>Aradığınız şeyle alakalı tarif bulunamadı.</h1>}
              {mahalliMahfazaUnsuru === "navy" && <h1 style={ {color: mahalliMahfazaUnsuru } }>Aradığınız şeyle alakalı tarif bulunamadı.</h1>}
              {mahalliMahfazaUnsuru === "brown" && <h1 style={ {color: mahalliMahfazaUnsuru } }>Aradığınız şeyle alakalı tarif bulunamadı.</h1>}

            </div>
          </div>
         }

        <div className='grid-serlevhasi'>
          {/*danis*/danisIki && /*danis*/danisIki.map(function(kistas){
                return (
                  <div>
                    {mahalliMahfazaUnsuru === "green" && <div className='yemek-tarifi-kutusu' key={kistas.id} style={ {backgroundColor: mahalliMahfazaUnsuru, borderColor: mahalliMahfazaUnsuru} }>
                      <h2>{kistas.tarifIsmi}</h2>
                      <h3>{kistas.malzemeler.join(", ")}</h3>
                      <h3>Şu müddetde hazır olur: {kistas.hazirlanisMuddeti}</h3>
                      <a href={`/tarifler/${kistas.id}`}>Yapılışını Okuyun...</a>
                    </div>}

                    {mahalliMahfazaUnsuru === "navy" && <div className='yemek-tarifi-kutusu' key={kistas.id} style={ {backgroundColor: mahalliMahfazaUnsuru, borderColor: mahalliMahfazaUnsuru} }>
                      <h2>{kistas.tarifIsmi}</h2>
                      <h3>{kistas.malzemeler.join(", ")}</h3>
                      <h3>Şu müddetde hazır olur: {kistas.hazirlanisMuddeti}</h3>
                      <a href={`/tarifler/${kistas.id}`}>Yapılışını Okuyun...</a>
                    </div>}

                    {mahalliMahfazaUnsuru === "brown" && <div className='yemek-tarifi-kutusu' key={kistas.id} style={ {backgroundColor: mahalliMahfazaUnsuru, borderColor: mahalliMahfazaUnsuru} }>
                      <h2>{kistas.tarifIsmi}</h2>
                      <h3>{kistas.malzemeler.join(", ")}</h3>
                      <h3>Şu müddetde hazır olur: {kistas.hazirlanisMuddeti}</h3>
                      <a href={`/tarifler/${kistas.id}`}>Yapılışını Okuyun...</a>
                    </div>}
                  </div>
                )
          })}
        </div>
      </div>
  )
}
