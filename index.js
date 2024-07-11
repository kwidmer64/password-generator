const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let rand = getRandom();
let pass1 = "";
let pass2 = "";



function generatePasswords() {
    pass1 = "";
    pass2 = "";
    let genBoxOne = document.getElementById("box-one");
    let genBoxTwo = document.getElementById("box-two");
    
    for (let i = 0; i < 16; i++) {
        rand = getRandom();
        pass1 += characters[rand];
        rand = getRandom();
        pass2 += characters[rand];
    }
    
    genBoxOne.textContent = pass1;
    genBoxTwo.textContent = pass2;
}

function getRandom() {
    return Math.floor(Math.random() * characters.length);
}


