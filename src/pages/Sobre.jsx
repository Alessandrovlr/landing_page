import './Sobre.css';

export const Sobre = () => {
    return (
        <section className='section-sobre'>
                <h1>Sobre Nós</h1>
                <p>Desenvolvido por Alessandro luini da silva coutinho e João Carlos Formento</p>
                <h2>Por que criaramos o projeto</h2>
                <p>
                    Este projeto foi desenvolvido com o objetivo de recriar o clássico jogo Breakout, utilizando React, juntamente com JavaScript, HTML5 e CSS. Breakout é um jogo lançado nos anos 70, onde o jogador controla uma plataforma horizontal que deve rebater uma bola, com o objetivo de destruir todos os blocos presentes na tela e acumular pontos.
                    A recriação deste jogo tem como propósito explorar e aplicar conceitos fundamentais de programação, manipulação de elementos gráficos via Canvas, controle de eventos do teclado, lógica de colisão, além de reforçar boas práticas com classes e estruturação de código em JavaScript.
                </p>
                <h2>Tecnologias usadas</h2>
                <p className='lista'>
                    <ul className='lista-ul'>
                        <li className='react'>REACT</li>
                        <li className='html'>HTML</li>
                        <li className='css'>CSS</li>
                        <li className='javascript'>JAVASCRIPT</li>
                    </ul>
                </p>
        </section>
    )
}