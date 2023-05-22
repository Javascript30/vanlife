import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* What is to be rendered at that spot using react router dom */}
      <Outlet />
      {/* What is to be rendered at that spot using react router dom */}
      <Footer />
    </>
  );
}
