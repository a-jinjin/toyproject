let drum = ['쿵', '짝'];
// let beat = Math.floor(Math.random() * drum.length);

// console.log(drum[beat]);
// 0 아니면 1 랜덤으로 출력됨
// console.log(drum[beat]);
// console.log(drum[beat]);
// 여러번 출력해봤자 똑같은게 계속 나온다. ==> 새로고침을 하지는 않았으니까 실행시점에서 랜덤으로 생성된걸 가져오는 것 뿐

// for(let i = 0; i < 3; i++){
//   console.log(drum[beat]);
// };
// for문을 돌려도 같은 결과

let arrBeat = [];

for(let i = 0; i < 3; i++){
  let beat = Math.floor(Math.random() * drum.length);
  console.log(drum[beat]);
  let beatValue = drum[beat];
  arrBeat.push(beatValue);
};

// console.log(arrBeat);

// 위의 값을 배열에 담아서 출력 가능?
// 1. 값이 빈 배열 준비
// 2. 랜덤값 출력
// 3. 배열에 랜덤값을 추가 (push)
// 4. 배열 출력
// 5. 출력된 배열의 값들을 string으로 묶어주기

let drumBeat = arrBeat.join('');
// console.log(drumBeat);
if(drumBeat === '쿵쿵짝') {
  console.log('we will rock you');
}else{
  console.log('rock never die');
}

