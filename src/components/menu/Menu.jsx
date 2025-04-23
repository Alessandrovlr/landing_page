import { Link } from "react-router-dom";
import { BotaoDarkMode } from "../botaoDarkMode/botaoDarkMode";

export const Menu = () => {
  const estiloLinks =
    "no-underline text-[20px] text-[aliceblue]  mx-[10px] hover:text-[22px] transform duration-200";
  return (
    <nav className="flex h-[7%] justify-between items-center pl-[50px] bg-black">
      <div className="flex gap-[70px]">
        <Link to="/" className={estiloLinks}>
          Home
        </Link>
        <Link to="/Projeto" className={estiloLinks}>
          Projeto
        </Link>
        <Link to="/sobre" className={estiloLinks}>
          Sobre
        </Link>
        <Link to="/contato" className={estiloLinks}>
          Contato
        </Link>
      </div>
      <BotaoDarkMode></BotaoDarkMode>
    </nav>
  );
};
