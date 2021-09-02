'use strict'
// 1.


/** 
 * @param n {number}  non-negative integer
 * @return {number}  sum of numbers from 0 to n
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

/**
 * 
 * @param arr {array} array of numbers
 * @returns {undefined} underfined
 */
function showValueByEvenIndex(arr){
  for(let i = 0; i <= arr.length; i+=2){
    console.log(arr[i]);
  }
}


/**
 * 
 * @param arr {array} array of numbers
 * @returns {undefined} underfined
 */
function showEvenValue(arr){
  for(let i = 0; i <= arr.length; i++){
    if(arr[i]%2 ===0){
      console.log(arr[i]);
    }
  }
}


/**
 * 
 * @param arr {array} array of numbers
 * @returns {undefined} underfined
 */
function showZeroValueIndex(arr){
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] === 0){
      console.log(i)
    }
  }
}


/**
 * 
 * @param arr {array} array of numbers
 * @returns {number} amount zero elements of array
 */
function zeroValueAmont(arr){
  let result = 0;
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] === 0){
      result++
    }
  }
  return result;
}

//4.

class Book{
  constructor(autor, name, year, publishing){
    this._autor = autor;
    this._name = name;
    this._year = year;
    this._publishing = publishing;
  }
}

class Ebook extends Book{
  constructor(autor, name, year, publishing, type, id){
    super(autor, name, year, publishing);
    this._type = type;
    this._id = id;
  }
}



//5.
/**
 * 
 * @param {number} n non-negative integer
 * @returns {undefined} underfined
 */

function fizzBuzz (n){
  for(let i=0; i<n; i++){
    let result = '';
    if(i%3 ===0){
      result+='fizz';
    }
    if(i%5 === 0){
      result+='buzz';
    }
    if(result === ''){
      result = i;
    }
    console.log(result);
  }
}


























// set autor(value){
//   this._autor=value
// }

// set name(value){
//   this._name=value;
// }

// set year(value){
//   this._year=value;
// }

// set publishing(value){
//   this._publishing=value
// }