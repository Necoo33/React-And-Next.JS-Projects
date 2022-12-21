import './App.css';
import Anasayfa from './suhuf/anasayfa/Anasayfa';
import TarifEkle from './suhuf/tarif ekle/TarifEkle';
import Ara from './suhuf/ara/Ara';
import Tarifler from './suhuf/tarifler/Tarifler'
import TariflerTamListe from './suhuf/tarifler/TariflerTamListe';
import UstKisim from './ilaveler/UstKisim';
import AltKisim from './ilaveler/AltKisim';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useFetch } from './kancalar/useFetch';
import TemaMuntehibi from './ilaveler/TemaMuntehibi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UstKisim/>

        <TemaMuntehibi/>

        <Switch>
          <Route exact path="/">
            <Anasayfa/>
          </Route>

          <Route exact path="/tarif-ekle">
            <TarifEkle/>
          </Route>

          <Route exact path="/ara">
            <Ara/>
          </Route>

          <Route exact path="/tarifler/:id">
            <Tarifler/>
          </Route>

          <Route exact path="/tarifler">
            <TariflerTamListe/>
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>

        <AltKisim/>
      </BrowserRouter>
    </div>
  );
}

export default App;
