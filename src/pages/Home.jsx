import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  return (
    <section className="flex mt-10 p-10 flex-row justify-center items-center bg-[rgb(49,49,49)] rounded-3xl w-2/3 h-[90%] gap-[10%]">
      <div className="h-[100%] flex flex-col justify-around items-center">
        <h1 className="m-0 font-mono text-xl text-bold text-[rgb(240,248,255)]">
          Breakout Legacy
        </h1>
        <p className="m-0 font-mono text-[rgb(240,248,255)] w[60%]">
          Reviva o clássico. Quebre blocos, marque pontos e desafie seus
          reflexos!
        </p>
        <p className="m-0 font-mono text-[rgb(240,248,255)] w[60%]">
          Este é um projeto visando fazer o conhecido jogo Breakout na
          tecnologia Javascript. Breakout é um jogo antigo que o objetivo é
          controlar uma barra horizontal que deve rebater uma bola para destruir
          todos os blocos e ganhar pontos, o jogo acaba quando a bola cai da
          tela
        </p>
        <Link
        className="no-underline text-black bg-[rgb(240,248,255)] rounded-lg p-3 transition duration-500 w-1/2"
        to="/Projeto"
      >
        Veja como funciona
      </Link>
      </div>

      <img
        className="w-[40%] rounded-xl"
        src="/img/jogo.png"
        alt="imagem ilustrativa do jogo Breakout"
      />
    </section>
  );
};
