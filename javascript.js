 //global variables
var buttonStart = document.getElementById("startButton");
var pointless = document.getElementById("pointless");
var gameArea = document.getElementById("gameArea");
var scoreArea = document.getElementById("scoreArea");
var runningAnimation = 0;
var runTimes = 0;
var totalWins = 0;
var totalLosses = 0;
var totalTies = 0;
var setupScoreArea = 0;
	
//Listen for Click (start button)
buttonStart.addEventListener("click", startClick);
	
    
    
function resizeElements(){
    if(window.innerWidth > 769){
        gameArea.style.height = "435px";
    }else{
        gameArea.style.height = "auto";
    }
    
}
//on start button click
function startClick() {
        
    //clear old text
    buttonStart.innerHTML = "";
    buttonStart.style.border = "0px";
    pointless.innerHTML = "";
    gameArea.style.border = "3px solid gold";
    console.log("cleared old text")
        
    //Load Choice elements
    gameArea.innerHTML = "<h1 class='centerText gamja'>Choose Your Action</h1><img src='Pictures/Rock.png' alt='Rock' class='hoverFade picture' title='Rock' id='choiceRock'></img><img src='Pictures/Paper.png' alt='Paper' class='hoverFade picture' title='Paper' id='choicePaper'></img><img src='Pictures/Scissors.png' alt='Scissors' class='hoverFade picture' title='Scissors' id='choiceScissors'></img>";
    //Load Score Elements
    if(setupScoreArea == 0){
        scoreArea.innerHTML = "<div class='scoreDivs'><h2 class='centerText noMargin'>Total Wins</h2><h2 id='totalWinsNumber' class='centerText noMargin scores'>0</h2></div><div class='scoreDivs'><h2 class='centerText noMargin'>Total Losses</h2><h2 id='totalLossesNumber' class='centerText noMargin scores'>0</h2></div><div class='scoreDivs'><h2 class='centerText noMargin'>Total Ties</h2><h2 id='totalTiesNumber' class='centerText noMargin scores'>0</h2></div>"
        scoreArea.style.border = "3px solid #dadd1c";
        scoreArea.style.height = "90px"
        var resizeElementsTimer = window.setInterval(resizeElements, 500);
        resizeElements();
        setupScoreArea++;
    }
    //wait for click (choice buttons)
    document.getElementById("choiceRock").addEventListener("click", rockChoose);
    document.getElementById("choicePaper").addEventListener("click", paperChoose);
    document.getElementById("choiceScissors").addEventListener("click", scissorsChoose);
}
//Process Choice (0-rock,1-paper,2-scissors)
function rockChoose(){Gamemechanics(0)};
function paperChoose(){Gamemechanics(1)};
function scissorsChoose(){Gamemechanics(2)};
    
    //Background Processing (enemy decision and victory/defeat processing)
    function Gamemechanics(player){
        var win = 0;
        
        //Generate Enemy Number
        var enemy = (Math.round(Math.random() * 2.99 + 0.5)) - 1;
        
        //detect win/loss/tie
        if(enemy == 0 && player == 1 || enemy == 1 && player == 2 || enemy == 2 && player == 0){
            win = 0;
        }else if(enemy == 1 && player == 0 || enemy == 2 && player == 1 || enemy == 0 && player == 2){
            win = 1;
        }else if(enemy == player){
            win = 2;
        }else{
          console.log("ERROR - You Have Neither Won Nor Lost, Numbers are (player " + player + ") and (enemy " + enemy + ")")     
        }
        doAnimation(player, enemy, win);
    }
    
    function doAnimation(player, enemy, win){
        runTimes = 0;
        var animationTimer = window.setInterval(runAnimation, 1000);
        
        //wait before allowing skip animation
        setTimeout(function(){
            runningAnimation = 1;
        }, 100);
        //Skip Animation Processing
        //gameArea.addEventListener("click", skipAnimation); <--------------------------------
        function skipAnimation() {
            if(runningAnimation == 1){
                console.log("Skipping Animation");
                window.clearInterval(animationTimer);
                runAnimation();
                runAnimation();
                runAnimation();
                runAnimation();
                runAnimation();
            }
        }
        
        runAnimation();
        function runAnimation(){
            var littleHeading = document.getElementById("littleHeading");
                var image1 = document.getElementById("image1");
                var image2 = document.getElementById("image2");
                var image3 = document.getElementById("image3");
                var winningThrow = null;
            //load rock animation
            if(runTimes == 0){
                gameArea.innerHTML = "<h1 class='centerText'>Rock</h1><h2 style='width:35%; text-align:center; float:left; margin:0px;'>Player One</h2><h2 style='text-align:center; float:right; width:35%; margin:0px;'>CPU</h2><img class='picture' src='Pictures/Rock.png' alt='Rock'></img><img class='picture invisible' src='Pictures/Rock.png'></img><img class='picture' src='Pictures/Rock.png' alt='Rock'></img>";
                console.log("1");
            //load paper animation
            }else if(runTimes == 1){
                gameArea.innerHTML = "<h1 class='centerText'>Paper</h1><h2 style='width:35%; text-align:center; float:left; margin:0px;'>Player One</h2><h2 style='text-align:center; float:right; width:35%; margin:0px;'>CPU</h2><img class='picture' src='Pictures/Paper.png' alt='Paper'></img><img class='picture invisible' src='Pictures/Paper.png'></img><img class='picture' src='Pictures/Paper.png' alt='Paper'></img>";
                console.log("2");
            //load scissors animation
            }else if(runTimes == 2){
                gameArea.innerHTML = "<h1 class='centerText' id='littleHeading'>Scissors</h1><h2 style='width:35%; text-align:center; float:left; margin:0px;'>Player One</h2><h2 style='text-align:center; float:right; width:35%; margin:0px;'>CPU</h2><img class='picture' id='image1' src='Pictures/Scissors.png' alt='Scissors'></img><img class='picture invisible' id='image2' src='Pictures/Scissors.png'></img><img class='picture' id='image3' src='Pictures/Scissors.png' alt='Scissors'></img>";
                console.log("3");
                //load final animation
            }else if(runTimes == 3){
                
                littleHeading.textContent = "Shoot!";
               
                if(player == 0){
                    image1.src = "Pictures/Rock.png";
                }else if(player == 1){
                    image1.src = "Pictures/Paper.png";
                }else{
                    image1.src = "Pictures/Scissors.png";
                }
                
                if(enemy == 0){
                    image3.src = "Pictures/Rock.png";
                }else if(enemy == 1){
                    image3.src = "Pictures/Paper.png";
                }else{
                    image3.src = "Pictures/Scissors.png";
                }
                
                console.log("4");
            //clear timer and debug
            }else if(runTimes == 4){
                
                 //Saying Victory, Defeat, Or Tie
                if(win == 0){
                    littleHeading.textContent = "Victory";
                }else if(win == 1){
                    littleHeading.textContent = "Defeat";
                }else if(win == 2){
                    littleHeading.textContent = "Tie";
                }else{
                    console.log("(Error) Player did not win, lose, or tie. player win value is " + win);
                }
                
                                
                //find the winning throw
                if(win == 0){
                    winningThrow = player;
                }else if(win == 1){
                    winningThrow = enemy;
                }
                
                //put up action picture
                if(winningThrow != null || win == 2){
                    if(winningThrow == 0){
                        image2.src = "Pictures/rockWins.png";
                    }else if(winningThrow == 1){
                        image2.src = "Pictures/paperWins.png";
                    }else if(winningThrow == 2){
                        image2.src = "Pictures/scissorsWins.png";
                    }else if(win == 2){
                        console.log("Equals sign");
                        image2.src = "Pictures/Equals.png";
                    }
                    console.log("Win Value = " + win);
                    image2.style.opacity = "1"
                    image2.classList.remove("invisible");
                    image2.classList.add("specialPicture");
                    image2.classList.remove("picture");
                    appear(image2, 0, 5, 40);
                }
                //start again button
                gameArea.innerHTML += "<div style='width:40%; margin:auto;'><h1 style='opacity:0; text-align:center; border: 3px solid black;' id='startAgainButton'>Start Again</h1></div>"
                var startAgainButton = document.getElementById("startAgainButton")
                appear(startAgainButton, 0, 5, 40);
                startAgainButton.classList.add("realHoverFade");
                startAgainButton.addEventListener("click", startClick);
                
                //Count Up Total Everything
                if(win == 0){totalWins += 1}else if(win == 1){totalLosses += 1}else if(win == 2){totalTies += 1};
                //console.log("Total Wins = " + totalWins);
                //console.log("Total Ties = " + totalTies);
                //console.log("Total Losses = " + totalLosses);
                
                //Display Total Everything Count
                var totalWinsArea = document.getElementById("totalWinsNumber");
                totalWinsArea.textContent = "" + totalWins;
                document.getElementById("totalLossesNumber").textContent = "" + totalLosses;
                document.getElementById("totalTiesNumber").textContent = "" + totalTies;
                
                window.clearInterval(animationTimer);
                runningAnimation = 0;
            }
            runTimes += 1;
        }
    }
    
function appear(elm, i, step, speed){
var t_o;
//initial opacity
i = i || 0;
//opacity increment
step = step || 5;
//time waited between two opacity increments in msec
speed = speed || 50; 

t_o = setInterval(function(){
    //get opacity in decimals
    var opacity = i / 100;
    //set the next opacity step
    i = i + step; 
    if(opacity > 1 || opacity < 0){
        clearInterval(t_o);
        //if 1-opaque or 0-transparent, stop
        return; 
    }
    //modern browsers
    elm.style.opacity = opacity;
    //older IE
    elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
}, speed);
}
    
    