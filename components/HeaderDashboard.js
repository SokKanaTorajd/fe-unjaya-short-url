import Link from 'next/link'
import Image from 'next/image'

function HeaderD(){
    return(
        <>
        <nav className='dashboard'>
            <div className="left">
                    <h2>Unjaya.id</h2>
            </div>
            <div className="right">
                <ul>
                    <li> 
                        <Link href='/'>
                        <a>Dashboard</a> 
                        </Link>
                    </li>
                    <li> 
                    <Image src="/profile.png" alt="profile" width={30} height={30}/>
                    </li>
                    <li> 

                    <button>
                    <Image src="/dropdown.png" alt="profile" width={30} height={10}/>
                     </button>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default HeaderD