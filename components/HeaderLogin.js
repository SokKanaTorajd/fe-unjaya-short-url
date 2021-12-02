import Link from 'next/link'

function HeaderL(){
    return(
        <>
        <nav className='navLogin'>
            <div className="left">
                    <h2>Unjaya.id</h2>
            </div>
            <div className="right">
                <ul>
                    <li> 
                        <Link href='/'>
                        <a>Beranda</a> 
                        </Link>
                    </li>
                    <li> 
                        <Link href='/tentang'>
                        <a>Tentang</a> 
                        </Link>
                    </li>
                    <li> 
                        <Link href='/login'>
                        <a class="active">Masuk</a> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default HeaderL