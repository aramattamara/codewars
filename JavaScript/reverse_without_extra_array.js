//reverse without extra array / reverse "на месте"
// Task from interview "Apple"

// const  arr = [12, 13, 14, 15, 18, 20];
// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
//
// console.log (arr)

//=====================================================================================================
// TASK 5 - from interview
//string reverse
// // check if it is the polindrome?
// function isPolindrome(x){
//   x = x.toLowerCase();
//   let res = '';
//   for (let i = x.length - 1; i >= 0; i--){
//     res = res + x[i];
//   }
//   //return x === str;
//   console.log(x === res);
// }
//
// isPolindrome("Abba")

//
// function determineTime (durations) {
//   let time = 24 * 60 * 60;
//
//   let fields = durations.split(":").map(Number);
//   console.log(fields)
// }
//
// determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"])


// function ballCollector(detritus) {
//   let res = {weight: 0};
//
//   for(let i = 0; i < detritus.length; i++){
//     if(detritus[i] === 58){
//       res.weight += 58
//     }
//   }
//
//   //return res
//   console.log(res)
// }
//
// ballCollector([58, 68, 62, 69, 58])






// function killer(suspectInfo, dead) {
//   for (let i in suspectInfo){
//     let info = suspectInfo[i];
//     let finalAray = [];
//     dead.forEach((el1) => info.forEach((el2) =>
//     {if (el1 === el2){
//       finalAray.push(el1)
//     }}))
//     if(finalAray.length === dead.length){
//       //return suspectInfo[i]
//       console.log(i)
//     }
//   }
//
// }
//
// killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill'])
//
// function getTreasureFloor(input) {
//   //let input = treasureMap.split('');
//   let res = 0;
//   for(let i = 0; i < input.length; i++){
//     if(input[i] === ")"){
//       res += 1;
//     } else {
//       res -= 1;
//     }
//   }
//   return res;
//
// }
//
//
//
// console.log(getTreasureFloor('))))'))

function removeRotten(bagOfFruits){
  let res = [];
  if(bagOfFruits === null || bagOfFruits === []){
    return res;
  }
   for(let i = 0; i < bagOfFruits.length; i++) {
     if (bagOfFruits[i].substring(0, 6) === 'rotten') {
       res.push(bagOfFruits[i].substring(6).toLowerCase());
     } else {
       res.push(bagOfFruits[i].toLowerCase())
     }
   }
  return res;
}

console.log(removeRotten(null))