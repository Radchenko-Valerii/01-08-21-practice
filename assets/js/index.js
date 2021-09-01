'use strict'
// 1.


/** 
 * @param n {number} - non-negative integer
 * @return {number}
*/
function sum (n){
  let result = 0;
  for (let i =0; i<=n; i++){
    result+=i;
  }
  return result;
}

//2.
const university = {
  facultas: 'programm engineering',
  kafedra: 'QA automatization'
}


const student = {
  name: 'Mike',
  surname: 'Tyson',
  isMale: true,
  contact: {
    phone: 380778886611,
    email: 'steelmike@gmail.com',
    postIndex: 	20851,
  },
  facultas: university.facultas,
  kafedra: university.kafedra
}

function getInfo({name, surname, isMale, kafedra, facultas, contact}){
  console.log(`fullname: ${name} ${surname} \n
  isMale: ${isMale} \n
  kafedra: ${kafedra} of ${facultas} facultas \n
  ---contacts---\n
  phone number: ${contact.phone}\n
  e-mail: ${contact.email}\n
  zip-code: ${contact.postIndex}`);
}


//3.

const array = [];
for(let i = 0; i<25; i++){
  array.push(i)
}

function showValueByEvenIndex(arr){
  for(let i = 0; i <= arr.length; i+=2){
    console.log(arr[i]);
  }
}

function showEvenValue(arr){
  for(let i = 0; i <= arr.length; i++){
    if(arr[i]%2 ===0){
      console.log(arr[i]);
    }
  }
}

function showZeroValueIndex(arr){
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] === 0){
      console.log(i)
    }
  }
}

function zeroValueAmont(arr){
  let result = 0;
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] === 0){
      result++
    }
  }
  return result;
}