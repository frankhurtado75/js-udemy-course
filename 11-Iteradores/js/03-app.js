//Fizz Buzz

//2 6 9 12... Fizz
//5 10 15.... Buzz
//15 30 45 .. Fizz Buzz

for(let i = 1; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZ-BUZZ`);
    } else if(i % 3 === 0){
        console.log(`${i} FIZZ`);
    } else if (i % 5 === 0){
        console.log(`${i} BUZZ`);
    }
}