/*1*//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

/*2*//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

// function isEmpty(obj)
// {
//     if (Object.keys(obj).length == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] ="get up";
// alert( isEmpty(schedule) ); // false

/*3*//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

// summ = 0;
// let salaries = 
// {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// for(let key in salaries)
// {
//     summ = summ + salaries[key];
// }
// alert(summ);

/*4*//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

// function multiplyNumeric(menu)
// {
//     for(let key in menu)
//     {
//         if (typeof menu[key] == "number")
//         {
//             menu[key]=menu[key]*2;
//         }
//     }
// }

// let menu = 
// {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }

// multiplyNumeric(menu);
// console.log(menu);

/*5*//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

// let spkmo = 
// {
//     ras: 
//     [
//         {
//             name: 'ras077',
//             students: 22
//         },
//         {
//             name: 'ras067',
//             students: 20
//         }
//     ],

//     isp:
//     [
//         {
//             sites: 
//             [
//                 {
//                     name: 'isp079',
//                     students: 30
//                 }, 
//                 {
//                     name: 'isp089',
//                     students: 27
//                 }
//             ],
//             pi: 
//             [
//                 {
//                     name: 'pi0089',
//                     students: 25
//                 }
//             ]
//         }
//     ]
// }

// alert(spkmo.ras[0]['students'] + spkmo.ras[1]['students'] + spkmo.isp[0]['sites'][0]['students'] + spkmo.isp[0]['sites'][1]['students'] + spkmo.isp[0]['pi'][0]['students']);

