const nilaiUN = 60
const kkm =75
let grade = ''

// if(nilaiUN >= kkm){
//     console.log('selamat anda lulus');
// }else{
//     console.log('maaf anda belum lulus');
// }

if (nilaiUN > 85){
    grade = 'A'
}else if(nilaiUN > 75){
    grade = 'B'
}else if(nilaiUN > 59){
    grade = 'C'
}else if(nilaiUN > 40){
    grade = 'D'
}else{
    grade = 'E'
}



// console.log(grade);


const kodeHari = new Date('06-26-2024').getDay()
let hari = ''

switch(kodeHari){
    case 0:
        hari = "minggu"
        break;
    case 1:
        hari = "senin"
        break;
    case 2:
        hari = "selasa"
        break
    case 3:
        hari = "rabu"
        break;
    case 4:
        hari = "kamis"
        break
    case 5:
        hari = "jumat"
        break
    case 6:
        hari = "sabtu"
        break;
    default:
        hari = "maaf anda salam memasukan kode hari"
}

console.log(hari);

const result = nilaiUN >= kkm ? 'selamat anda lulus': 'maaf anda tidak lulus'

const nilaiGrade =  nilaiUN > 85 ? "A": nilaiUN > 75 ? "B": nilaiUN > 59 ? "C": 'D'
console.log(nilaiGrade);

