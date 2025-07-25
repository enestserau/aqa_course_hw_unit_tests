/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

function sumConcatination(n) {
    if (n >= 1 && n <= 9){
    const str = String(n);
    const nn = str + str;
    const nnn = str + str + str;
    const result = n + Number(nn) + Number(nnn)
    console.log(`Result: ${n}+${nn}+${nnn}=${result}`)
    }
    else{
        console.log("Please enter number between 1 and 9")
    }
}
sumConcatination(3); // Enter number between 1 and 9