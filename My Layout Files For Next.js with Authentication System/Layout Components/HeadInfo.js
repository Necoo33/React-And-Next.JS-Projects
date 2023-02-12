import React from 'react'
import Head from 'next/head'

// Aşşağıdaki "Head" serlevha'sının içine sahife'nin seo'sunu tekamül etdirmek için
// normalde head serlevhasına konulan her html serlevha'sını koyabilirsin.

// next.js aynı isim adetine sahib olan "<meta/>" serlevha'larının sonuncusunu default olarak yazar.
// eğer herhangi bir sahifeye değişik bir tarif(description) eklemek istersen onun isim adetini 
// aşşağıdaki "page description" ile aynı yapmayı unutma.

export default function HeadInfo() {
  return (
    <>
        <Head>
            <title>Necdet's Api Container</title>
            <meta name='page description' content='Personal Api Container Of Necdet Arda'/>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>
    </>
  )
}