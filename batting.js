var randomnum

var battingscore = 0
var bowlingscore =0
var y=0
function getvalue(x){
    console.log(x)

    var randomnum=Math.floor(Math.random()*6)+1

    const playernumb =document.getElementById("player")
    const computernumb =document.getElementById("comp")
    let scoreboard =document.getElementById("score")
    playernumb.innerHTML="PLAYER NUMBER : " + x

    computernumb.innerHTML="COMPUTER GENERATED NUMBER : " + randomnum




    if(randomnum==x&&y==0){
        const battingdisplay =document.createElement("div")
        const content= document.createTextNode("BALLING WITH SCORE TO DEFEND : " + battingscore)
        battingdisplay.appendChild(content)
        document.body.appendChild(battingdisplay)
        y=1
    }
    else if(randomnum==x&&y==1&&bowlingscore<battingscore){
        alert("YOU HAVE WON BY "+(battingscore-bowlingscore))
        window.location.reload()
    }
    else if(y==0)
    {battingscore= battingscore+x
    scoreboard.innerHTML="BATTING WITH SCORE OF "+battingscore
    }
    else if(y==1)
    {bowlingscore= bowlingscore+x
    scoreboard.innerHTML="BALLING WITH SCORE LEFT "+(battingscore-bowlingscore)
    }

    if(bowlingscore>=battingscore)
    {alert("YOU HAVE LOST ")
    location.reload()}

}




