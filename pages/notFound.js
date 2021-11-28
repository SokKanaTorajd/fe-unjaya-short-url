import Link from 'next/link'
import Image from 'next/image'

function PageNotFound(){
    return (
    <div class="notFound">
        <div class="image1">
        <Image src="/pageNotFound.png" alt="notfound" className={'image-notfound'} width={500} height={500}/>
        </div>
        <div class="ket">
        <h2>Something's wrong here.</h2>
        This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. <br/>
        Maybe what you are looking for can be found at Unjaya.com. 
        </div>
       </div>
    )}

export default PageNotFound

PageNotFound.getLayout = function pageLayout(page){
    return(
    <>
    {page}
    </>
    )
}
