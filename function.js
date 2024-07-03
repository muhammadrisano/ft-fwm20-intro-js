// declaration
// const nama = "risano"


// function sayHelo(nama){
//     console.log(`helo ${nama}, apakabar`);
// }

// sayHelo(nama)

// default value paramater
// function penjumlahan(val1, val2=0){
//     const result = val1 + val2
//     console.log(result);
// }

// penjumlahan(10)

// rest paramater

// function sum(...val){
//     let result = 0
//     for(let i = 0; i< val.length; i++){
//         result = result + val[i]
//     }
//     console.log(result);
// }

// sum(10, 20, 20, 15, 15, 40)

// 

// penggunaan return

function penjumlahan(val1, val2){
    const result = val1 + val2
    return result
}

// const hasilPenjumlahan =  penjumlahan(10, 20)

// console.log(hasilPenjumlahan);



// expression

const pengurangan = function(val1, val2){
    const result = val1 - val2
    return result
}

// const hasilPengurangan = pengurangan(40, 25)
// console.log(hasilPengurangan);


// arrow function

const perkalian = (val1, val2)=>{
    const result = val1 * val2
    return result
}

const hasilPerkalian = perkalian(10, 15)
const hasilPenjumlahan = penjumlahan(10, 10)
const hasilPengurangan = pengurangan(20, 10)

const printText = `- hasil perkalian adalah ${hasilPerkalian}
- hasil penjulahan adalah ${hasilPenjumlahan}
- hasil pengurangan adalah ${hasilPengurangan}`

console.log(printText);

