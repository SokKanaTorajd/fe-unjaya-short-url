import Link from 'next/link'
import Image from 'next/image'

<<<<<<< HEAD

function Header2(){
  function userbin(){

  }
=======
function Header2(){
>>>>>>> main
    return(
      <>
      <div className="headdash">
        <div className='navbardash'>
            <div className="header">
              <h1>Unjaya.id</h1>
            </div>
<<<<<<< HEAD
            <div className="headernya">
=======
            <div className="headernya"> 
>>>>>>> main
              <div className ="dashb">
                <h2>Dashboard</h2>
              </div>
              <div className="akun">
                <Image src="/Group.png" alt="akun" width={23} height={23}/>
              </div>
              <div className="poly">
<<<<<<< HEAD
                <Image src="/polygon.png" onClick={userbin} alt="poly" width={25} height={8}/>
                <div className="user">
                  {/* <h3>@Userbin</h3>
                  <p>Keluar</p> */}
=======
                <Image src="/polygon.png" alt="poly" width={25} height={8}/>
                <div className="user">
                  <h3>@Userbin</h3>
>>>>>>> main
                </div>
              </div>
            </div>
        </div>
      </div>
  </>
    // <div className="headernya">
  
    //     <div className="header">
    //       <h1>Unjaya.id</h1>
    //       <h2>Dashboard</h2>
    //     </div>
    //     <Link href='/'>
    //     <a class="dashboard">dashboard</a> 
    //     </Link>
    // </div>
  )
}
export default Header2