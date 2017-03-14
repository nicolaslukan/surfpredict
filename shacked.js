/**
 * Created by h205p3 on 2/1/17.
 */

$(document).ready(function(){
    $('button').click(function(){
        $("#homeslice").fadeOut()
    });
});

function Spot(name,height,wind,direction,gnar){
    this.name = name
    this.height = height
    this.wind = wind
    this.direction = direction
    this.gnar = gnar
}

function Surfer(ability,chiefed){
    this.ability = ability
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
function Location(){
    var ability = document.getElementById("ability").value
    var spot1= new Spot(4,9,"onshore",2)
    var spot2= new Spot(10,3,"offshore",8)
    var surfer1 = new Surfer(ability)
    var surfer2 = new Surfer("expert",)
    var quiver1 = new Quiver(8.5,"longboard",1)
    var quiver2 = new Quiver(6,"shortboard",3)

    surfer1.addBoard(quiver1)
    surfer1.addBoard(quiver2)

    console.log(surfer1)

}

function examples(){
    var ability = document.getElementById("ability").value
    var chiefed = document.getElementById("chiefed").value
    var spot1= new Spot("pacifica",4,9,"onshore",2)
    var spot2= new Spot("OB",10,3,"offshore",8)
    var surfer1 = new Surfer(ability,chiefed)
    var quiver1 = new Quiver(8.5,"longboard",1)
    var quiver2 = new Quiver(6,"shortboard",3)

    surfer1.addBoard(quiver1)
    surfer1.addBoard(quiver2)

    console.log(surfer1)
}

function chooseSurfer(){

}

function chooseBoard(){

}

//FIND A WAY TO FACTOR IN TIDE
//Ability in 3 categories = beginner,intermediate,expert
//board types in 2 categories = shortboard,longboard
//direction types in 3 categories = offshore,onshore,sideshore
//chiefed types in 3 categories = sober, half-baked, zooted