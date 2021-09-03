"use strict";
// 1.

/**
 * @param n {number}  non-negative integer
 * @return {number}  sum of numbers from 0 to n
 */
function sum(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

//2.
class University {
  constructor(facultas, kafedra) {
    this._facultas = facultas;
    this._kafedra = kafedra;
  }

  set kafedra(newKafedra) {
    if (typeof newKafedra !== "string") {
      throw new TypeError("newKafedra must be string type");
    } else {
      this._kafedra = newKafedra;
    }
    return this._kafedra;
  }

  get kafedra() {
    return this._kafedra;
  }

  set facultas(newFacultas) {
    if (typeof newFacultas !== "string") {
      throw new TypeError("newFacultas must be string type");
    } else {
      this._facultas = newFacultas;
    }
    return this._facultas;
  }

  get facultas() {
    return this._facultas;
  }
}

const university = new University("programm engineering", "automatization");

const dateYear = new Date().getFullYear();

class Student {
  constructor(name, surname, isMale, phone, email, postIndex) {
    this._name = name;
    this._surname = surname;
    this._isMale = isMale;
    this._facultas = university._facultas;
    this._kafedra = university._kafedra;
    this._dateOfApplication = new Date();
    this._curse = 1 - this._dateOfApplication.getFullYear() + dateYear;
    this.contact = {
      _phone: phone,
      _email: email,
      _postIndex: postIndex,
    };
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("newName must be string type");
    } else {
      this._name = newName;
    }
    return this._name;
  }

  get name() {
    return this._name;
  }

  set surname(newSurName) {
    if (typeof newSurName !== "string") {
      throw new TypeError("newSurName must be string type");
    } else {
      this._surname = newSurName;
    }
    return this._surname;
  }

  get surname() {
    return this._surname;
  }

  set isMale(newIsMale) {
    if (typeof newIsMale !== "boolean") {
      throw new TypeError("newIsMale must be boolean type");
    } else {
      this._isMale = newIsMale;
    }
    return this._isMale;
  }

  get isMale() {
    return this._isMale;
  }

  set phone(newPhone) {
    if (typeof newPhone !== "number" || isNaN(newPhone)) {
      throw new TypeError("newPhonemust be number type");
    } else if (newPhone / 1000000000000 < 1 || newPhone / 10000000000000 > 1) {
      throw new RangeError(
        "newPhonemust be real (newPhone must have 12-numbers type)"
      );
    } else {
      this.contact._phone = newPhone;
    }
    return this.contact._phone;
  }

  get phone() {
    return this.contact._phone;
  }

  set email(newEmail) {
    if (typeof newEmail !== "string") {
      throw new TypeError("newEmail must be string type");
    } else if (
      !newEmail.includes("@") ||
      !newEmail.includes(".") ||
      newEmail.includes(" ")
    ) {
      throw new RangeError(
        "newEmail must be real (newEmail must have '@' & '.', and don't have ' ')"
      );
    } else {
      this.contact._email = newEmail;
    }
    return this.contact._email;
  }

  get email() {
    return this.contact._email;
  }

  set postIndex(newPostIndex) {
    if (typeof newPostIndex !== "number" || isNaN(newPostIndex)) {
      throw new TypeError("newPostIndex be number type");
    } else if (newPostIndex / 100000 < 1 || newPostIndex / 1000000 > 1) {
      throw new RangeError(
        "newPostIndex be real (newPostIndex must have 6-number)"
      );
    } else {
      this.contact._postIndex = newPostIndex;
    }
    return this.contact._postIndex;
  }

  get postIndex() {
    return this.contact._postIndex;
  }

  set curse(newCurse) {
    if (typeof newCurse !== "number" || isNaN(newCurse)) {
      throw new TypeError("newCurse must be integer number");
    } else if (newCurse > 5) {
      throw new RangeError("newCurse must be <=5");
    } else {
      this._curse = newCurse;
    }
    return this._curse;
  }

  get curse() {
    return this._curse;
  }
}

const student = new Student(
  "Mike",
  "Tyson",
  true,
  380778886611,
  "steelmike@gmail.com",
  20851
);

function getInfo({ _name, _surname, _isMale, _kafedra, _facultas, contact }) {
  console.log(`fullname: ${_name} ${_surname} \n
  isMale: ${_isMale} \n
  kafedra: ${_kafedra} of ${_facultas} facultas \n
  ---contacts---\n
  phone number: ${contact._phone}\n
  e-mail: ${contact._email}\n
  zip-code: ${contact._postIndex}`);
}

//3.

/**
 *
 * @param {number} num is integer number
 * @returns {number} random integer number
 */

function random(num) {
  return Math.floor(Math.random() * num);
}

const array = [];
for (let i = 0; i < 25; i++) {
  array.push(random(100));
}

/**
 *
 * @param arr {array} array of numbers
 * @returns {undefined} underfined
 */
function showValueByEvenIndex(arr) {
  for (let i = 0; i <= arr.length; i += 2) {
    console.log(arr[i]);
  }
}

/**
 *
 * @param arr {array} array of numbers
 * @returns {undefined} underfined
 */
function showEvenValue(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

/**
 *
 * @param arr {array} array of numbers
 * @returns {undefined} underfined
 */
function showZeroValueIndex(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      console.log(i);
    }
  }
}

/**
 *
 * @param arr {array} array of numbers
 * @returns {number} amount zero elements of array
 */
function zeroValueAmont(arr) {
  let result = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      result++;
    }
  }
  return result;
}

//4.

class Book {
  constructor(autor, name, year, publishing) {
    this._autor = autor;
    this._name = name;
    this._year = year;
    this._publishing = publishing;
  }
}

class Ebook extends Book {
  constructor(autor, name, year, publishing, type, id) {
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

function fizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    if (result === "") {
      result = i;
    }
    console.log(result);
  }
}
