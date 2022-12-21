import React, { useState } from 'react';
import { useTheme } from '../kancalar/useTheme';
import "./AltKisim.css";
import { TemaContexti } from '../context/TemaContexti';

export default function AltKisim() {
  let { renkBir, renkIki, renkleriDegistir } = useTheme();
  let [yesil, yesilYap] = useState("green");
  let [laciverd, laciverdYap] = useState("navy");
  let [kahverengi, kahverengiYap] = useState("brown");

  let mahalliMahfazaUnsuru = localStorage.getItem("renkBir Degeri");

  return (
    <div>
      {mahalliMahfazaUnsuru === "green" && <div className='altKisim' style={ { backgroundColor: mahalliMahfazaUnsuru} }>
          <p>
              Bu website Necdet Arda Etiman tarafından tezyin edildi.
          </p>
      </div>}

      {mahalliMahfazaUnsuru === "navy" && <div className='altKisim' style={ { backgroundColor: mahalliMahfazaUnsuru} }>
          <p>
              Bu website Necdet Arda Etiman tarafından tezyin edildi.
          </p>
      </div>}

      {mahalliMahfazaUnsuru === "brown" && <div className='altKisim' style={ { backgroundColor: mahalliMahfazaUnsuru} }>
          <p>
              Bu website Necdet Arda Etiman tarafından tezyin edildi.
          </p>
      </div>}
    </div>
  )
}
