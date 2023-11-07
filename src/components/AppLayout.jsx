import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen overflow-hidden bg-[#fafbfd]">
      <Header />

      <main className="flex-1 flex flex-col gap-[3.2rem] pb-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
