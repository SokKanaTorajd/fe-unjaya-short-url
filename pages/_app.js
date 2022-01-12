import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/dashboard.css'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return(
    <>
    <Head>
        <title>MyPage</title>
        <meta name="description" content="Shorten-Link Unjaya" />
               {/* {/* <link
          href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        /> */}
    </Head>
    <Header/>
         <Component {...pageProps} />
    <Footer />
    </>
  ) 
 
}
export default MyApp
