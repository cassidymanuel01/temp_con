// Fahrenheit to Celsius 
let convert = document.getElementById('convert');

convert.addEventListener('click',() => {
    let fahrenheit = document.querySelector('#fahrenheit');
    let f = fahrenheit;

    let converter = eval((f.value - 32) / 1.8);
    // .value to target input value

    // toFixed(x) is to round off decimals
    let answer = converter.toFixed(4);
    // console.log(answer)

    document.getElementById('celsius').innerHTML = answer
})

// Celsius to Fahrenheit
let convert1 = document.getElementById('convert1');

convert1.addEventListener('click',() => {
    let celsius  = document.querySelector('#celsius1');
    let c = celsius ;

    let converter1 = eval((c.value * 1.8) + 32);
    
    let answer1 = converter1.toFixed(4);

    document.getElementById('fahrenheit1').innerHTML = answer1
})