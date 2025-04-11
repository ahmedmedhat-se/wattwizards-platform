import Header from "../Header.jsx"
import SparkTalk from "../SparkTalk.jsx"
import GoToTop from "../GoToTop.jsx"
import Footer from "../Footer.jsx"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
        <Header />
        <SparkTalk />
        <Outlet />
        <GoToTop />
        <Footer />
    </>
  )
}

export default MainLayout