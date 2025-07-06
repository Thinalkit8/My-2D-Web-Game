function start(event){
    //alert(event.key);

    if(event.key == "Enter" && runworker==0 ){
        Run();
        walk();
        timeRemain();
        runsound.play();
    }

    if(event.key == " "){
        if ( attackworker==0 && runworker==0 && isrun==true) {

             attack();
             attacksound.play ();
             yourscore()
        }
    }
}





var runimage = 1 ;
var runworker = 0;
var knightML = 80 ;
var isrun = false ;
var runsound = new Audio ("run.mp3");
runsound.loop = true ;

function Run() {

    isrun = true;

    runworker = setInterval(()=>{

       runimage++;

       if(runimage==11){
           runimage=1;
    }

    if(knightML < 1280){

        knightML = knightML + 20 ;

        document.getElementById("knight").style.marginLeft = knightML + "px";
    }

    if(knightML == 1280){
        clearInterval(runworker);
        runworker = 0 ;
        runsound.pause();
        attack();
        attacksound.play();
    }

    document.getElementById("knight").src = "Run"+runimage+".png";


    },100);
   
}







var walkimage= 1 ;
var walkworker = 0 ;
var zombieML = 1680 ;

function walk() {

    walkworker = setInterval(()=>{

        walkimage++;

        if(walkimage==11){
            walkimage=1;
    }

    if(zombieML > 1380){

        zombieML = zombieML - 10 ;

        document.getElementById("zombi").style.marginLeft = zombieML + "px";
    }


        if(zombieML == 1380){
        clearInterval(walkworker);
        walkworker = 0 ;
    }

        document.getElementById("zombi").src = "Walk"+walkimage+".png";

    },200);

}










var attackimage = 1 ;
var attackworker = 0 ;
var attackcount = 0 ;
var attacksound = new Audio("attack.mp3");

function attack(){

    attackworker = setInterval(()=>{

    attackimage++

    if(attackimage==11){
        attackimage=1 ;
        clearInterval(attackworker);
        attackworker= 0 ;
    }

    document.getElementById("knight").src = "Attack"+attackimage+".png";


    },100);

    if(attackcount == 6) {

        alert("You Won !");
        window.location.reload();
    }

    attackcount++
   
}






var time = 50 ;
var timeWorker = 0;

function timeRemain(){

    timeWorker = setInterval(()=>{

        time--;

        if(time == 0 ){

            alert("Game Over ...!!!");
            window.location.reload();
        }

        document.getElementById("time").innerHTML = "Your Remaining Time : " + time ;

    },500);
        

}






var score = 0 ;

function yourscore(){

    if(attackcount < 7){

        score++

    }

    document.getElementById("score").innerHTML= "Your Score : " + score ;
}
