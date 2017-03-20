//$(document).ready(function(){
//$('button').click(function(){
//      $("#homeslice").fadeOut()
//  });
//});



function Spot(name,height,wind,direction){
    this.name = name
    this.height = height
    this.wind = wind
    this.direction = direction

}

function Surfer(ability,age){
    this.ability = ability
    this.age = age
    this.surfboard = [];

    this.addBoard = function(quiver){
        this.surfboard.push(quiver)
    }
}

function Quiver(height,type,numFins){
    this.height = height
    this.type = type
    this.numFins = numFins
}

function saveBoard() {
    var  typeofboard = document.getElementById("type").innerHTML
     var boardheight = document.getElementById("boardHeight").innerHTML
     var numfins = document.getElementById("numFins").innerHTML

    //grab board info from page

    board = new Quiver(boardheight,typeofboard,numfins)
    surfer.addBoard(board);
    console.log(surfer);


}


/*function examples(){
 var ability = document.getElementById("ability").value
 var age = document.getElementById("age").value
 var spot1= new Spot("pacifica",4,9,"onshore",2)
 var spot2= new Spot("OB",10,3,"offshore",8)
 var surfer1 = new Surfer(ability,age)
 var quiver1 = new Quiver(8.5,"longboard",1)
 var quiver2 = new Quiver(6,"shortboard",3)

 surfer1.addBoard(quiver1)
 surfer1.addBoard(quiver2)

 console.log(surfer1)
 }*/

function chooseSurfer(){
     var Name = document.getElementById("name").value
     var height = document.getElementById("height").value
     var windspeed = document.getElementById("Wind").value
     var winddirection = document.getElementById("Direction").value
     var ability = document.getElementById("ability").value
     var age = document.getElementById("age").value

    //make global?
    surfer = new Surfer(ability,age);
    surfspot= new Spot(Name, height, windspeed, winddirection);

    if(surfer.ability == "expert" && surfer.age == "young") {
        if (surfspot.height < 4 || (surfspot.wind > 15 && surfspot.direction == "onshore")) {
            document.getElementById("output").innerHTML = "You can handle it at " + surfspot.name  + ", but might not be great surfing for a yougun"
        }
        else if (surfspot.height >= 8 && (surfspot.wind > 5 && surfspot.direction == "onshore")){
            document.getElementById("output").innerHTML = "The surf out at " + surfspot.name + " is alright, might as well get a sesh in while your still a grom"
        }
        else if(surfspot.height > 8 && surfspot.direction == "onshore"){
            document.getElementById("output").innerHTML = "Looks like the surf is big at " + surfspot.name + " but the conditions are very good. Go surf if you dare you young buck"
        }
        else if(surfspot.height > 8 && surfspot.direction == "offshore"){
            document.getElementById("output").innerHTML = "Waves are legendary today at " + surfspot.name + ". Go get pitted grommeister"
        }
    }
    else if(surfer.ability == "expert" && surfer.age == "medium"){
        if (surfspot.height < 4 || (surfspot.wind > 15 && surfspot.windirection == "onshore")) {
            document.getElementById("output").innerHTML = "You can handle it at " + surfspot.name + ", but might not be great surfing for a member of generation X "
        }
        else if (surfspot.height >= 8 && (surfspot.wind > 5 && surfspot.direction == "onshore")){
            document.getElementById("output").innerHTML = "The surf out at " + surfspot.name + " is alright, might as well get a sesh in while your still somewhat young"
        }
        else if(surfspot.height > 8 && surfspot.direction == "onshore"){
            document.getElementById("output").innerHTML = "Looks like the surf is big at " + surfspot.name + " but the conditions arent' very good. Time for the middle age man to show his courage"
        }
        else if(surfspot.height > 8 && surfspot.direction == "offshore"){
            document.getElementById("output").innerHTML = "Waves are legendary today at " + surfspot.name + ". Get pitted like you know how to"
        }

    }
    else if(surfer.ability == "expert" && surfer.age == "old"){
        if (surfspot.height < 4 || (surfspot.wind > 15 && surfspot.direction == "onshore")) {
            document.getElementById("output").innerHTML = "You can handle it at " + surfspot.name + ", but might not be great surfing for an old codger like you"
        }
        else if (surfspot.height >= 8 && (surfspot.wind > 5 && surfspot.direction == "onshore")){
            document.getElementById("output").innerHTML = "The surf out at " + surfspot.name + " is alright, might as well get a sesh in while your still alive"
        }
        else if(surfspot.height > 8 && surfspot.direction == "onshore"){
            document.getElementById("output").innerHTML = "Looks like the surf is big at " + surfspot.name + " but the conditions are very good. Why risk your brittle bones"
        }
        else if(surfspot.height > 8 && surfspot.direction == "offshore"){
            document.getElementById("output").innerHTML = "Waves are legendary today at " + surfspot.name + ". Go get pitted one last time"
        }

    }
    else if(surfer.ability == "intermediate" && surfer.age == "young"){
        if(surfspot.height >= 8){
            document.getElementById("output").innerHTML = "Probably a little to big at " + surfspot.name + ". Live to surf another day grom"
        }
        else if(surfspot.height < 8 && surfspot.wind >= 15){
            document.getElementById("output").innerHTML = "Good height, crap waves at " + surfspot.name + " as a medium level surfing, could be fun just to get out in the water while your young"
        }
        else if(surfspot.height < 8 && surfspot.wind < 15){
            document.getElementById("output").innerHTML = "Surf looks might fine today at " + surfspot.name + ". Go have some grom fun"
        }
        else if(surfspot.height < 8 && surfspot.wind < 15 && surfspot.direction == "offshore"){
            document.getElementById("output").innerHTML = "This are the days that make us love surfing. Go have some fun at " + surfspot.name + " boy"
        }

    }
    else if(surfer.ability == "intermediate" && surfer.age == "medium"){
        if(surfspot.height >= 8){
            document.getElementById("output").innerHTML = "Probably a little to big at " + surfspot.name + ". Live to surf another day young man"
        }
        else if(surfspot.height < 8 && surfspot.wind >= 15){
            document.getElementById("output").innerHTML = "Good height, crap waves at " + surfspot.name + " as a medium level surfing, could be fun just to get out in the water while your middle aged"
        }
        else if(surfspot.height < 8 && surfspot.wind < 15){
            document.getElementById("output").innerHTML = "Surf looks might fine today at " + surfspot.name + ". Go have some medium aged fun"
        }
        else if(surfspot.height < 8 && surfspot.wind < 15 && surfspot.direction == "offshore"){
            document.getElementById("output").innerHTML = "This are the days that make us love surfing. Go have some fun at " + surfspot.name + " man"
        }
    }

    else if(surfer.ability == "intermediate" && surfer.age == "old"){
        if(surfspot.height >= 8){
            document.getElementById("output").innerHTML = "Probably a little to big at " + surfspot.name + ". Live to surf another day elder"
        }
        else if(surfspot.height < 8 && surfspot.wind >= 15){
            document.getElementById("output").innerHTML = "Good height, crap waves at " + surfspot.name + " as a medium level surfing, could be fun just to get out in the water while your old"
        }
        else if(surfspot.height < 8 && surfspot.wind < 15){
            document.getElementById("output").innerHTML = "Surf looks might fine today at " + surfspot.name + ". Go have some old fun"
        }
        else if(surfspot.height < 8 && surfspot.wind < 15 && surfspot.direction == "offshore"){
            document.getElementById("output").innerHTML = "This are the days that make us love surfing. Go have some fun at " + surfspot.name + " cripple"
        }
    }
    else if(surfer.ability == "beginner" && surfer.age == "young"){
        if(surfspot.height >= 5){
            document.getElementById("output").innerHTML = " Looking like a little to big for a beginner to surf at " + surfspot.name + ". They'll be more days to come"
        }
        else if(surfspot.height< 5 && surfspot.wind >= 15){
            document.getElementById("output").innerHTML = "Perfect height at " + surfspot.name + ". Not great conditions though, might as well get in the water while your still healthy"
        }
        else if(surfspot.height < 5 && surfspot.wind < 15){
            document.getElementById("output").innerHTML = "Peferct day to go learn to surf at " + surfspot.name + ". Go out their and have fun"
        }

    }
    else if(surfer.ability == "beginner" && surfer.age == "medium"){
        if(surfspot.height >= 5){
            document.getElementById("output").innerHTML = " Looking like a little to big for a beginner to surf at " + surfspot.name + ". They'll be more days to come, probably"
        }
        else if(surfspot.height< 5 && surfspot.wind > 15){
            document.getElementById("output").innerHTML = "Perfect height at " + surfspot.name + ". Not great conditions though, might as well get in the water while your working"
        }
        else if(surfspot.height < 5 && surfspot.wind < 15){
            document.getElementById("output").innerHTML = "Peferct day to go learn to surf at " + surfspot.name + ". Go out their and have fun before your mid life crisis"
        }


    }
    else if(surfer.ability == "beginner" && surfer.age == "old"){
        if(surfspot.height >= 5){
            document.getElementById("output").innerHTML = " Looking like a little to big for a beginner to surf at " + surfspot.name + ". Why are you even surfing, your old"
        }
        else if(surfspot.height< 5 && surfspot.wind > 15){
            document.getElementById("output").innerHTML = "Perfect height at " + surfspot.name + ". Not great conditions though, might as well get in the water while your still breating"
        }
        else if(surfspot.height < 5 && surfspot.wind < 15){
            document.getElementById("output").innerHTML = "Peferct day to go learn to surf at " + surfspot.name + ". Go out their and have fun while you still can"
        }


    }


}

function chooseBoard(){

}
function show() {
    document.getElementById("board").style.display="block";
}

/*function retainInfo(){
 var boardheight = document.getElementById("boardHeight").value
 var type = document.getElementById("type").value
 var numFins = document.getElementById("numFins").value
 var name = document.getElementById("name").value
 var height = document.getElementById("height").value
 var windspeed = document.getElementById("Wind").value
 var winddirection = document.getElementById("Direction").value
 var ability = document.getElementById("ability").value
 var age = document.getElementById("age").value
 var surfspot= new Spot(name, height, windspeed, winddirection);
 var quiver = new Quiver(boardheight,type,numFins);
 var surfer = new Surfer(ability,age);


 }

*/