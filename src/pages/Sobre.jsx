

export const Sobre = () => {
    return (
        <section className='flex mt-10 p-10 flex-row justify-center items-center bg-[rgb(49,49,49)] rounded-3xl w-2/3 h-[90%] gap-5'>

                <div className="flex flex-col w-1/2 h-[100%] gap-[5%] items-center">

                    <h1 className="m-0 font-mono text-3xl text-bold text-[rgb(136,83,221)] font-bold">Sobre Nós</h1>

                    <div className="text-[rgb(240,248,255)] font-mono">
                        <p>Desenvolvido por</p>
                        <p>Alessandro Coutinho</p>
                        <p>João Carlos Formento</p>
                    </div>

                    <h2 className="m-0 font-mono text-3xl font-bold text-[rgb(136,83,221)] ">Tecnologias usadas</h2>
                    <ul className='list-decimal text-lg font-mono w-1/2'>
                        <li className='text-orange-600'>HTML</li>
                        <li className='text-purple-500'>Vite</li>
                        <li className='text-blue-400'>React</li>
                        <li className='text-amber-300'>JavaScript</li>
                        <li className='text-blue-500'>Tailwind CSS</li>
                    </ul>

                </div>

                <div className="flex flex-col w-1/2  h-[100%] gap-[8%]">

                    <h2 className="text-[rgb(136,83,221)] font-mono font-bold text-3xl">Por que criaramos o projeto</h2>

                    <p className="text-[rgb(240,248,255)] font-mono text-sm">
                        Este projeto foi desenvolvido com o objetivo de recriar o clássico jogo Breakout, utilizando React, juntamente com JavaScript, HTML5 e CSS. Breakout é um jogo lançado nos anos 70, onde o jogador controla uma plataforma horizontal que deve rebater uma bola, com o objetivo de destruir todos os blocos presentes na tela e acumular pontos.
                        A recriação deste jogo tem como propósito explorar e aplicar conceitos fundamentais de programação, manipulação de elementos gráficos via Canvas, controle de eventos do teclado, lógica de colisão, além de reforçar boas práticas com classes e estruturação de código em JavaScript.
                    </p>
                </div>
                
        </section>
    )
}