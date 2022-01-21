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
    function ubahLinkBatal(){
      const ubahLinkBatal = document.getElementById('buttonUbah')
      ubahLinkBatal.style.display = 'block'
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function ubahLinkLanjutkan(){
      const ubahLinkLanjutkan = document.getElementById('ubah')
      ubahLinkLanjutkan.style.display = 'block'
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function close(){
      const tutup = document.getElementById('buatAkun')
      document.body.style.backgroundColor = "#ffffff";
      tutup.style.display = "none";
  }
  // let riwayatForm = document.querySelector('.riwayatForm');

  // document.querySelector('#riwayat1').onclick = () =>{
  //   riwayatForm.classList.toggle('active');
  //       // loginForm.classList.remove('active');
  //       // navbar.classList.remove('active');
  // }
  
  return (
    <div>
      <div className="dash">
          <div className="ket">
              <div className="total-link">
                <p> 0 Total Link</p>
              </div>
              <div className="total-klik">
              <p> 0 Total Klik</p>
              </div>
          </div>
        <div className="grafik-n">
        <Linechart/>
        </div>
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
        <div className="riwayat1" id="riwayat">
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
        {/* D A L A M */}
        {/* <form className="riwayatForm">
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
           <Image src="/blutit.png" alt="sha1e"width={25} height={25} objectFit="contain"/>
           <Image src="/del.png" alt="delete"width={25} height={25} objectFit="contain"/>
          </div>
        </form> */}
        {/* D A L A M */}
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
        <div className="UbahLinkBatal">
          <div class="cl" onClick={close}>&times;</div>
          <div className="header">
            <h2 className="title">Buat Akun <span class="red">Unjaya.id</span> </h2>
          </div>
            <div className="warn">
                <Image src="/warning.png" width={300} height={300} alt="a"/>
            </div>
            <h1><b>Yakin ingin diubah?</b></h1>
            <p>Kamu harus siap kehilangan jumlah klik-link sebelumnya.</p>
        </div>
        <div className="btn-pop">
            <ul class="batal">
              <button onclick={ubahLinkBatal} className='b-batal'>Batalkan</button>
            </ul>
            <ul class="lanjutkan">
              <button onclick={ubahLinkLanjutkan} className='b-lanjutkan'>Lanjutkan</button>  
            </ul>
        </div>
    </div>
    <div className="ubahLinkPopLanjut" id="ubah">
        <div className="ubahLinkPop-L">
            <div className="ki">
                <h1><Image src="/image1.png" alt = "figma" width={20} height={20}/>
                    <span>https://www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=0%3A1</span> </h1>
            </div>
            <button className="ubahLink-b" onClick={ubahLinkB}>Ubah Link</button>
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
    {page}
    </>
    )
}
