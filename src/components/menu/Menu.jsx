import { Link } from "react-router-dom";
import { BotaoDarkMode } from "../botaoDarkMode/botaoDarkMode";

export const Menu = () => {
  const estiloLinks =
    "no-underline text-[20px] text-black mx-[10px] hover:text-white dark:hover:text-[rgb(136,83,221)] transform duration-200 dark:text-[aliceblue]";
  return (
    <nav className="flex h-[8%] items-center justify-between gap-[70px] pl-[50px] transform duration-200 bg-[rgb(98,226,162)] dark:bg-black">
      <div className="flex gap-[70px]">
        <Link to="/" className={estiloLinks}>
          Home
        </Link>
        <Link to="/projeto" className={estiloLinks}>
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
