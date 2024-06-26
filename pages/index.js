import Link from 'next/link'
import Image from 'next/dist/client/image'

function Beranda(){
    return(
        <>
        <div className='circle2'></div>
        <div className='section1'>
            <span>Lebih <b> Mudah</b> Dengan Tautan Lebih <b>Singkat</b></span>
            <p> Buat tautanmu menjadi lebih singkat untuk memudahkan <br/> mereka mengakesnya</p>
            <Link href='/login'>
                <a className="mulai">Mulai</a> 
            </Link>
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