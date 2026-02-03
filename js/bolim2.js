// 2-bo'lim (IF va Else)

// let yosh = 16;
// let kritilganSon = 15;
// let input = prompt("Parol kriting!!!")
// let passWord = 123456789;

// if (input == passWord){
//     console.log("Parol true")
// }else if (input.length > 7){
//     console.log("Parol juda uzun")
// }else{
//     console.log("Parol xato")
// }

// if (yosh <= kritilganSon){
//     console.log("Siz qabul qilindiz")
// }else{
//     console.log("Yoshingiz kichik")
// }

// 2-bo'lim Or va And
// let input = prompt("Email kriting")
// let email = "mamirjonov@.com"
// if(input == email && email.includes('@')){
//     console.log("email tog'ri")
// }else{
//     console.log("emial xato kritildi")
// }


let input = prompt(
    "Malumotlarni kriting: /Login, Parol, O'quvchi, O'qituvchi/ misol: admin1,12345,yes yoki no."
)
let info = input.split(",")
let admin = info[0]
let pasWord = info[1]
let stu = info[2]
let tech = info[3]

if(admin == "bexruz" && pasWord == 12345){
    console.log("Xush kelibsiz!")
    if(stu == "yes" || tech == "yes"){
        console.log("Sizga chegirma bor")
    }else{
        console.log("Chegirma yo'q")
    }
}else{
    console.log("Parol yoki Login xato")
}

// let admin = 'admin1'
// let passWord = 12345

// if (admin === 'admin1' && passWord === 12345){
//     console.log("Parol va Login to'g'ri")
// } else if (admin !='admin1'){
//     console.log("Login xato")
// } else if (passWord !== 12345){
//     console.log("Parol xato")
// }else{
//     console.log("Parol yoki login xato")
// }
// let input = prompt(
//     "Ma'lumotlarni kiriting:\nlogin,parol,student,teacher\nMasalan:admin,1234,yes,no"
// )

// let data = input.split(',')

// let login = data[0]
// let passWord = data[1]
// let stu = data[2]
// let tech = data[3]

// if (login === "admin01" && passWord === "240508"){
//     console.log("Parol va Login to'g'ri")

//     if (stu === 'yes' || tech === 'yes'){
//       console.log("Sizga chegirma bor")
//     } else{
//     console.log("Sizga chegirma yo'q")
//     }

// } else{
//     console.log('Parol yoki Login xato!!!')
// }
