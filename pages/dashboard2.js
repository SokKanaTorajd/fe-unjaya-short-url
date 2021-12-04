import Head from 'next/head'
import Header2 from '../components/Header2'
import Image from 'next/image'
import React from 'react'

function dashboard(){
    function ubahLink(){
        const ubahLink = document.getElementById('ubahLink')
        ubahLink.style.display = 'block'
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function ubahLinkB(){

    }
  return (
    <div>
    <div className='ubahlinknya-d'>
        <div className="flex1">
        <Image src="/kkk.png" alt="img" className="v-input1" width={25} height={20} objectFit="contain"/>
        <div className="g-flex1">
            <input type="text" name="isi" id="isi" placeholder="Paste atau klik link panjangmu disini" />
            <button onClick={ubahLink} id="submit" className="kanan">Singkatkan</button>
        </div>
        </div>
    </div>
    <div className="riwayat">
        <div className="riwayat1">
            <div class="img-fig">
            <Image src="/image1.png" alt = "figma" width={30} height={40}/>
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


    {/* pop up ubah link */}
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

</div>
  )
}
export default dashboard

dashboard.getLayout = function dashboard(page){
    return(
    <>
    <Header2/>
    {page}
    </>
    )
}