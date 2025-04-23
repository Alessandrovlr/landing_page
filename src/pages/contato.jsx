export const Contato = () => {
  return (
    <section className="flex mt-10 p-10 flex-col items-center bg-[rgb(49,49,49)] rounded-3xl w-2/3 h-[80%] gap-2">
        <h1  className="text-3xl font-mono text-[rgb(240,248,255)]">Contados dos devs</h1>

      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[100%] h-[40%] gap-4">
          <h2 className="text-2xl font-mono text-[rgb(240,248,255)]">E-mails</h2>
          <p className="text-1xl font-mono font-bold text-[rgb(136,83,221)]">alessandro_coutinho@estudante.sesisenai.org.br</p>
          <p className="text-1xl font-mono font-bold text-[rgb(136,83,221)]">joao_c_formento@estudante.sesisenai.org.br</p>
        </div>

        <div className="flex flex-col items-center w-[100%] h-[60%] gap-5">
          <h2 className="text-2xl text-[rgb(240,248,255)]">GitHub</h2>
          <div className="flex flex-col w-[80%] gap-5 items-center">
            <a href="https://github.com/Alessandrovlr" className="text-[rgb(240,248,255)] bg-[rgb(136,83,221)] w-[60%] rounded-lg p-3 text-2xl font-sans hover:w-[70%] transform duration-200 hover:bg-[#a676f3]">Alessandro</a>
            <a href="https://github.com/JoaoCarlosForment0" className="text-[rgb(240,248,255)] bg-[rgb(136,83,221)] w-[60%] rounded-lg p-3 text-2xl font-sans hover:w-[70%] transform duration-200 hover:bg-[#a676f3]">João</a>
          </div>
        </div>
      </div>

    </section>
  );
};
