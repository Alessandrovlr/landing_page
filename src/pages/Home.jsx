import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <section>
                <h1>Breakout Legacy</h1>
                <p>Reviva o clássico. Quebre blocos, marque pontos e desafie seus reflexos!</p>

                <p>Este é um projeto visando fazer o conhecido jogo Breakout na tecnologia Javascript. Breakout é um jogo antigo que o objetivo é controlar uma barra horizontal que deve rebater uma bola para destruir todos os blocos e ganhar pontos, o jogo acaba quando a bola cai da tela</p>
                <img src="/img/jogo.png" alt="imagem ilustrativa do jogo Breakout" style={{width: "350px"}}/>
                <br />
                <Link to='/Projeto'>Veja como funciona</Link>
        </section>
    )
}