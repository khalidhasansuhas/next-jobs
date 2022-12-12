import Footer from '../components/Footer'
import Layout from '../components/layout'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>

    <Layout>
      <Component {...pageProps} />

    </Layout>
  </>
}

export default MyApp
