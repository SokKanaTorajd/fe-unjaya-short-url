import '../styles/globals.css'
import '../styles/layout.css'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'


// function MyApp()
function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return(
    <>
    <Head>
        <title>MyPage</title>
        <meta name="description" content="Free tutorials on web development" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link> */}
    </Head>
    <Header/>
         <Component {...pageProps} />
    <Footer />
    </>
  ) 
 
}

export default MyApp
