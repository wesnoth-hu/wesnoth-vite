import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

export default function Layout() {
  return (
    <div
      data-testid="layout-container"
      className="w-full min-h-screen h-full flex flex-col items-center overflow-clip"
    >
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}
