//Data decorations

var game = {
	teams: [],
	width:100*10,
	field:{
		color:"green",
		length:50*10,
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
     this.teams[0].players.concat(createPlayers(this.field.element,7,this.teams[0]));
 	 this.teams[1].players.concat(createPlayers(this.field.element,7,this.teams[1]));   
     
     //Ball
     createBallElement(this.field.element,this.ball);      
    //Line
    createLineElement(this.field.element,this.line);
    }

}
game.init();

 








