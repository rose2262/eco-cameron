import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
