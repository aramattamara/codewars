// function divisibleBy(numbers, divisor) {
//   console.log(numbers);
//   console.log(divisor);
//   return numbers.filter((element) => {
//         return element % divisor === 0;
//       }
//   );
// }
//
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

//
// let arr = '1,2,3';
//
// let n = arr.replaceAll(',', ' ');
// n = n.replace(/^[a-z0-9]+ +/i, '');
// n = n.replace(/(^| +)[a-z0-9]+$/gi, '');
// //return n || null;
// if (n.length === 0) {
//   console.log(null);
// } else {
//   console.log(n);
// }



// function arrayDiff(a, b) {
//     const myArray = a.filter((item) => !b.includes(item));
//   console.log(myArray)
// }
//
// arrayDiff([1,2,3], [1,2])


//
//
// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
//   const age = [age1, age2, age3, age4, age5, age6, age7, age8];
//
//   let suma = age.reduce((sum, el) => sum += el**2, 0)
//   console.log(Math.floor(Math.sqrt(suma))/2)
// }
//
// predictAge(65,60,75,55,60,63,64,45)
// var list = [
//   {
//     firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   },
//   {
//     firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//   },
//   {
//     firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//   },
// ];
//
//
// function greetDevelopers(list) {
//   for(let i in list){
//     const name = list[i].firstName;
//     const language = list[i].language;
//     list[i].greeting = `Hi ${name}, what do you like the most about ${language}`;
//   }
//   return list;
// }
//
// console.log(greetDevelopers(list));
//

// let str = 'oXooxo'
//
// function XO(str) {
//   let x = '';
//   let o = '';
//   for(let i = 0; i <= str.length; i++){
//     if (str[i].toLowerCase() === "x"){
//       x += str[i]
//     } else if (str[i].toLowerCase() === "o"){
//       o += str[i]
//     }
//   }
//   return x.length === o.length;
// }
// XO(str)
//
// function greet(language) {
//   let greeting = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
// //   }
// //   console.log(greeting[language])
//
//
//       }
// greet("polish")


function count (string) {
  let result = {};// {'a': 1}

  for(let i = 0; i < string.length; i++){
    let c = string[i];

//     if (result[c] === undefined) {
//       result[c] = 0;
//     }

    result[c] = (result[c] || 0) + 1;
  }


  0, 1, 5, 4.5
  "sdfgdfg"
  let a = [4, 5, 8, 1]
  {'foo': 12345, 'hndfgcngfcnhfgxcn': 234}

  a[100] = 34;


  let b = {0: 4, 1: 5, 2: 8, 3: 1, 4 : 0, }

  'kkkkka' == 'kkkkku';
  b[100] == 4
//   string
//     .split('')
//     .map((c) => result[c] = (result[c] || 0) + 1);


  return result;
}
