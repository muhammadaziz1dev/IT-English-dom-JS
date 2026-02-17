let oquvchilar = [
    {ism: "Ali", ball: 45},
    {ism: "Bahora", ball: 65},
    {ism: "Mavjuda", ball: 80}
];

function bahoAniqla(ball) {
    if (ball >= 60) {
        return "O‘tdi";
    } else {
        return "Yiqildi";
    }
}

let chiqar = (ismBall) => {
  return `${ismBall.ism} - ${bahoAniqla(ismBall.ball)} ${ismBall.ball} Ball bilan`
}

function tekshir(ismBall, callback) {
    console.log(callback(ismBall));

}

let umumiy = 0;
oquvchilar.forEach((ism) => {
    tekshir(ism, chiqar);
    umumiy += ism.ball
});

let ortachaBall = umumiy / oquvchilar.length;
console.log("O'rtacha ball:", ortachaBall.toFixed());