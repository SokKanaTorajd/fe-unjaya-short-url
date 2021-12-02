import Head from 'next/head'
import Header2 from '../components/Header2'
import Image from 'next/image'
import React from 'react'
import Linechart from '../components/Linechart'

function dashboard(){
  return (
    <div>
      <canvas id="grafik"></canvas>
      <div className='ubahlinknya'>
        <div className="flex1">
        <Image src="/kkk.png" alt="img" className="v-input1" width={25} height={20} objectFit="contain"/>
        <form method="" action="" className="g-flex1">
            <input type="text" name="isi" id="isi" placeholder="Paste atau klik link panjangmu disini" />
            <button type="submit"  id="submit" className="kanan">Singkatkan</button>
        </form>
        </div>
      </div>
      <div className="total-link">
        <h1><strong>0</strong></h1>
        <h2><strong>Total Link</strong></h2>
      </div>
      <div className="total-klik">
        <h1>0</h1>
        <h2>Total Klik</h2>
      </div>
      <div className="riwayat1">
        <Image src="/image 1.png" alt = "figma" width={25} height={25}/>
        <h1>Unjaya.id/uiux</h1>
        <p>https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
        <h1>0 Klik</h1>
        <h2> Baru Saja</h2>
      </div>
    </div>
  )
}
export default dashboard

dashboard.getLayout = function dashboard(page){
    return(
    <>
    <Header2/>
    <Linechart/>
    {page}
    </>
    )
}