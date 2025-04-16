import { useEffect, useRef } from "react";

function BreakoutGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const tecla_pressionada = { KeyA: false, KeyD: false };
    let game_over = false;
    let jogo_iniciado = false;
    let jogo_reiniciado = 1;
    let array_obstaculos = [];

    document.addEventListener("keypress", (e) => {
      if (e.code === "KeyW") {
        jogo_iniciado = true;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyA") tecla_pressionada.KeyA = true;
      if (e.code === "KeyD") tecla_pressionada.KeyD = true;
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "KeyA") tecla_pressionada.KeyA = false;
      if (e.code === "KeyD") tecla_pressionada.KeyD = false;
    });

    class Objetos {
      constructor(x, y, largura, altura) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
      }
      desenha(ctx, cor) {
        ctx.fillStyle = cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
      }
      atualizar() {
        throw new Error("Implementar nas classes filhas");
      }
      setPosicao(x, y) {
        this.x = x;
        this.y = y;
      }
      aumentarVelocidade() {
        throw new Error("Implementar nas classes filhas");
      }
    }

    class Plataforma extends Objetos {
      #velocidade = 0;
      #andarDireita = 5;
      #andarEsquerda = -5;

      andar(dir) {
        this.#velocidade = dir;
      }
      atualizar() {
        if (tecla_pressionada.KeyA && this.x > 0) {
          this.andar(this.#andarEsquerda);
        } else if (
          tecla_pressionada.KeyD &&
          this.x + this.largura < canvas.width
        ) {
          this.andar(this.#andarDireita);
        } else {
          this.#velocidade = 0;
        }

        if (game_over) this.#velocidade = 0;
        this.x += this.#velocidade;
      }
      getVelocidade() {
        return this.#velocidade;
      }
      aumentarVelocidade() {
        this.#andarDireita++;
        this.#andarEsquerda--;
      }
    }

    class Bola extends Objetos {
      #velocidadeX = 3;
      #velocidadeY = 3;

      atualizar() {
        if (jogo_iniciado) {
          this.x -= this.#velocidadeX;
          this.y -= this.#velocidadeY;
          this.colisaoHorizontal();
          this.colisaoVertical();
          this.colisaoPlataforma();
          this.colisaoObstaculo();
        } else {
          this.x += plataforma.getVelocidade();
        }
      }

      colisaoHorizontal() {
        if (this.x <= 0 || this.x + this.largura >= canvas.width) {
          this.#velocidadeX *= -1;
        }
      }

      colisaoVertical() {
        if (this.y <= 0) this.#velocidadeY *= -1;
        if (this.y + this.altura >= canvas.height) {
          this.#velocidadeX = 0;
          this.#velocidadeY = 0;
          game_over = true;
        }
      }

      colisaoPlataforma() {
        if (
          this.y + this.altura >= plataforma.y &&
          this.x + this.largura >= plataforma.x &&
          this.x <= plataforma.x + plataforma.largura &&
          this.y + this.altura <= plataforma.y + plataforma.largura
        ) {
          this.#velocidadeY *= -1;
        }
      }

      colisaoObstaculo() {
        array_obstaculos.forEach((obs) => {
          if (
            this.y + this.altura >= obs.y &&
            this.y <= obs.y + obs.altura &&
            ((this.x + this.largura > obs.x && this.x < obs.x) ||
              (this.x < obs.x + obs.largura &&
                this.x > obs.x + obs.largura))
          ) {
            this.#velocidadeX *= -1;
            obs.colidiu(obs);
          } else if (
            this.x + this.largura >= obs.x &&
            this.x <= obs.x + obs.largura &&
            ((this.y + this.altura > obs.y && this.y < obs.y) ||
              (this.y < obs.y + obs.altura &&
                this.y + this.altura > obs.y + obs.altura))
          ) {
            this.#velocidadeY *= -1;
            obs.colidiu(obs);
          }
        });
      }

      aumentarVelocidade() {
        this.#velocidadeX += this.#velocidadeX > 0 ? 1 : -1;
        this.#velocidadeY += this.#velocidadeY > 0 ? 1 : -1;
      }
    }

    class Obstaculos extends Objetos {
      #valorPonto;
      constructor(x, y, l, a, ponto = 0) {
        super(x, y, l, a);
        this.#valorPonto = ponto;
      }
      colidiu(o) {
        pontuacao.setPontuacao(this.#valorPonto);
        array_obstaculos = array_obstaculos.filter((ob) => ob !== o);
      }
    }

    class Pontuacao {
      #pontos = 0;
      setPontuacao(v) {
        this.#pontos += v;
      }
      getPontuacaoTotal() {
        return this.#pontos;
      }
      resetaPontuacao() {
        this.#pontos = 0;
      }
      desenhaPontuacao(ctx, color, font) {
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText(`Pontos: ${this.#pontos}`, 30, 50);
      }
    }

    function desenhaGameOver() {
      ctx.fillStyle = "white";
      ctx.font = "40px Arial";
      ctx.fillText("Pontuação máxima", canvas.width - 450, canvas.height / 3);
      ctx.fillText(
        `${pontuacao.getPontuacaoTotal()}`,
        canvas.width - 300,
        canvas.height / 2.3
      );
      desenhaBotaoGameOver();
    }

    function desenhaBotaoGameOver() {
      canvas.addEventListener("click", () => {
        window.location.reload();
      });
      ctx.fillStyle = "grey";
      ctx.fillRect(canvas.width - 480, canvas.height - 320, 420, 100);
      ctx.fillStyle = "white";
      ctx.font = "40px Arial";
      ctx.fillText("Recomeçar", canvas.width - 380, canvas.height - 255);
    }

    const pontuacao = new Pontuacao();
    const plataforma = new Plataforma(canvas.width - 330, canvas.height - 50, 100, 15);
    const bolinha = new Bola(canvas.width - 290, canvas.height - 71, 20, 20);

    function obstaculoBuilder() {
      for (let linha = 1; linha <= 6; linha++) {
        for (let coluna = 1; coluna <= 6; coluna++) {
          let dy = 40;
          let dx = 90;
          array_obstaculos.push(
            new Obstaculos(
              canvas.width - 630 + dx * linha,
              canvas.height - 650 + dy * coluna,
              80,
              30,
              (700 - 100 * coluna) * jogo_reiniciado * 0.2
            )
          );
        }
      }
    }

    function desenhaObstaculos() {
      array_obstaculos.forEach((o) => {
        let cor = "white";
        switch (o.y) {
          case 90:
            cor = "red";
            break;
          case 130:
            cor = "orange";
            break;
          case 170:
            cor = "yellow";
            break;
          case 210:
            cor = "green";
            break;
          case 250:
            cor = "blue";
            break;
          case 290:
            cor = "purple";
            break;
        }
        o.desenha(ctx, cor);
      });
    }

    function loop() {
      if (game_over) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        desenhaGameOver();
        return;
      }

      if (array_obstaculos.length === 0) {
        bolinha.setPosicao(canvas.width - 290, canvas.height - 71);
        plataforma.setPosicao(canvas.width - 330, canvas.height - 50);
        jogo_iniciado = false;
        jogo_reiniciado++;
        bolinha.aumentarVelocidade();
        plataforma.aumentarVelocidade();
        obstaculoBuilder();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pontuacao.desenhaPontuacao(ctx, "white", "30px Arial");
      desenhaObstaculos();
      bolinha.desenha(ctx, "white");
      bolinha.atualizar();
      plataforma.desenha(ctx, "red");
      plataforma.atualizar();
      requestAnimationFrame(loop);
    }

    obstaculoBuilder();
    loop();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="550" height="700" style={{ border: "2px solid", borderRadius: "10px", backgroundColor: "rgb(15,15,15)" }} />
    </div>
  );
}

export default BreakoutGame;