var result = 0;
var currPos = [0, 0];
var onboard = [0, 0];
var count = 0;
var curTurn = 0;
var click = true;
var curPlayer = 'BLUE';


function playTurn(){

    if(!(count&1)){
        curPlayer = 'BLUE';
        curTurn=0;
    }
    else {
        curPlayer='GREEN';
        curTurn = 1;
    }
    randomNum();
}


// ROLL THE DICE
let roll= function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
function randomNum(){
    if(currPos[0]!=100 && currPos[1]!=100 && click){
        let R;
        click = false;
        const interval = setInterval(()=>{
            R = roll()
            let sr = R +".png";
            document.getElementById('img').src ="";
            document.getElementById('img').src =sr;
            document.getElementById('img').style.display = "block";
        },100)
        setTimeout(()=>{
            clearInterval(interval);
            result = roll();
            let sr = result +".png";
            document.getElementById('img').src =sr;
            document.getElementById('img').style.display = "block";
            playerMove(curPlayer, curTurn);
            setTimeout(playerTurn, 300);
            setTimeout(()=>{click = true;}, 300);
        },1000)
    }
}

function playerTurn() {
    if(result !=6) {
        var display = document.getElementById('displayTurn');
        count++;
        switch(display.innerHTML){
            case "GREEN": display.innerText = display.style.color = "BLUE";
                        break;
            case "BLUE": display.innerText = display.style.color = "GREEN";
                        break; 
        }
    }
}
function takeALadder(child, num){

    switch(currPos[num]){
        case 1:
            currPos[num] = 38;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 1";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 4:
            currPos[num] = 14;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 4";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 8:
            currPos[num] = 30;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 8";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 21:
            currPos[num] = 42;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 21";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 28:
            currPos[num] = 76;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 28";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 50:
            currPos[num] = 67;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 50";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 71:
            currPos[num] = 92;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 71";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 80:
            currPos[num] = 99;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" TAKES LADDER 80";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
    }
}

function snakeBite(child, num){
    switch(currPos[num]){
        case 32:
            currPos[num]=10;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 32";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 36:
            currPos[num]=6;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 36";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 48:
            currPos[num]=26;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 48";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 62:
            currPos[num]=18;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 62";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 88:
            currPos[num]=24;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 88";
            var par = `${currPos[num]}`;
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 95:
            currPos[num]=56;
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 95";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
        case 97:
            currPos[num]=78;    
            var par = `${currPos[num]}`;
            document.getElementById('badDisplay').innerText = "TEAM "+curPlayer+" EATEN BY SNAKE ON 97";
            var parent = document.getElementById(par);
            parent.appendChild(child);
            break;
    }
} 

function cutIT(num){
    var identify = currPos[num] + result;
    if(num==0){
        if(identify==currPos[1]){
            currPos[1] = 0;
            onboard[1] = 0;
            document.getElementById('badDisplay').innerText = "TEAM BLUE CUT,S GREEN...!!!";
            var parent = document.getElementById('restSpace');
            var child = document.getElementById('GREEN1');
            parent.appendChild(child);
        }
    }
    else{
        if(identify==currPos[0]){
            currPos[0] = 0;
            onboard[0] = 0;
            document.getElementById('badDisplay').innerText = "TEAM GREEN CUT,S BLUE...!!!";
            var parent = document.getElementById('restSpace');
            var child = document.getElementById('BLUE0');
            parent.appendChild(child);
        }
    }
}

function playerMove(color, num){
    if(onboard[num]==0 && result==6){
        onboard[num] = 1;
        document.getElementById('badDisplay').innerText = "TEAM "+color+" UNLOCKED....!!";
    }
    else if(onboard[num]==1 && ((currPos[num] + result)<100)) {
            document.getElementById('badDisplay').innerText = ".....";
            cutIT(num);
            currPos[num] = currPos[num] + result;
            var par = `${currPos[num]}`;
            var parent = document.getElementById(par);
            var CURRgoti= color + num;
            var child = document.getElementById(CURRgoti);
            parent.appendChild(child);
            snakeBite(child, num);
            takeALadder(child, num);
            // console.log(currPos[num], color);
            //console.log(count);
            //console.log(par);
            //console.log(CURRgoti);  
    }
    else if((currPos[num] + result)==100) {
        document.getElementById('badDisplay').innerText = "WINNER...!!!";
        document.getElementById('youWIN').style.display = "block";
        document.getElementById('start').style.display = "none";
        var winDisplay = document.getElementById('compDisplay');
        var text = "TEAM " + color + " WIN...!!!!";
        winDisplay.innerText = text;
        var parent = document.getElementById('100');
        var CURRgoti= color + num;
        var child = document.getElementById(CURRgoti);
        parent.appendChild(child);
        click = false;
    }
    else{
        document.getElementById('badDisplay').innerText = "TEAM "+color+" STUCKED..!";
    }
}