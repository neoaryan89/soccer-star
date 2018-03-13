function addPxToValue(val){
	return val + "px"
}

function getElementById(elementId){
	return document.getElementById(elementId);
}

function setElementStyle(elem, property, value){
	
	elem.style[property] = value;
}

function createPlayer(teamColor,x,y){
	return{
	appearance:{

	"background-color":teamColor
		},
		x:x,
		y:y
	}
}


function createPlayerElement(fieldElement,player) {
		var playerElement= document.createElement("div");
		setElementStyle(playerElement,"backgroundColor",player.appearance["background-color"]);
		fieldElement.appendChild(playerElement);
		setElementStyle(playerElement,"height","50px");
		setElementStyle(playerElement,"width","50px");
		setElementStyle(playerElement,"top",player.y);
		setElementStyle(playerElement,"left",player.x);
}

 function setElementbyId(elementId) {
 	return document.getElementById(elementId);
 }

function getRandomNumber(){
	return Math.floor(Math.random()*75) + "%";
}

function createPlayers(fieldElement, numberOfPlayers,team){
	for (i=0; i< numberOfPlayers; i++){
		var player=createPlayer(team.color,getRandomNumber(),getRandomNumber());
		team.players.push(player);
		createPlayerElement(fieldElement,player);
	}
	return team.players;
}
 
function createTeam(players,color,score) {
	return {
		players:players,
		color:color,
		score:score
	}
}

function assignPLayerToTeam(player,team){    
	team.players.push(player);
	console.log(team);
}

function createBallElement(fieldElement,ball){
      var BallElement= document.createElement("div");
		setElementStyle(BallElement,"backgroundColor",ball.color);
		fieldElement.appendChild(BallElement);
		setElementStyle(BallElement,"height","50px");
		setElementStyle(BallElement,"width","50px");
		setElementStyle(BallElement,"top",ball.y);
		setElementStyle(BallElement,"left",ball.x);
        setElementStyle(BallElement,"border-radius","50%");
        setElementStyle(BallElement,"transform","translate(-50%,-50%)"); 
 
}

function createGoalPostElement(fieldElement,post){
	var PostElement= document.createElement("div");
	setElementStyle(PostElement,"backgroundColor",post.color);
		fieldElement.appendChild(PostElement);
		setElementStyle(PostElement,"height",post.height);
		setElementStyle(PostElement,"width",post.width);
		setElementStyle(PostElement,"top",post.y);
		
    if (post.x==="100%"){
		setElementStyle(PostElement,"right",0);
    }else{
    setElementStyle(PostElement,"left",post.x);	
    }
		setElementStyle(PostElement,"transform","translateY(-50%)");
        setElementStyle(PostElement,"background-color",post.styles.backgroundColor);  
 }

function createLineElement(fieldElement){
	var LineElement=document.createElement("div");
	setElementStyle(LineElement,"backgroundColor","white");
	fieldElement.appendChild(LineElement);
	setElementStyle(LineElement,"height","100%");
	setElementStyle(LineElement,"top",0);
	setElementStyle(LineElement,"left","50%");
	setElementStyle(LineElement,"width","10px");
} 









