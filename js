let min = 50;
let max = 100;
let ans = Math.floor(Math.random()*(max-min))+min;

let guess =0;
let attempt = 0;
let run = true;

while(run){
    guess = window.prompt("Enter a number between "+min+" and "+max);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please! Enter the number");
    }
    else if(guess<min || guess>max){
        window.alert("Please! Enter the valid number");
    }
    else{
        attempt++;
        if(guess<ans){
            window.alert("Too LOW!!!!");
        }
        else if(guess>ans){
            window.alert("Tooo HIGH!!!!!");
        }
        else{
            window.alert("Correct answer. Well Done !!");
            run = false;
        }
    }
}
