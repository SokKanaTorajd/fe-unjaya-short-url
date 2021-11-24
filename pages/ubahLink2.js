import Link from 'next/link'
import Image from 'next/dist/client/image'

function Beranda(){
    return(
        <>
        {/* <div className='circle1'></div> */}
        <div className='circle2'></div>
        <div className='section1'>
            <span>Lebih <b> Mudah</b> Dengan Tautan Lebih <b>Singkat</b></span>
            <p> Buat tautanmu menjadi lebih singkat untuk memudahkan <br/> mereka mengakesnya</p>
            <div className="flex">
            <Image src="/kkk.png" alt="img" className="v-input" width={25} height={20} objectFit="contain"/>
            <form method="" action="" className="g-flex">
                <input type="text" name="isi" id="isi" placeholder="Paste atau klik link panjangmu disini" />
                <button type="submit"  id="submit" className="kanan">Singkatkan</button>
            </form>
            </div>
            <div className="flex">
                <form method="" action="" className="changeLink">
                    <div className='flex-input'>
                    <Image src="/star.png" alt="img" width="25%" height="20%"  objectFit="contain"/>
                    <input type="text" name="Ubah" className="ubahLink" id="isi"/> <br/>
                    <Image src="/copy.png" alt="img" className="m-input" width="30%" height="20%"  objectFit="contain"/>
                    <Image src="/share.png" alt="img" className="m-input" width="30%" height="20%"  objectFit="contain"/>
                    <Image src="/email.png" alt="img" className="m-input" width="30%" height="20%"  objectFit="contain"/>
                    <Image src="/blutit.png" alt="img" className="m-input" width="30%" height="20%"  objectFit="contain"/>
                    <Image src="/qrc.png" alt="img" className="m-input" width="30%" height="20%"  objectFit="contain"/>
                    </div>
                    <div className="ubah">
                        <button type="submit"  id="submit">Ubah Link</button> 
                    </div>
                    <div className="alert"> 
                    Link bisa kamu gunakan
                    </div>
                    {/* <button type="submit"  id="submit" className="ubah">Ubah Link</button> */}
                </form>
            </div>
        </div>
        <div className='section2'>
            <h1> Alasan kamu harus masuk</h1>
            <div className="grid-3">
                <div className='g-1'>
                    <Image src="/heart.png" alt="heart" width={150} height={150}/>
                    <h2>Rekomendasi Link</h2>
                    <p>Custom link jadi lebih mudah dengan se-klik</p>
                </div>
                <div className='g-1'>
                    <Image src="/aaaa.png" alt="aa" width={150} height={150}/>
                    <h2>Analitik Klik Link</h2>
                    <p>Pantau berapa orang yang sudah klik link kamu</p>
                </div>
                <div className='g-1'>
                    <Image src="/clock.png" alt="clock" width={150} height={150}/>    
                    <h2>Riwayat Link</h2>
                    <p>Kamu bisa memeriksa kembali link yang pernah dibuat</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Beranda