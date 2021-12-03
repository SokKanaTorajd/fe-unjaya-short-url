<<<<<<< HEAD
import Head from 'next/head'
import Header2 from '../components/Header2'
=======
<<<<<<< HEAD
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
=======
import Link from 'next/link'
>>>>>>> main
import Image from 'next/image'
import React from 'react'
import Linechart from '../components/Linechart'

function dashboard(){
  return (
    <div>
      <canvas id="grafik"></canvas>
      <div className="total-link">
        <h1><strong>0</strong></h1>
        <h2><strong>Total Link</strong></h2>
      </div>
      <div className="total-klik">
        <h1>0</h1>
        <h2>Total Klik</h2>
      </div>
      <div className='ubahlinknya'>
        <div className="flex1">
        <Image src="/kkk.png" alt="img" className="v-input1" width={25} height={20} objectFit="contain"/>
        <form method="" action="" className="g-flex1">
            <input type="text" name="isi" id="isi" placeholder="Paste atau klik link panjangmu disini" />
            <button type="submit"  id="submit" className="kanan">Singkatkan</button>
        </form>
        </div>
      </div>

    <div className="riwayat">
        <div className="riwayat1">
            <div class="img-fig">
            <Image src="/image1.png" alt = "figma" width={30} height={30}/>
            </div>
            <div className="ket-riwayat">
              <h1>Unjaya.id/uiux</h1>
              <p>https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
            </div>
            <div class="option-click"><span>0 Klik</span></div>
            <div class="just-now"><span> Baru Saja</span> </div>
        </div>
        <div className="riwayat1">
            <div class="img-fig">
            <Image src="/image1.png" alt = "figma" width={30} height={40}/>
            </div>
            <div className="ket-riwayat">
              <h1>Unjaya.id/uiux</h1>
              <p>https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
            </div>
            <div class="option-click"><span>5 Klik</span></div>
            <div class="just-now"><span> 1 jam yang lalu</span> </div>
        </div>
        <div className="riwayat1 option">
            <div class="img-fig">
            <Image src="/image1.png" alt = "figma" width={30} height={40}/>
            </div>
            <div className="ket-riwayat">
              <h1>Unjaya.id/uiux 
                <span><Image src="/pen.png" alt="pen"  width={30} height={30}/></span>
              </h1>
              <p>https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
            </div>
          <div class="options">
           <Image src="/copy.png" alt="copy"width={35} height={35} objectFit="contain"/>
           <Image src="/share.png" alt="share"width={35} height={35} objectFit="contain"/>
           <Image src="/email.png" alt="email"width={35} height={35} objectFit="contain"/>
           <Image src="/blutit.png" alt="sha1e"width={35} height={35} objectFit="contain"/>
           <Image src="/del.png" alt="delete"width={35} height={35} objectFit="contain"/>
           </div>
        </div>
    </div>
     
      
    </div>
  )
}
export default dashboard

dashboard.getLayout = function dashboard(page){
    return(
    <>
<<<<<<< HEAD
    <Header2/>
    <Linechart/>
=======
    <HeaderD/>
>>>>>>> 249d99f5029f3b26b412e1f9ad313ac6460a8fdb
>>>>>>> main
    {page}
    </>
    )
}