import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const Layout = () => {
  return (
    <div className="h-[100dvh]">
      <Menu />
      <main className="flex flex-col items-center h-[87%]">
        <Outlet />
      </main>
      <footer className="h-7 flex align-bottom justify-center">
        <p className="text-black dark:text-[aliceblue]">2025 © direitos reservados</p>
      </footer>
    </div>
  );
};
