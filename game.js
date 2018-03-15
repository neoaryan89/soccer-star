//Data decorations

var game = {
	teams: [],
	currentPlayer: {
		team:0,
		player:3
	},
	field:{
		color:"green",
		length:50*10,
		width:100*10,
		calculateLengthPixels: function() {
			return addPxToValue(this.length); //returns "100px"
		},
	   calculateWidthPixels: function() {
	      return addPxToValue(this.width);    //returns 50px
	   },
	 	goalPosts:[{
			"height":"100",
			"width":"20",
			"x":0,
			"y":"50%",
			"styles":{
				"backgroundColor": "white"
			}         

	   	},

		{
			"height":"100",
			"width":"20",
			"x":"100%",
			"y":"50%",
			"styles":{
				"backgroundColor": "white"
			}         

	 	}],
	   line:{
	      "height":"100",
	      "x":0,
	      "y":0, 
	      "styles":{
	      	"backgroundColor":"black"
	      }
	   },
	   element:null 
    },   //Close field
	ball:{
		"x":"50%",
		"y":"50%",
    	"shape":"circle",
    	"color":"white",
    },
    doFunctionForEveryPlayer: function(fn){
    for (i=0; i< this.teams.length; i++){
	  for (x=0; x<this.teams[i].players.length;x++){
      fn(this.teams[i].players[x],x,i);
	  }	
    }

    },
    setCurrentPlayer: function (currentPlayer){
    this.currentPlayer = currentPlayer;
    this.doFunctionForEveryPlayer(
    	function(player){
    	player.element.style.boxShadow = "none";	
    	player.element.draggable = false;
    	}	
	);	 
    this.teams[currentPlayer.team].players[currentPlayer.player].element.style.boxShadow= "0 0 0 10px rgba(0,0,0,.3)";
    this.teams[currentPlayer.team].players[currentPlayer.player].element.draggable = true ;
    },
    initEvents: function(){
    var self=this;
    this.doFunctionForEveryPlayer(
    	function(player,playerIndex,teamIndex){
      		//player change listener
    		self.addEventListener(player,"click", function(){
    			//check if the player is in the current team
    			if (teamIndex===self.currentPlayer.team) {   			
    				self.setCurrentPlayer({team:teamIndex, player:playerIndex});    			    		   
    			}
    		});
    		//player dragstart listener
    	self.addEventListener(player,"dragstart", function(event){    			    		   
    		if (playerIndex===self.currentPlayer.player){    		
    		console.log("I am dragging");
    	}
    		});
    		//player dragend listener
    	self.addEventListener(player,"dragend", function(event){    			    		   
    		if (playerIndex===self.currentPlayer.player){    		
    		console.log("I am done dragging",event);
    	    player.element.style.top=parseInt(player.element.style.top.replace("px","")) + event.offsetY + "px" ; 
    		player.element.style.left=parseInt(player.element.style.left.replace("px","")) + event.offsetX + "px" ;
    	}
    		});
    	}	
	);	
    },
    addEventListener: function(player,event,fn){
     	player.element.addEventListener(event,fn);
    },
    init: function() {
    	// field
    	this.field.element = document.createElement("div");
    	this.field.element.id="field";
    	setElementStyle(this.field.element,"backgroundColor",this.field.color);
		setElementStyle(this.field.element,"width",this.field.calculateWidthPixels());
		setElementStyle(this.field.element,"height",this.field.calculateLengthPixels());
        document.body.appendChild(this.field.element);
        // Goal Posts
		for (var i = this.field.goalPosts.length - 1; i >= 0; i--) {
			createGoalPostElement(this.field.element,this.field.goalPosts[i]);
		}
	 //Teams	
	 this.teams.push(createTeam([],"red",0)),
     this.teams.push(createTeam([],"blue",0))
     this.teams[0].players.concat(createPlayers(this.field.element,7,this.teams[0],this.field.width,this.field.length));
 	 this.teams[1].players.concat(createPlayers(this.field.element,7,this.teams[1],this.field.width,this.field.length));   
     
     //Ball
     createBallElement(this.field.element,this.ball);      
    //Line
    createLineElement(this.field.element,this.line);
     
     this.setCurrentPlayer({team:0, player: 2});
     
     this.initEvents();

    }
}
game.init();

 








