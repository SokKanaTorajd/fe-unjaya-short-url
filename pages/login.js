import Link from 'next/link'
import Image from 'next/image'
import HeaderL from '../components/HeaderLogin'
import Footer from '../components/Footer'
function Login(){
    function toRegister(){
       const buat = document.getElementById('buatAkun')
       buat.style.display = "block";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function close(){
        const tutup = document.getElementById('buatAkun')
        document.body.style.backgroundColor = "#ffffff";
        tutup.style.display = "none";
    }

   function success(){
    const tutup = document.getElementById('buatAkun')
    const sukses = document.getElementById('success')
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        sukses.style.display = "block";
        tutup.style.display = "none";        
    }

    return(
        <>
        <div id="bod">
        <div className="grid-2">
            <div className="image">
                <Image alt='login' src="/login.png" width={725} height={525}/>
            </div>
            <div className="masuk">
                <div className="judul">
                    <h2 className="title">Masuk <span class="red">Unjaya.id</span></h2>
                </div>
                <form method="post" spellcheck="false">
                    <div className="form-group">
                        <input type="text" name="username" placeholder="Username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="password" placeholder="Kata Sandi" className="form-control"/>
                    </div>
                    <div className="ingat">
                        <input type="checkbox" name="ingat"/> <label>Ingat Akun</label>
                        <span className="forgot">Lupa Password?</span>
                    </div>
                    <div className="form-group">
                        <button type="submit" name="masuk" className="btn-masuk">Masuk</button>
                        <div class="buat-akun">Belum memiliki akun? 
                            <span class="klik-akun" onClick={toRegister}> Buat akun</span>
                        </div>
                        <p></p>
                    </div>
                </form>
            </div>
        </div>

        <div className="buatAkun" id="buatAkun">
            <div class="cl" onClick={close}>&times;</div>
            <div className="header">
                <h2 className="title">Buat Akun <span class="red">Unjaya.id</span> </h2>
            </div>
                <form method="post" spellcheck="false">
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="username" placeholder="Username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="nama_lengkap" placeholder="NIM" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Kata Sandi" className="form-control"/>
                    </div>                    
                    <div className="form-group">
                        <div class="buat-akun">
                        Dengan mengklik Buat Akun, Anda menyetujui Ketentuan, Kebijakan Data dan Kebijakan Cookie kami. 
                        </div>
                        <button type="submit" name="masuk" onClick={success} className="btn-masuk">Masuk</button>
                    </div>
                </form>
        </div>

        <div className="sukses-alert" id="success">
               <h2>Selamat</h2>
               <Image src="/success.png" width={150} height={150} alt="i"/>
               <p>Akun <span class="unjaya">Unjaya.id</span> <br/>Anda Berhasil Dibuat</p>
           
        </div>

    </div>
        </>
    )}
export default Login
Login.getLayout = function pageLayout(page){
    return(
    <>
    <HeaderL/>
    {page}
    <Footer/>
    </>
    )
}
