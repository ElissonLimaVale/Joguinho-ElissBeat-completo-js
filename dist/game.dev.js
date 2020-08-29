"use strict";

var x = 80,
    y = 200,
    frame = 0,
    Altura,
    Largura,
    screen,
    contex,
    cor_fundo,
    record = 0,
    image,
    person = 1,
    musicPlay,
    recordHard = 0;
Altura = window.innerHeight;
Largura = window.innerWidth;
cor_fundo = 1;

if (Largura >= 820) {
  Largura = 690;
  Altura = 490;
}

var estadoGame = {
  pausado: 1,
  pedeu: 0,
  iniciar: 1,
  hard: 0,
  over: function over() {
    this.perdeu = 1;
  },
  jogar: function jogar() {
    if (this.pausado == 1) {
      this.pausado = 0;

      if (this.iniciar == 1) {
        this.iniciar = 0;
      }

      document.getElementById("playButton1").style = "background: url('imagens/pause.png');background-position: 100%;background-size: 100%;";
      document.getElementById("t1").innerHTML = "Pausar";
    } else {
      this.pausado = 1;
      document.getElementById("playButton1").style = "background: url('imagens/play.png');background-position: 100%;background-size: 100%;";
      document.getElementById("t1").innerHTML = "Continuar";
    }
  }
}; // A variavel abaixo é um objeto que contem todos os métodos e atributos
// do jogador/usuario

var user = {
  x: Largura / 2 - 25,
  y: Altura / 2 - 25,
  altura: 50,
  largura: 50,
  cor: "rgb(254,150,3)",
  velocidade: 50,
  // Atualiza os valores das variaveis fazendo o objeto mudar de estado ou de posição
  atualiza: function atualiza(comand) {
    if (comand == "32") {
      estadoGame.jogar();
    }

    if (estadoGame.pausado == 0) {
      if (comand == "ARROWUP" || comand == "W") {
        this.y -= this.velocidade; // Decrementa o eixo Y fazendo o objeto subir
      } else if (comand == "ARROWDOWN" || comand == "S") {
        this.y += this.velocidade; // Increenta o eixo Y fazendo o objeto descer
      }

      if (comand == "ARROWRIGHT" || comand == "D") {
        this.x += this.velocidade; // Incrementa o eixo X fazendo o objeto andar para direita
      } else if (comand == "ARROWLEFT" || comand == "A") {
        this.x -= this.velocidade; // Decreme o eixo X fazendo o objeto andar para esquerda
      }
    }
  },
  // a função abaixo desenha este objeto na tela e está sendo chamada em loop
  // para ficar sempre atualizando sua posição de acordo com o valores das variaveis
  // de eixo X e Y
  desenha: function desenha() {
    // Condições para esbarrar nas paredes do jogo 
    if (this.y <= 0) {
      this.y = 0;
    } else if (this.y >= Altura - this.altura) {
      this.y = Altura - this.altura;
    }

    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x >= Largura - this.largura) {
      this.x = Largura - this.largura;
    } //O código abaixo desenha este objeto na tela repassando as cordenadas X e Y


    switch (person) {
      case 1:
        user1.desenha(this.x, this.y);
        break;

      case 2:
        user2.desenha(this.x, this.y);
        break;

      case 3:
        user3.desenha(this.x, this.y);
        break;

      case 4:
        user4.desenha(this.x, this.y);
        break;

      case 5:
        user5.desenha(this.x, this.y);
        break;

      case 6:
        user6.desenha(this.x, this.y);
        break;

      case 7:
        user7.desenha(this.x, this.y);
        break;

      case 8:
        user8.desenha(this.x, this.y);
        break;

      case 9:
        user9.desenha(this.x, this.y);
        break;

      case 10:
        user10.desenha(this.x, this.y);
        break;

      case 11:
        user11.desenha(this.x, this.y);
        break;

      case 12:
        user12.desenha(this.x, this.y);
        break;
    }
  }
},
    obsCima = {
  x: Math.floor(650 * Math.random()),
  y: -50,
  largura: 50,
  altura: 50,
  gravidade: 0.35,
  velocidade: 0,
  tempoInsere: 0,
  score: 0,
  person: 2,
  atualiza: function atualiza() {
    if (this.y + this.altura >= user.y && this.y <= user.y + user.altura && this.x + this.largura >= user.x && this.x <= user.x + user.largura) {
      if (this.score > record) {
        localStorage.setItem("record", this.score);
      }

      if (estadoGame.hard == 1) {
        if (obsCima.score > recordHard) {
          localStorage.setItem("recordHard", obsCima.score);
        }
      }

      estadoGame.pausado = 1;
      gameOver();
      estadoGame.over();
      user.y = this.y + this.altura;
    }

    if (this.y >= 500) {
      this.score += 1;
      this.y = 0 - this.altura;
      this.velocidade = 0;
      this.insere();
    }

    this.velocidade += this.gravidade;
    this.y += this.velocidade;
    this.gravidade += 0.0001;
  },
  insere: function insere() {
    this.x = Math.floor(650 * Math.random());
    this.person = Math.floor(12 * Math.random());
  },
  desenha: function desenha() {
    switch (this.person) {
      case 1:
        user1.desenha(this.x, this.y);
        break;

      case 2:
        user2.desenha(this.x, this.y);
        break;

      case 3:
        user3.desenha(this.x, this.y);
        break;

      case 4:
        user4.desenha(this.x, this.y);
        break;

      case 5:
        user5.desenha(this.x, this.y);
        break;

      case 6:
        user6.desenha(this.x, this.y);
        break;

      case 7:
        user7.desenha(this.x, this.y);
        break;

      case 8:
        user8.desenha(this.x, this.y);
        break;

      case 9:
        user9.desenha(this.x, this.y);
        break;

      case 10:
        user10.desenha(this.x, this.y);
        break;

      case 11:
        user11.desenha(this.x, this.y);
        break;

      case 12:
        user12.desenha(this.x, this.y);
        break;

      default:
        user9.desenha(this.x, this.y);
        break;
    }
  }
},
    obsDireita = {
  x: -50,
  y: Math.floor(450 * Math.random()),
  largura: 50,
  altura: 50,
  gravidade: 0.25,
  velocidade: 0,
  person: 3,
  atualiza: function atualiza() {
    if (this.x + this.largura >= user.x && this.x <= user.x + user.largura && this.y + this.altura >= user.y && this.y <= user.y + user.altura) {
      if (obsCima.score > recordHard) {
        localStorage.setItem("recordHard", obsCima.score);
      }

      estadoGame.pausado = 1;
      gameOver();
      estadoGame.over();
      user.x = this.x + this.largura;
    }

    if (estadoGame.pausado == 0) {
      if (this.x >= 700) {
        this.x = 0 - this.largura;
        this.velocidade = 0;
        this.insere();
      }

      this.velocidade += this.gravidade;
      this.x += this.velocidade;
      this.gravidade += 0.0001;
    }
  },
  insere: function insere() {
    this.y = Math.floor(450 * Math.random());
    this.person = Math.floor(12 * Math.random());
  },
  desenha: function desenha() {
    switch (this.person) {
      case 1:
        user1.desenha(this.x, this.y);
        break;

      case 2:
        user2.desenha(this.x, this.y);
        break;

      case 3:
        user3.desenha(this.x, this.y);
        break;

      case 4:
        user4.desenha(this.x, this.y);
        break;

      case 5:
        user5.desenha(this.x, this.y);
        break;

      case 6:
        user6.desenha(this.x, this.y);
        break;

      case 7:
        user7.desenha(this.x, this.y);
        break;

      case 8:
        user8.desenha(this.x, this.y);
        break;

      case 9:
        user9.desenha(this.x, this.y);
        break;

      case 10:
        user10.desenha(this.x, this.y);
        break;

      case 11:
        user11.desenha(this.x, this.y);
        break;

      case 12:
        user12.desenha(this.x, this.y);
        break;

      default:
        user12.desenha(this.x, this.y);
        break;
    }
  }
};

function reset() {
  record = 0;
  recordHard = 0;
  obsCima.score = 0;
  obsCima.y = -50;
  obsCima.x = Math.floor(650 * Math.random());
  obsCima.gravidade = 0.35;
  obsCima.velocidade = 0;
  obsDireita.x = -50;
  obsDireita.y = Math.floor(450 * Math.random());
  obsDireita.gravidade = 0.25;
  obsDireita.velocidade = 0;
  estadoGame.pausado = 0;
  estadoGame.perdeu = 0;
  estadoGame.iniciar = 1;
  user.x = Largura / 2 - user.largura / 2;
  user.y = Altura / 2 - user.altura / 2;
  estadoGame.jogar();
  document.getElementById("t1").innerHTML = "Jogar";
  document.getElementById("gameover").style = "top: -70%;";
}

screen = document.createElement("canvas");
screen.width = Largura;
screen.height = Altura; //====
// Capturando o contexto do canvas/tela do jogo

contex = screen.getContext("2d");
image = new Image();
image.src = "imagens/ptodos.png";
imageFundo = new Image();
imageFundo.src = "imagens/TodosFundos.png"; // Inserindo o Canvas dentro de body/corpo da pagina

document.body.appendChild(screen); //Captura quais teclas são digitadas e chama a função
// user.atualiza() apassando a tecla digitada como parâmetro.

document.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (estadoGame.pedeu != 1 || estadoGame.pausado != 1) {
    if (event.keyCode == "32") {
      user.atualiza(event.keyCode);
    } else {
      user.atualiza(event.key.toUpperCase());
    }
  }
} //=====


function desenha() {
  // Renderisa a tela do jogo com  contexto do canvas
  switch (cor_fundo) {
    case 1:
      fundo01.desenha(-10, -5);
      break;

    case 2:
      fundo02.desenha(-10, -5);
      break;

    case 3:
      fundo03.desenha(-10, -5);
      break;

    case 4:
      fundo04.desenha(-10, -5);
      break;

    case 5:
      fundo05.desenha(-10, -5);
      break;

    case 6:
      fundo06.desenha(-10, -5);
      break;

    default:
      fundo01.desenha(-10, -5);
  } //====


  var coloral = "#fff";

  if (cor_fundo == 1) {
    coloral = "rgba(0,0,0,.8)";
  }

  contex.fillStyle = coloral;
  contex.font = "20px Franklin Gothic";
  contex.fillText("Pontos: " + obsCima.score, 20, 30);
  record = localStorage.getItem("record");

  if (record == null) {
    record = 0;
  }

  contex.fillStyle = coloral;
  contex.font = "20px Franklin Gothic";
  contex.fillText("Record: " + record, 20, 480);
  recordHard = localStorage.getItem("recordHard");

  if (recordHard == null) {
    recordHard = 0;
  }

  contex.fillStyle = coloral;
  contex.font = "20px Franklin Gothic";
  contex.getItem;
  contex.fillText("| Record Hard: " + recordHard, 130, 480);
  user.desenha(); //====

  obsCima.desenha();
  obsDireita.desenha();
}

function atualiza() {
  frame++;

  if (estadoGame.pausado == 0 && estadoGame.iniciar == 0) {
    user.atualiza();
    obsCima.atualiza();

    if (estadoGame.hard == 1) {
      obsDireita.atualiza();
    }
  }
}

function rodar() {
  desenha();
  atualiza();
  requestAnimationFrame(rodar);
} /// ***********************************************************************************
//#######################   Camada de escolhas menu e desing   #############################


function abreIcone(id) {
  if (id == 2) {
    id = "icon";
  } else {
    id = "contra";
  }

  var teste = document.getElementById(id).style.left;

  if (teste == "0px") {
    document.getElementById(id).style = "left: -300px;";
  } else {
    document.getElementById(id).style = "left: 0px;";
  }
}

function abreCor() {
  var teste = document.getElementById("cor").style.top;

  if (teste == "0px") {
    document.getElementById("cor").style = "top: -140px;";
  } else {
    document.getElementById("cor").style = "top: 0px;";
  }
}

function loadingDica() {
  document.getElementById("dica002").style = "animation: initDica 4s infinite;";
}

function colorBack(color) {
  cor_fundo = color;
}

function hard() {
  if (estadoGame.hard == 0) {
    document.getElementById("playButton5").style = "background: url('imagens/hard_on.png');background-position: 100%;background-size: 100%;";
    estadoGame.hard = 1;
  } else {
    document.getElementById("playButton5").style = "background: url('imagens/hard_off.png');background-position: 100%;background-size: 100%;";
    estadoGame.hard = 0;
  }
}

function gameOver() {
  document.getElementById("gameover").style = "top: 20%;";
}

function newperson(numero) {
  person = numero;
}

cont = Math.floor(6 * Math.random() + 1);

function entrada() {
  document.getElementById("contagem").innerHTML = cont;
  document.getElementById("init01").style = "display: none;";
  cont -= 1;

  if (cont < 0) {
    document.getElementById("init").style = "display: none;";
  }
}

function initInit() {
  document.getElementById("init01").style = "opacity: 0;animation: initInit 2s linear;";

  if (cont >= 0) {
    setInterval(entrada, 1000);
  }
}

setTimeout(loadingDica, 2000); // Chama a função rodar() que inicia o loop do jogo

rodar(); //===

function initReproduz() {
  musicTema = document.getElementById("resident");

  if (estadoGame.iniciar == 1) {
    musicTema.play();
  } else {
    musicTema.pause();
  }
}

function gamePlay() {
  musicPlay = document.getElementById("id05");

  if (estadoGame.iniciar == 0 || estadoGame.pausado == 0) {
    musicPlay.play();
  } else {
    musicPlay.pause();
  }
}