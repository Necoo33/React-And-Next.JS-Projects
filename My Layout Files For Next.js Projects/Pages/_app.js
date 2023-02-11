import '../styles/globals.css'
import NextjsNavbarWithDropdownMenu from '../Layout Components/NextjsNavbarWithDropdownMenu'
import HeadInfo from '../Layout Components/HeadInfo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadInfo/>
      <NextjsNavbarWithDropdownMenu />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
