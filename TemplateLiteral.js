const nilaiIPA = 80
const nilaiMTK = 70

/*
nilai IPA saya adalah 80
nilai MTK saya adalah 70
rata-rata dari kedua nilai adalah 75 
*/

// concate
const text1 = 'nilai IPA saya adalah ' + nilaiIPA + '\n' + 
                'nilai MTK saya adalah '+nilaiMTK + '\n' +
                'rata-rata dari kedua nilai adalah '+ ((nilaiIPA + nilaiMTK) /2) 

// tempalte literal
const text2 = `nilai IPA saya adalah ${nilaiIPA}
nilai MTK saya adalah ${nilaiMTK}
rata-rata dari kedua nilai adalah ${(nilaiIPA + nilaiMTK)/ 2}`

console.log(text1)