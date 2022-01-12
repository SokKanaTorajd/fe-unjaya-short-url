import Link from 'next/link'

function Header(){
    return(
        <>
             <div className='circle1'></div>
            <nav className='navbar'>
                <div className="left">
                    <h2>Unjaya.id</h2>
                </div>
                <div className="right">
                    <ul>
                        <li> 
                            <Link href='/'>
                            <a className="beranda">Beranda</a> 
                            </Link>
                        </li>
                        <li> 
                            <Link href='/tentang'>
                            <a className='tentang'>Tentang</a>
                            </Link> 
                        </li>
                        <li> 
                            <Link href='/login'>
                            <a className="masuk">Masuk</a> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header
