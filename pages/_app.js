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
import "../styles/popUp/popUp.css"
import "../styles/button/button.css"
import "../styles/layouts/homeLayout/homeLayout.css"
import "../styles/layouts/profileLayout/profileLayout.css"
import "../styles/profile/profileHead/profileHead.css"
import "../styles/profile/profileSide/profileSide.css"
import "../styles/profile/sideTabs/sideTabs.css"
import "../styles/profile/userInfo/userInfo.css"
import "react-datepicker/dist/react-datepicker.css";
import "../styles/profile/pagination/pagination.css"
import "../styles/profile/profileOrder/profileOrder.css"

import { useStore } from '../redux/store'
import Layout from "../components/Layout"
import ProfileLayout from "../components/ProfileLayout"
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {


  const store = useStore(pageProps.initialReduxState)

  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <ProfileLayout>
          <Component {...pageProps} />
        </ProfileLayout>
      </Provider>)
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}

export default MyApp
