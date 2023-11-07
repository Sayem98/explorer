import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid min-h-screen h-full w-full overflow-hidden">
      <Header />

      <main className="flex flex-col gap-[3.2rem] mb-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
