import '../styles/globals.css'
import "../styles/header/header.css"
import "../styles/footer/footer.css"
import "../styles/main/main.css"
import "../styles/about/about.css"
import "../styles/head/heading.css"
import 'aos/dist/aos.css';
import "../styles/services/services.css"
import "../styles/services/similar.css"
import "../styles/news/news.css"
import "../styles/contacts/contacts.css"

import Layout from '../components/Layout'

function MyApp({ Component, pageProps  }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
      </>
  )

}

export default MyApp
