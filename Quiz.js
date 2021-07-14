class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();

      
    }
  }

  play(){


    question.hide();
    background("yellow");
    

    textSize(30);
    fill("black");
    text("Result  Of  The  Quiz",330,50);
    text("...................................",320,70);
    Contestant.getPlayerInfo();

    if(allContestants !=undefined){

      var display_answers=230;
      textSize(15);
      fill("darkblue");
      text("Note :Contestent Who Answered Correct Are Highlighted In Green Colour",250,250);
    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns=== allContestants[plr].answer){
        fill("green");
        text(allContestants[plr].name,200,300);
        text(allContestants[plr].answer,400,300)
        
       } else if(correctAns!=allContestants[plr].answer){
        fill("red");
        text(allContestants[plr].name,200,350);
        text(allContestants[plr].answer,400,350);
  
      }
    }
    }
  }
}