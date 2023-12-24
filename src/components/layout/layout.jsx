import { Outlet } from "react-router-dom";

import Header from "../header/header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright © 2023 My Website</p>
      </footer>
    </>
  )
}