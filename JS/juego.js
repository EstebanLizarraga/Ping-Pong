    limiteArriba=innerHeight/8;
    limiteAbajo=innerHeight-170;  
    let b = new Ball(innerWidth/2, innerHeight/2,30,4,limiteArriba,limiteAbajo);
    let jugador1 = new player(1,limiteAbajo/2,300,1000,limiteArriba,limiteAbajo);
    let jugador2 = new player(2,limiteAbajo/2,300,1000,limiteArriba,limiteAbajo);
    //var inciar = 0;

    //var btn = document.getElementById("btnJugar");
       class Game{
    constructor(){
       
    }

   

    display(){

   
rect(300,limiteArriba,710,limiteAbajo-77);
        fill('blue');

        this.mostrarPuntaje();
        this.mostrarIntrucciones();
        b.display();
        jugador1.display();
        jugador2.display();
        this.puntuacion();

       
        
    }

    mostrarPuntaje(){
        textSize(30);
        text(jugador1.getPuntaje(), 300, 30);
        text(jugador2.getPuntaje(), 1000, 30);
    }

    mostrarIntrucciones(){
        

    }

    puntuacion(){
            if(b.getX()<jugador1.getX()){
                jugador2.setPuntaje(1);
                this.reiniciar();
            }
           if(b.getX()>jugador2.getX()){
                jugador1.setPuntaje(1);
                this.reiniciar();
            }    
    }
    reiniciar(){
    b.setX(innerWidth/2);
    b.setY(innerHeight/2);
    jugador1.posicion();
    jugador2.posicion();
    }   
}