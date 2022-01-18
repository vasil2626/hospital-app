
import { useEffect } from "react"
import Main from '../components/main/Main'
import About from "../components/about/About"
import Services from '../components/services/Services'
import News from '../components/news/News'
import Contacts from '../components/contacts/Contacts'
import { getServices } from "../redux/actions/getServicesAction/getServicesAction"
import { getNews } from "../redux/actions/getNewsAction/getNewsAction"
import { getGlobals } from "../redux/actions/getGlobals/getGlobalsAction"
import { useDispatch } from "react-redux"



export default function Home({ serviceData, newsData, globalData }) {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getServices(serviceData))
    dispatch(getNews(newsData))
    dispatch(getGlobals(globalData))
  })

  return (
    <>
      <Main />
      <About />
      <Services />
      <News />
      <Contacts />
    </>
  )
}

const url = "http://hosting2.inorain.com:8023"

export async function getServerSideProps() {

  const servicesRes = await fetch(`${url}/services`)
  const serviceData = await servicesRes.json()

  const newsRes = await fetch(`${url}/news`)
  const newsData = await newsRes.json()

  const globalRes = await fetch(`${url}/globals`)
  const globalData = await globalRes.json()

  return { props: { serviceData, newsData, globalData } }
}

