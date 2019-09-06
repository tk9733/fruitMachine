alert("Welcome to the Fruit Machine")

document.getElementById("b").addEventListener("click",spin)

function spin(){
    // alert ("You are spinning the wheels")
    let r1 = spinReel ("r1")
    let r2 = spinReel ("r2")
    let r3 = spinReel ("r3")
    if (r1==r2 && r2 == r3){
        alert ("You Have Won, Stop Gambling")
    }
}

function spinReel (reel){
    let i= Math.floor(Math.random()*3)
    if (i==0){
        document.getElementById(reel).src="images/Lemon.jpg"
    }
    if (i==1){
        document.getElementById(reel).src="images/Pear.jpg"
    }
    if (i==2){
        document.getElementById(reel).src="images/strawberries.png"
    }
    return i
    
}