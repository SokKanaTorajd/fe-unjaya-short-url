import Head from 'next/head'
import Header2 from '../components/Header2'
import Image from 'next/image'
import React from 'react'
import Linechart from '../components/Linechart'

function coba(){
    function ubahLink(){
        const ubahLink = document.getElementById('ubahLink')
        ubahLink.style.display = 'block'
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function ubahLinkB(){
        const ubahLinkB = document.getElementById('buttonUbah')
        ubahLinkB.style.display = 'block'
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function UbahLinkC(){

    }
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
            <Image src="/image1.png" alt = "figma" width={16} height={26}/>
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
            <Image src="/image1.png" alt = "figma" width={16} height={26}/>
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
            <Image src="/image1.png" alt = "figma" width={16} height={26}/>
            </div>
            <div className="ket-riwayat">
              <h1>Unjaya.id/uiux
                <span><Image src="/pen.png" onClick={ubahLink} alt="pen"  width={20} height={20}/></span>
              </h1>
              <p>https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
            </div>
          <div class="options">
           <Image src="/copy.png" alt="copy"width={20} height={20} objectFit="contain"/>
           <Image src="/share.png" alt="share"width={25} height={25} objectFit="contain"/>
           <Image src="/email.png" alt="email"width={25} height={25} objectFit="contain"/>
           <Image src="/blutit.png" alt="sha1e"width={25} height={25} objectFit="contain"/>
           <Image src="/del.png" alt="delete"width={25} height={25} objectFit="contain"/>
          </div>
        </div>
    </div>
    <div className="ubahLinkPop" id="ubahLink">
        <div className="ubahLinkPop-h">
            <div className="ki">
                <h1><Image src="/image1.png" alt = "figma" width={20} height={20}/>
                    <span>Unjaya.id/uiux</span> </h1>
            </div>
            <div className="ka"> 
                <Image src="/copy.png" alt="copy"width={25} height={25} objectFit="contain"/>
                <Image src="/share.png" alt="share"width={25} height={25} objectFit="contain"/>
                <Image src="/email.png" alt="email"width={25} height={25} objectFit="contain"/>
                <Image src="/blutit.png" alt="sha1e"width={25} height={25} objectFit="contain"/>
                <Image src="/del.png" alt="delete"width={25} height={25} objectFit="contain"/>
            </div>
        </div>
        <div className="ubahLink-m">
            <p>https://www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=0%3A1</p>
            <ul>
                <li>
                    <Image src='/calendar.png' width={15} height={15} alt="c" />
                    <span>23 Februari 2020</span>
                </li>
                <li>
                    <Image src='/pointer.png' width={15} height={15} alt="c" />
                    <span>Total Klik 5</span>
                </li>
            </ul>
            <button className="ubahLink-b" onClick={ubahLinkB}>Ubah Link</button>
        </div>
    </div>
    <div className="buttonUbahLink" id="buttonUbah">
        <div className="poplink">
            <div className="warn">
                <Image src="/warning.png" width={300} height={300} alt="a"/>
            </div>
            <h1>Yakin ingin diubah?</h1>
            <p>Kamu harus siap kehilangan jumlah klik-link sebelumnya.</p>
        </div>
        <div className="btn-pop">
            <ul>
                <li>
                    <button className="batal" onClick={coba}>Batalkan</button>
                </li>
                <li>
                    <button className="continue" onClick={UbahLinkC}>Lanjutkan</button>
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}
export default coba

coba.getLayout = function coba(page){
    return(
    <>
    <Header2/>
    <Linechart/>
    {page}
    </>
    )
}
