// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 박세준(2651026)
const titles = ["인터스텔라", "아이언맨", "마션", "겨울왕국", "레미제라블"];
const ratings = [8.4, 7.7, 7.7, 7.2, 7.2];
const years = [2014, 2008, 2015, 2013, 2014];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++){
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
    if (ratings[i] >= 8){
        count++;
    }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");
for (let i = 0; i < ratings.length; i++) {
    let label = "";
    if (ratings[i] >= 8.5){
        label = "명작";
    }
    else if (ratings[i] >= 7){
        label = "추천";
    }
    else {
        label = "보통";
    }
    console.log(titles[i] + "(" + years[i] + ") : " + ratings[i] +" " + label);
}
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

// console.log("콘솔창에 나와야 하는 내용");

// var num = 10 + 20;

// console.log(num);

// let sum = 80 + 1234;

// console.log(sum);

// let string1= "Hello World!";
// // let string2= '시네마 웹 사이트 \'Cinema Website\'에 오신 것을 환영합니다.';
// let string2= "시네마 웹 사이트 'Cinema Website'에 오신 것을 환영합니다.";

// console.log(string1, string2);

// let dan = 3;
// let gugu = 8;
// let string = `${dan} 곱하기 ${gugu}은/는 ${dan * gugu}입니다.`;
// console.log(string);

// let studentScore = [80, 70, 90, 60];

// console.log(studentScore);
// console.log(studentScore[2]);

// let stdScore = {
//     koreanScore: 80,
//     englishScore: 70,
//     mathScore: 90,
//     scienceScore: 60
// };

// console.log(stdScore);
// console.log(stdScore.koreanScore);

// for(let dan = 2; dan < 10; dan++){
//     for(let i = 1; i < 10; i++){
//         console.log(`${dan} x ${i} = ${dan * i}`);
//     }
//     console.log(' ');
// }
