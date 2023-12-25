import { Outlet } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={`border-b border-solid border-[#262626]`}>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}