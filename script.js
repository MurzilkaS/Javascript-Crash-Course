// let, const
let age = 30;
age = 31;
console.log(age);

// String, number, Boolean, null, undefined
const firstName = "John";
const age3 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// concatenation
console.log('My name is ' + firstName + ' and I am ' + age);
// template string
const hello = `My name if ${firstName} and I am ${age}`;
console.log(hello);


// string methods
const ss = 'technology, computers, it, code';
const s = "Hello World";
const s2 = "crash, course, for, beginners";
console.log(s.length);
console.log(ss.split(', '));
console.log(s.toLocaleUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLocaleLowerCase());
console.log(s2.split(", "));

//arrays

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples, 'oranges', 'pears'];
console.log(numbers);
fruits[3] = 'grapes';
fruits.push('mangos');
console.log(fruits);

// Objects
const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main st',
        city:'Boston',
        state:'MA'
    }
 console.log(person);

 const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompeted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: false
    }
 ];
// convert it to an JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
//For
for( let i=0; i<10; i++){
    console.log(`For loop Number:${i}`);

}
//while
let i =0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// loop through Array
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompeted: true,
    },
    {
      id: 2,
      text: 'Meeting with boss',
      isCompeted: true,
    },
    {
      id: 3,
      text: 'Dentist appt',
      isCompeted: false,
    }
  ];
  for(let todo of todos){
    console.log(todo.id)
  }

  // forEach, map, filter
  todos.forEach(function(todo){
    console.log(todo.text);
  }); 
  //map
  const todoText = todos.map(function(todo){
    console.log(todo.text);
  }); 

  const todoText = todos.map(function(todo){
    return todo.text;
  });
  console.log(todoText);
//filter
  const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
  });
  console.log(todoCompleted);
// CONDITIONS
const x = 10;

if (x == 10){
    consolelog('x is 10');

}else if(x > 10 ){
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}
//multiple conditions || 
const x = 4;
const y = 11; 
if(x > 5 || y > 10){
    console.log(`x is more than 5 or y is more than 10`);
  //multiple conditions && 
    const x = 6;
    const y = 11; 
    if(x > 5 && y > 10){
        console.log(`x is more than 5 or y is more than 10`);
}
//ternary operator
const x = 10;

const color = x> 10 ? 'red' : 'blue';

console.log(color);
//switch
const x = 9;

const color = 'green';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT redof blue');
        break;
    }    

    //FUNCtIONS

    function addNums(num1 = 1, num2 = 1) {
        console.log(num1 + num2);
      }
      addNums(5, 5);
//
      function addNums(num1 = 1, num2 = 1) {
        return num1 + num2;
      }
      console.log(addNums(5, 5));
//
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5,5));

// Object constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
      return this.dob.getFullYear();
    };
    this.getFullName = function () {
      return `${this.firstName} ${this.lastName}`;
    };
  }

  // Instantiate object
const person1 = new Person('John', 'Doe', '4-6-1987');
const person2 = new Person('Mary', 'Smith', '1-2-1980');

console.log(person1.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// PROTOTYPES
function NewPerson(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  
  NewPerson.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  
  NewPerson.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  
//class
class Person{
    construction (firstName, lastName, dob){
        this.firastName = this.firastNamee;
        this.lastName = lastName;
        this.dob = new Date(dob);
    } 
    getBirthYear{
     return this.dob.getFullYear();   
    }
    getFullName(){
        return ${this.firstName} ${this.lastname};

    }
}
const thePerson1 = new ThePerson("mr", "Sid", "1-01-2021");
const thePerson2 = new ThePerson("mr.", "Som", "3-12-1999");

console.log(thePerson1.getBirthYear());
console.log(thePerson2.getFullName());


//DOM

// single element

console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('.msg'));

// multiple element
console.log(document.querySelectorAll('.item')); // node-list with array methods
console.log(document.getElementsByClassName('item')); // HTML Collection (can not use array methods!)
console.log(document.getElementsByTagName('li')); // HTML Collection (can not use array methods!)


// ul.remove(); //from DOM
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello!";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";


btn.style.background = "red";
btn.style.border = "none";

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
      
      if (nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => msg.remove(), 3000);
      } else {
        const li = document.createElement("li");
        li.appendChild(
          document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
        );
    
        userList.appendChild(li);
    
        // Clear fields
        nameInput.value = "";
        emailInput.value = "";
      }
    }