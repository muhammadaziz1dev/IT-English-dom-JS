// funtion
// ism()
// function ism() {
//     console.log("Muhammadaziz")
// }

// let fam = () => {
//     alert("Salom dunyo")
// }
// fam()
 
// let myName = (ism, yosh, manzil) =>{
//     console.log(`Salom ${ism} sening yoshing ${yosh} da. Sen ${manzil} shaxarda yashesan`)
// }
// myName('Muhammadaziz', 24, 'Andijon')

// function res(a,b){
//     return a + b   
// }

// let natija = res(5,6)
// console.log(natija)

// function tab(nom){
//     console.log("Salom" + nom)
// }

// function foydalan(callback){
//     let ism = "Muhammad"
//     callback(ism) 
// }
// foydalan(tab)

// let sonlar = ['Muhammadaziz', 'Solijon', 'Jahongir', 'MirzaAli']

// sonlar.forEach(function(son){
//     console.log(son)
// })

// for (let i = 0; i < sonlar.length; i++) {
//     const son = sonlar[i];
//     console.log(son)
// }

// 1-Amalyot 3-bo'lim
let savat = [
  { nom: "Telefon", narx: 500},
  { nom: "Quloqchin", narx: 150},
  { nom: "Klaviatura", narx: 130},
];

//Chegirma hisblash
function chegirmaHisobla(narx, foiz){
  return narx - (narx * foiz / 100);
}

//Umumiy narx
function umumiyHisob(massive){
  let jami = 0;
  massive.forEach(i => {
    jami += i.narx
  });
  return jami;
}

// Arrow (chiqarish)
let chiqar = (mahsulot) => {
  return `${mahsulot.nom} - ${mahsulot.narx}$`;
};

// Callback 
function hisoblaMahsulot(mahsulot, callback){
  let yangiNarx = callback(mahsulot.narx, 10);
  console.log(`${mahsulot.nom} - ${yangiNarx}$`);
}

// Chegirma berish
savat.forEach(i => {
  hisoblaMahsulot(i, chegirmaHisobla);
})

// Jammi summa
let jami = umumiyHisob(savat);
console.log("Jami summa:", jami, "$")