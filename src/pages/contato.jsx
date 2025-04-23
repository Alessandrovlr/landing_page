export const Contato = () => {
  return (
    <section className="flex mt-10 p-10 pt-20 flex-col justify-center items-center bg-[rgb(49,49,49)] rounded-3xl w-2/3 h-[90%] gap-2">
      <div className="flex flex-col w-[100%] h-[40%] gap-4">
        <h1  className="text-3xl font-mono text-[rgb(240,248,255)]">Contados dos devs</h1>
        <h2 className="text-2xl font-mono text-[rgb(240,248,255)]">E-mails</h2>
        <p className="text-1xl font-mono text-[rgb(240,248,255)]">alessandro_coutinho@estudante.sesisenai.org.br</p>
        <p className="text-1xl font-mono text-[rgb(240,248,255)]">joao_c_formento@estudante.sesisenai.org.br</p>
      </div>
      <div className="flex flex-col items-center w-[100%] h-[60%] gap-5">
        <h2 className="text-2xl text-[rgb(240,248,255)]">GitHub</h2>
        <div className="flex flex-col w-[80%] gap-5 items-center">
          <a href="https://github.com/Alessandrovlr" className="bg-[rgb(240,248,255)] w-[50%] rounded-lg p-3 text-2xl font-sans hover:w-[60%] transform duration-200">Alessandro</a>
          <a href="https://github.com/JoaoCarlosForment0" className="bg-[rgb(240,248,255)] w-[50%] rounded-lg p-3 text-2xl font-sans hover:w-[60%] transform duration-200">João</a>
        </div>
      </div>
    </section>
  );
};
