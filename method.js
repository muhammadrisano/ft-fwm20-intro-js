// const biodata = {
//     name: 'risano',
//     email: 'risano@gmail.com',
//     jender: "laki-laki",
//     phone: '08123123123',
//     penjumlahan: function(val1, val2){
//         const result = val1 + val2
//         return result
//     },
//     // sayHelo: function(friend){
//     //     const text = `halo ${friend}, apakabar nama saya ${this.name}`
//     //     console.log(text);
//     // }
//     sayHelo: (friend)=>{
//         const text = `halo ${friend}, apakabar nama saya ${biodata.name}`
//         console.log(text);
//     },
//     pengurangan(val1, val2){
//         const result = val1 - val2
//         return result
//     }
// }

// const nama = biodata.name
// const hasilPemjumlahan = biodata.penjumlahan(10, 15)
// console.log(hasilPemjumlahan);

// biodata.sayHelo('budi')
// const hasilPengurangan = biodata.pengurangan(20, 10)
// console.log(hasilPengurangan);

class Siswa {
    name = "budi"

    printNama(){
        console.log(`my name is ${this.name}`);
    }
}

const budi = new Siswa()
budi.printNama()
