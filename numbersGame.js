function getRandomInteger (min, max) {
    let rand = Math.random() * (max + 1 - min)+min;
    return Math.floor(rand);
}
let min = 1;
let max = 100;
let hiddenNumber = getRandomInteger (min,max);
let tries=0;
let success = false;
while(!success){
    tries++;
    let massage;
    let guessNumber = Math.floor((max+min)/2);
    console.log (`Попытка № ${tries} - в диапазоне от ${min} до ${max}`);
    console.log (`Компьютер 1: пробую число ${guessNumber}`);
    if (guessNumber == hiddenNumber) {
        massage = 'Правильно!'; success = true;
    }
        else if (guessNumber<hiddenNumber){
            massage = 'Больше';
            min = guessNumber+1;
        }
        else {
            massage = 'Меньше';
            max = guessNumber-1;
        }
    console.log (`Компьютер 2: ${massage}\n`);
}