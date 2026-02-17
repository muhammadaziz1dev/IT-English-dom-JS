                let oquvchilar = [
  { ism: "Ali", ball: 45 },
  { ism: "Vali", ball: 70 },
  { ism: "Sami", ball: 30 },
];

// 1️⃣ Ball bo‘yicha bahoni aniqlash
function bahoAniqla(ball) {
  return ball >= 60 ? "O‘tdi" : "Yiqildi";
}

// 2️⃣ Arrow function: o‘quvchi natijasini
// yozish
let natijaniYoz = (oquvchi) => `${oquvchi.ism} - ${bahoAniqla(oquvchi.ball)}`;

// 3️⃣ Callback orqali tekshir function
function tekshir(oquvchi, callback) {
  return callback(oquvchi);
}

// 4️⃣ forEach yordamida barcha o‘quvchilarni tekshirish va o‘rtacha ball
let umumiyBall = 0;

oquvchilar.forEach((oquvchi) => {
  console.log(tekshir(oquvchi, natijaniYoz));
  umumiyBall += oquvchi.ball;
});

let ortachaBall = umumiyBall / oquvchilar.length;
console.log("O‘rtacha ball:", ortachaBall.toFixed(  ));
