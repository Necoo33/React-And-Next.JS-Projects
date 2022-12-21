import "./TarifEkle.css";
import { useRef, useState, useEffect } from 'react';
import { useFetch } from '../../kancalar/useFetch';
import { useHistory } from 'react-router-dom';
import { useTheme } from "../../kancalar/useTheme";
import { firestoreDanisMahfazasi } from "../../firebase/config";


export default function TarifEkle() {
  let formSecicisi = useRef();
  let malzemeKutusu = useRef();
  let {danis, danisBekleniyor, hata, postMuamelesi} = useFetch("http://localhost:3000/yemekTarifleri", "POST");
  let [tarifIsmi, tarifIsmiAyarla] = useState("");
  let [yapilis, yapilisAyarla] = useState("");
  let [muddet, muddetAyarla] = useState("");
  let [malzemeIsmi, malzemeIsmiAyarla] = useState("");
  let [malzeme, malzemeAyarla] = useState([]);
  let anaSayfayaDon = useHistory();
  let {renkBir, renkIki, renkleriDegistir} = useTheme();

  let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");


  class yeniTarifTeskilEt{
    constructor(){
      this.tarifIsmi = tarifIsmi.trim();
      this.malzemeler = malzeme;
      this.hazirlanisMuddeti = `${muddet} dakika`;
      this.yapilisi = yapilis;
      this.id = `${Math.trunc(Math.random()*100000)}`;
    }
  }

  function bilgileriEkle(kistas){
    kistas.preventDefault();

    let yeniTarif = new yeniTarifTeskilEt();

    postMuamelesi(yeniTarif);

    document.querySelector(".tarif-ismi-yazisi").textContent = "";
    document.querySelector(".malzeme-yazisi").textContent = "";
    document.querySelector(".dakika-yazisi").textContent = "";
    document.querySelector("textarea").textContent = "";

  }

  useEffect(function(){
    if(danis){
      anaSayfayaDon.push("/");
    }
  }, [danis, anaSayfayaDon]);

  function malzemeEkle(kistas){
    kistas.preventDefault();

    malzeme.push(document.querySelector(".malzeme-yazisi").value);

    let yeniMalzeme = malzemeIsmi.trim();

    if(yeniMalzeme && !malzeme.includes(yeniMalzeme)){
      malzemeAyarla(kistas => [...kistas, yeniMalzeme]);
    };

    malzemeIsmiAyarla("");

    document.querySelector(".malzeme-yazisi").focus();
  }

  /* Aşşağıda burada yapılanların firebase daniş mahfazasıyla yapılışı var:*/

  async function bilgileriEkleIki(kistas){
    kistas.preventDefault();

    let yeniTarif = { tarifIsmi: tarifIsmi.trim(), malzemeler: malzeme, hazirlanisMuddeti: `${muddet} dakika`, yapilis: yapilis }

    try{
      if(yeniTarif.tarifIsmi === "" || yeniTarif.malzemeler === "" || yeniTarif.hazirlanisMuddeti === "" || yeniTarif.yapilis === ""){
        throw new Error()
      } else{
        await firestoreDanisMahfazasi.collection("tarifler").add(yeniTarif);
        anaSayfayaDon.push("/");
      }
    } catch(hata){
      console.log(hata);
    } finally{
      document.querySelector(".tarif-ismi-yazisi").textContent = "";
      document.querySelector(".malzeme-yazisi").textContent = "";
      document.querySelector(".dakika-yazisi").textContent = "";
      document.querySelector("textarea").textContent = "";
    }

  }

  return (
    <div className='tarif-eklemek-yeri'>
      {mahalliMahfazaUnsuru === "green" && <form ref={formSecicisi} onSubmit={/*bilgileriEkle*/bilgileriEkleIki}>
        <label>
          <span style={ { color: mahalliMahfazaUnsuru} }>Tarif İsmi: </span> 
          <input style={ { color: mahalliMahfazaUnsuru} } required className='tarif-ismi-yazisi' type="text" name="tarifismi" onChange={(kistas) => tarifIsmiAyarla(kistas.target.value)} value={tarifIsmi}/>
        </label>
        <br/>
        <label> 
          <span style={ { color: mahalliMahfazaUnsuru} }>Malzemeler: </span>
          <input style={ { color: mahalliMahfazaUnsuru} } className='malzeme-yazisi' type="text" name="malzemeler" onChange={(kistas) => malzemeIsmiAyarla(kistas.target.value)} value={malzemeIsmi}/>
        </label>
        <br/>
        <button style={ { backgroundColor: mahalliMahfazaUnsuru} } onClick={malzemeEkle}>Malzeme Ekle</button>
        <br/>
        <p>
          <span style={ { color: mahalliMahfazaUnsuru } }>Lazım olan malzemeler: </span>
          {(malzeme.length > 0) && malzeme.map(function(kistas){
              return (
                <span style={ { color: mahalliMahfazaUnsuru} } className='yeni-malzeme-unsuru' key={Math.random()*1000000000}>{kistas}, </span>
              )
          })}
        </p>
        <label>
          <span style={ { color: mahalliMahfazaUnsuru} }>Hazırlanış Müddeti: </span>
          <input style={ { color: mahalliMahfazaUnsuru} } className="dakika-yazisi" required type="number" name="hazirlanismuddeti" onChange={(kistas) => muddetAyarla(kistas.target.value)} value={muddet}/>
        </label>
        <br/>
        <label style={ { color: mahalliMahfazaUnsuru} } htmlFor="yapilisi">Yapılışı:</label>
        <br/>
        <textarea required name='yapilisi' cols="30" rows="10" placeholder='Tarif Ekleyin' onChange={(kistas) => yapilisAyarla(kistas.target.value)} value={yapilis}></textarea>
        <br/>
        <input style={ { backgroundColor: mahalliMahfazaUnsuru} } className='yolla-tusu' type="submit" value="Ekle"/>

      </form>}

      {mahalliMahfazaUnsuru === "navy" && <form ref={formSecicisi} onSubmit={/*bilgileriEkle*/bilgileriEkleIki}>
        <label>
          <span style={ { color: mahalliMahfazaUnsuru} }>Tarif İsmi: </span> 
          <input style={ { color: mahalliMahfazaUnsuru} } required className='tarif-ismi-yazisi' type="text" name="tarifismi" onChange={(kistas) => tarifIsmiAyarla(kistas.target.value)} value={tarifIsmi}/>
        </label>
        <br/>
        <label> 
          <span style={ { color: mahalliMahfazaUnsuru} }>Malzemeler: </span>
          <input style={ { color: mahalliMahfazaUnsuru} } className='malzeme-yazisi' type="text" name="malzemeler" onChange={(kistas) => malzemeIsmiAyarla(kistas.target.value)} value={malzemeIsmi}/>
        </label>
        <br/>
        <button style={ { backgroundColor: mahalliMahfazaUnsuru} } onClick={malzemeEkle}>Malzeme Ekle</button>
        <br/>
        <p>
          <span style={ { color: mahalliMahfazaUnsuru } }>Lazım olan malzemeler: </span>
          {(malzeme.length > 0) && malzeme.map(function(kistas){
              return (
                <span style={ { color: mahalliMahfazaUnsuru} } className='yeni-malzeme-unsuru' key={Math.random()*1000000000}>{kistas}, </span>
              )
          })}
        </p>
        <label>
          <span style={ { color: mahalliMahfazaUnsuru} }>Hazırlanış Müddeti: </span>
          <input style={ { color: mahalliMahfazaUnsuru} } className="dakika-yazisi" required type="number" name="hazirlanismuddeti" onChange={(kistas) => muddetAyarla(kistas.target.value)} value={muddet}/>
        </label>
        <br/>
        <label style={ { color: mahalliMahfazaUnsuru} } htmlFor="yapilisi">Yapılışı:</label>
        <br/>
        <textarea required name='yapilisi' cols="30" rows="10" placeholder='Tarif Ekleyin' onChange={(kistas) => yapilisAyarla(kistas.target.value)} value={yapilis}></textarea>
        <br/>
        <input style={ { backgroundColor: mahalliMahfazaUnsuru} } className='yolla-tusu' type="submit" value="Ekle"/>

      </form>}

      {mahalliMahfazaUnsuru === "brown" && <form ref={formSecicisi} onSubmit={/*bilgileriEkle*/bilgileriEkleIki}>
        <label>
          <span style={ { color: mahalliMahfazaUnsuru} }>Tarif İsmi: </span> 
          <input style={ { color: mahalliMahfazaUnsuru} } required className='tarif-ismi-yazisi' type="text" name="tarifismi" onChange={(kistas) => tarifIsmiAyarla(kistas.target.value)} value={tarifIsmi}/>
        </label>
        <br/>
        <label> 
          <span style={ { color: mahalliMahfazaUnsuru} }>Malzemeler: </span>
          <input style={ { color: mahalliMahfazaUnsuru} } className='malzeme-yazisi' type="text" name="malzemeler" onChange={(kistas) => malzemeIsmiAyarla(kistas.target.value)} value={malzemeIsmi}/>
        </label>
        <br/>
        <button style={ { backgroundColor: mahalliMahfazaUnsuru} } onClick={malzemeEkle}>Malzeme Ekle</button>
        <br/>
        <p>
          <span style={ { color: mahalliMahfazaUnsuru } }>Lazım olan malzemeler: </span>
          {(malzeme.length > 0) && malzeme.map(function(kistas){
              return (
                <span style={ { color: mahalliMahfazaUnsuru} } className='yeni-malzeme-unsuru' key={Math.random()*1000000000}>{kistas}, </span>
              )
          })}
        </p>
        <label>
          <span style={ { color: mahalliMahfazaUnsuru} }>Hazırlanış Müddeti: </span>
          <input style={ { color: mahalliMahfazaUnsuru} } className="dakika-yazisi" required type="number" name="hazirlanismuddeti" onChange={(kistas) => muddetAyarla(kistas.target.value)} value={muddet}/>
        </label>
        <br/>
        <label style={ { color: mahalliMahfazaUnsuru} } htmlFor="yapilisi">Yapılışı:</label>
        <br/>
        <textarea required name='yapilisi' cols="30" rows="10" placeholder='Tarif Ekleyin' onChange={(kistas) => yapilisAyarla(kistas.target.value)} value={yapilis}></textarea>
        <br/>
        <input style={ { backgroundColor: mahalliMahfazaUnsuru} } className='yolla-tusu' type="submit" value="Ekle"/>

      </form>}
    </div>
  )
}
