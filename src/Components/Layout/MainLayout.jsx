import Header from "../main/Header.jsx";
import SparkTalk from "../main/SparkTalk.jsx";
import GoToTop from "../main/GoToTop.jsx";
import Footer from "../main/Footer.jsx";
import { Outlet } from "react-router-dom";

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