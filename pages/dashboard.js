import Link from 'next/link'
import Image from 'next/image'
import HeaderD from '../components/HeaderDashboard'


function Login(){
    return(
        <>
       
        </>
    )
}

export default Login

Login.getLayout = function pageLayout(page){
    return(
    <>
    <HeaderD/>
    {page}
    </>
    )
}