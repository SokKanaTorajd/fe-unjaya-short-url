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
    const ubahtutup = document.getElementById('ubahLink')
    const ubahLinkB = document.getElementById('buttonUbah1')
    ubahLinkB.style.display = 'block'
    ubahtutup.style.display = "none"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  function ubahLinkBatal(){
    const ubahLinkBatal = document.getElementById('buttonUbah1')
    ubahLinkBatal.style.display = 'none'
    document.body.style.backgroundColor = 'white'
  }
  function ubahLinkBatal2(){
    const ubahLinkBatal = document.getElementById('LanjutUbah')
    ubahLinkBatal.style.display = 'none'
    document.body.style.backgroundColor = 'white'
  }
  function lanjut(){
    const nextedit = document.getElementById('LanjutUbah')
    const ubahLinkBcl = document.getElementById('buttonUbah1')
    nextedit.style.display = 'block'
    ubahLinkBcl.style.display = 'none'
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  function Simpan(){
    const toSave =  document.getElementById('UbahtoSave')
    const nextedit = document.getElementById('LanjutUbah')
    toSave.style.display = 'block'
    nextedit.style.display='none'
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  function close(){
    const tutup = document.getElementById('ubahLink')
    document.body.style.backgroundColor = "#ffffff";
    tutup.style.display = "none";
  }
  function closeUbah(){
    const tutup = document.getElementById('buttonUbah1')
    document.body.style.backgroundColor = "#ffffff";
    tutup.style.display = "none";
  }
  function closeNext(){
    const tutup1 = document.getElementById('LanjutUbah')
    document.body.style.backgroundColor = "#ffffff";
    tutup1.style.display = "none";
  }
  function closeSave(){
    const tutup1 = document.getElementById('UbahtoSave')
    document.body.style.backgroundColor = "#ffffff";
    tutup1.style.display = "none";
  }
  var lastopen = null;
  function shareLink(){
    var shareLink1 = document.getElementById('shareLink');
    shareLink1.style.display = 'block';
    if (lastopen){
      closepop(lastopen);
    }
    lastopen=shareLink1;
  }
  function closepop(){
    var shareLink2 = document.getElementById('shareLink');
    shareLink2.style.display="none";
    lastopen=null;
  }

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
        <div className="riwayat1">
          <div class="img-fig">
            <Image src="/image1.png" alt = "figma" width={16} height={26}/>
          </div>
          <div className="ket-riwayat">
            <h1>Unjaya.id/uiux</h1>
            <p id="hasil" value="aku imut">https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
          </div>
          <div class="option-click"><span>0 Klik</span></div>
          <div class="just-now"><span> Baru Saja</span></div>
        </div>
        <div className="riwayat1" id="edit">
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
        <div className="riwayat1" id="edit">
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
              <span><Image src="/pen.png" onClick={ubahLink} alt="pen"  width={18} height={18}/></span>
            </h1>
            <p id="hasil">https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320</p>
          </div>
          <div class="options">
            <Image src="/copy.png" alt="copy"width={20} height={20} objectFit="contain"/>
            <Image src="/blutit.png" onClick={shareLink} alt="sha1e"width={25} height={25} objectFit="contain"/>
            <Image src="/del.png" alt="delete"width={25} height={25} objectFit="contain"/>
          </div>
        </div>
    </div>
    <div className="ubahLinkPop" id="ubahLink">
      <div class="cl" onClick={close}>&times;</div>
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
    <div className= "shareLinkPop" id="shareLink">
      <h1><b>Berbagi ke</b></h1>
      <div className="shareLinkPop-a">
        <div className="share">
          <a href="https://web.whatsapp.com/" class="s"><Image src="/wa.png" alt="Whatsapp"width={25} height={25} objectFit="contain"/>Whatsapp</a> 
          <a href="https://web.telegram.org/" class="s"><Image src="/tele.png" alt="Telegram"width={25} height={25} objectFit="contain"/>Telegram </a>
          <a href="https://twitter.com/" class="s"><Image src="/tw.png" alt="Twitter"width={25} height={25} objectFit="contain"/> Twitter</a>
          <a href="https://web.facebook.com/" class="s"><Image src="/fb.png" alt="Facebook"width={25} height={25} objectFit="contain"/>Facebook </a>
        </div>
        {/* <div className="kolom">
          <p><b>Whatsapp</b></p>
          <p><b>Telegram</b></p>
          <p><b>Twitter</b></p>
          <p><b>Facebook</b></p>
        </div> */}
      </div>
    </div>
    <div className="buttonUbahLink" id="buttonUbah1">
      <div class="cancel" onClick={closeUbah}>&times;</div>
        <div className="UbahLinkBatal">
          <div className="header">
            <h2 className="title">Ubah link <span class="red">Unjaya.id</span> </h2>
          </div>
        <div className="poplink">
            <div className="warn">
                <Image src="/warning.png" width={350} height={350} alt="a"/>
            </div>
            <h1><b>Yakin ingin diubah?</b></h1>
            <p>Kamu harus siap kehilangan jumlah klik-link sebelumnya.</p>
        </div>
        <div className="btn-pop">
            <ul class="batal">
              <button onClick={ubahLinkBatal} className='b-batal'>Batalkan</button>
            </ul>
            <ul class="lanjutkan">
              <button onClick={lanjut} className='b-lanjutkan'>Lanjutkan</button>  
            </ul>
        </div>
    </div>
    
    </div>
    <div className="ubahLinkPopLanjut" id="LanjutUbah">
      <div class="cl" onClick={closeNext}>&times;</div>
      <div className="ubahLinkPop-L">
        <div className="ki">
          <h1><Image src="/image1.png" alt = "figma" width={20} height={23}/>
          <span>https://www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=0%3A1</span></h1>
        </div>
        <div className='unjayaa'>
          <div className='kotak1'>
            <div className='linknyaa'>Unjaya.id</div>
              <input className='linknya' placeholder="Ubah ke link yang kamu inginkan" type="text"></input>
            </div>
          </div>
          <div className='ubahLink-flex'>
            <button className="ubahLink-b" onClick={ubahLinkBatal2}>Batalkan</button>
            <button className="ubahLink-b" onClick={Simpan}>Simpan</button>
          </div>
      </div>
    </div>
    <div className="ubahLinkPopLanjut2" id="UbahtoSave">
      <div class="cl" onClick={closeSave}>&times;</div>
      <div className='ubahlinknya2'>
        <div className="flexx1">
        <Image src="/kkk.png" alt="img" className="v-input1" width={25} height={20} objectFit="contain"/>
        <form method="" action="" className="g-flex11">
            <input type="text" name="isi" id="isi" placeholder="Unjaya.id/" />
            <button type="submit"  id="submit" className="kanan">Singkatkan</button>
        </form>
        </div>
      </div>
      <div className='rekom'>
        <h1 className='rekomnama'>Rekomendasi Link untuk Kamu:</h1>
        <div className="rekomendasi">Unjaya.id/uiux1</div>
        <div className="rekomendasi">Unjaya.id/uiux2</div>
        <div className="rekomendasi">Unjaya.id/uiux3</div>
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
