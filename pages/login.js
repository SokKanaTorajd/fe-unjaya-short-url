import Link from 'next/link'
import Image from 'next/image'
import HeaderL from '../components/HeaderLogin'


function Login(){
    return(
        <>
        <div className="grid-2">
            <div className="image">
                <Image alt='login' src="/login.png" width={500} height={500}/>
            </div>
            <div className="masuk">
                <h2 className="title">Masuk Unjaya.id</h2>
                <form method="post">
                    <div className="form-group">
                        <label name="nim">NIM</label>
                        <input type="text" name="nim" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label name="password">Kata Sandi</label>
                        <input type="text" name="password" className="form-control"/>
                    </div>
                    <div className="ingat">
                    <input type="checkbox" name="ingat"/> <label>ingat NIM</label>
                    </div>

                    <div className="form-group">
                        <button type="submit" name="masuk" className="btn-masuk">Masuk</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login

Login.getLayout = function pageLayout(page){
    return(
    <>
    <HeaderL/>
    {page}
    </>
    )
}