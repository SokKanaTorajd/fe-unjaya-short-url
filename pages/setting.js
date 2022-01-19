import Header2 from '../components/Header2'
import Image from 'next/image'

function setting (){
    return(
        <div className="box1">
        <div className="boxset">
            <div className='boxprofil'>
                <div className="user-set">
                    <Image src="/profil.png" alt="img" className="a" width={35} height={35} objectFit="contain"/>
                </div>
                <div className="boxpro">
                    <h1>Wijatama Diwangkara</h1>
                    <h2>Mahasiswa</h2>
                    <h2>123456789</h2>
                </div>
            </div>
            <div className='change'>
                <div className="boxinfo">
                  <h1>Informasi Akun</h1>  
                </div>
                <form method="post" spellcheck="false">
                    <div className="form-set">
                        <label>Nama</label>
                        <input type="text" name="username" placeholder="Wijatama diwangkara" className="form-control"/>
                    </div>
                    <div className="form-set">
                        <label>Kata Sandi</label>
                        <p>Silahkan ubah kata sandi lama dengan kata sandi baru</p>
                        <input type="password" value="password"/>
                            {/* <span className="forgot">Lupa Password?</span> */}
                    </div>
                    <div className="form-set">
                        <button type="submit" name="masuk" className="btn-masuk">Simpan</button>
                        <p></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
 
    )
}





export default setting

setting.getLayout = function setting(page){
    return(
    <>
    <Header2/>
    {page}
    </>
    )
}