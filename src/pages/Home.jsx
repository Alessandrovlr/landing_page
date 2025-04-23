import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="flex mt-10 p-10 flex-row justify-center items-center bg-[rgb(49,49,49)] rounded-3xl w-2/3 h-[90%] gap-[10%]">
      <div className="h-[100%] flex flex-col justify-around items-center">
        <h1 className="m-0 font-mono text-2xl font-bold text-[rgb(136,83,221)]">
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
        className="no-underline text-white bg-[rgb(136,83,221)] rounded-lg p-3 transform duration-200 w-1/2 hover:w-[70%] hover:bg-[#a676f3]"
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
