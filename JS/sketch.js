let juego= new Game();
var iniciar = 0;

 var btn = document.getElementById("btnJugar");




btn.onclick = function(){

if(iniciar == 0){
      iniciar = 1;
    }else{
    	inciar = 0;
    }

}


function draw(){
	

     if(iniciar == 1){
     	background('#FFFFFF');
     	createCanvas(windowWidth-10,windowHeight-5);
     	juego.display();
     	
     }

			
}






