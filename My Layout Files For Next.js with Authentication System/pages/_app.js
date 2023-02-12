import '../styles/globals.css'
import Navbar from "../Layout Components/Navbar"
import HeadInfo from "../Layout Components/HeadInfo"

function MyApp({ Component, pageProps }) {
  return (
        <>
          <HeadInfo/>
          <Navbar/>
          <Component {...pageProps} />
        </>
         )
}

export default MyApp
