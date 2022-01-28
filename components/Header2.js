import Link from 'next/link'
import Image from 'next/image'

function Header2(){
  function userbin(){
      const userbin = document.getElementById('userbin')
      if(userbin.style.display === 'none'){
        userbin.style.display='block'
      }
      else{
        userbin.style.display='none'
      }
      
  }
    return(
      <>
      <div className="headdash">
        <div className='navbardash'>
            <div className="header">
              <h1>Unjaya.id</h1>
            </div>
            <div className="headernya">
                <div className="akun">
                  <Image src="/Group.png" alt="akun" width={23} height={23}/>
                </div>
                <div className="dashb">
                  <h2>Wijatama Diwangkara</h2>
                </div>
                <div className="poly" onClick={userbin}>
                  <Image src="/polygon.png" alt="poly" width={25} height={8}/>
                </div>
            </div>
        </div>
      </div>
      <div className="userbin" id='userbin'>
          <Link href='/setting'>
                <a className="btn-setting">Setting</a> 
            </Link>
          <p>
          <Image src="/out.png"alt="akun" width={15} height={15}/>
          <Link href='/logout'>
              <a>Keluar</a>
          </Link>
          </p>
      </div>
  </>
   
  )
}
export default Header2