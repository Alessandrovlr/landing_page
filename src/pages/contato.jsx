import "./Contato.css";

export const Contato = () => {
  return (
    <section className="flex mt-10 p-10 flex-row justify-center items-center bg-[rgb(49,49,49)] rounded-3xl w-2/3 h-[90%]">
      <div>
        <h1>Contados dos devs</h1>
        <h2>E-mails</h2>
        <p>alessandro_coutinho@estudante.sesisenai.org.br</p>
        <p>joao_c_formento@estudante.sesisenai.org.br</p>
      </div>
      <div>
        <h2>GitHub</h2>
        <div className="links">
          <a href="https://github.com/Alessandrovlr">Alessandro</a>
          <a href="https://github.com/JoaoCarlosForment0">João</a>
        </div>
      </div>
    </section>
  );
};

//aa
