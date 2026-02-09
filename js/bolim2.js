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

// let input = prompt(
//     "Malumotlarni kriting: /Login, Parol, O'quvchi, O'qituvchi/ misol: admin1,12345,yes yoki no."
// )
// let info = input.split(",")
// let admin = info[0]
// let pasWord = info[1]
// let stu = info[2]
// let tech = info[3]

// if(admin == "bexruz" && pasWord == 12345){
//     console.log("Xush kelibsiz!")
//     if(stu == "yes" || tech == "yes"){
//         console.log("Sizga chegirma bor")
//     }else{
//         console.log("Chegirma yo'q")
//     }
// }else{
//     console.log("Parol yoki Login xato")
// }

// 2-bo'lim (switch case, Break, continue)

let baho = 2

switch(baho){
    case 1:
    console.log("Sizning bahoyiz 1")
    break
    case 2:
    console.log("Sizning bahoyiz 2")
    break
    default:
        console.log("Sizning bahoyiz yo'q")
}