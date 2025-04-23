// export const PageNotFound = () => {
//     return (
//         <div>
//             <h1>
//                 404 Página não encontrada
//             </h1>
//             <img src="./img/paginaerro.jpg" alt="pagina nao encontrada"/>
//         </div>
//     )
// }

export const PageNotFound = () => {
    return (
      <div className="relative w-full h-screen ">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-50 text-white">
          <h1 className="text-4xl text-[rgb(0,0,0)] font-bold mb-4">404</h1>
          <p className="text-xl text-[rgb(0,0,0)]">Página não encontrada</p>
        </div>
      </div>
    );
  };