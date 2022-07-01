function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random = randomNumber(1, 3);

if(random === 1) {
  console.log("랜덤숫자 1이 출력됩니다.");
}else if(random === 2) {
  console.log("랜덤숫자 2가 출력됩니다.");
}else {
  console.log("랜덤숫자 3이 출력됩니다.");
}