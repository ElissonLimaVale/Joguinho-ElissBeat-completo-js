function Sprite(x,y,largura,altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    
    this.desenha = function(xCanvas,yCanvas){
        contex.drawImage(image,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
    }
}

        var user1 = new Sprite(0,0,50,50);
        var user2 = new Sprite(50,0,50,50);
        var user3 = new Sprite(100,0,50,50);
        var user4 = new Sprite(150,0,50,50);
        var user5 = new Sprite(200,0,50,50);
        var user6 = new Sprite(250,0,50,50);
        var user7 = new Sprite(300,0,50,50);
        var user8 = new Sprite(350,0,50,50);
        var user9 = new Sprite(400,0,50,50);
        var user10 = new Sprite(450,0,50,50);
        var user11 = new Sprite(500,0,50,50);
        var user12 = new Sprite(550,0,50,50);
function Spire2(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    
    this.desenha = function(xCanvas,yCanvas){
        contex.drawImage(imageFundo,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
    }
}
        var fundo01 = new Sprite02(0,0,700,500);
        var fundo01 = new Sprite02(700,0,700,500);
        var fundo01 = new Sprite02(1400,0,700,500);
        var fundo01 = new Sprite02(2100,0,700,500);
        var fundo01 = new Sprite02(2800,0,700,500);
        var fundo01 = new Sprite02(3500,0,700,500);