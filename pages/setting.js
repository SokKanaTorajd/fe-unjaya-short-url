import Header2 from '../components/Header2'
import Image from 'next/image'
import { imageConfigDefault } from 'next/dist/server/image-config';

const imageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
  };


function setting (){
    return(
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
                <h1>Informasi Akun</h1>
                <div className="boxinfo">
                  <form method="post" spellcheck="false">
                    <div className="form-set">
                        <label>Nama</label>
                        <input type="text" name="username" placeholder="Wijatama diwangkara" className="form-control"/>
                    </div>
                    <div className="form-set">
                        <label>NPM</label>
                        <input type="text" name="password" placeholder="123456789" className="form-control"/>
                    </div>
                    <div className="form-set">
                        <label>Kata Sandi</label>
                        <p>Silahkan ubah kata sandi lama dengan kata sandi baru</p>
                        <input type="password" value="password" class="myInput"/>
                        <span id="mybutton" onclick="change()"><i class="glyphicon glyphicon-eye-open"></i></span>
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
<<<<<<< HEAD
        
=======
>>>>>>> 78711f94dfad4729b7b7733f8b47bb2f085c59fd
    )
}
function change()
    {
        var x = document.getElementById('pass').type;
 
        if (x == 'password')
        {
           document.getElementById('pass').type = 'text';
           document.getElementById('mybutton').innerHTML = '<i class="glyphicon glyphicon-eye-close"></i>';
        }
        else
        {
           document.getElementById('pass').type = 'password';
           document.getElementById('mybutton').innerHTML = '<i class="glyphicon glyphicon-eye-open"></i>';
        }
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