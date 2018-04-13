var stringInput = "abcXXXabc";
strings4(stringInput);

function strings4(stringInput) {


    for (var i = 0; i < stringInput.length - 1; i++) {

        var result = stringInput.substr(0, 3);
        console.log(result);
    }
}


//--------------------------------------

/*
//Iteration4 Function
iteration4(100);
function iteration4(number) {

    var counter = 0;
    while (number != 1) {
        console.log(number)

        var remainder = number % 3;
        if (remainder == 0) {

            console.log(number + "/ 3" + " = " + number / 3);
            number = number / 3;
            counter++;

        } else if (remainder == 1) {
            number = +number - 1;
        } else {
            number = +number + 1;
        }
    }
    console.log("done");
    console.log("it took: " + counter + " iterations.");
}
*/

//------------------------------------

/*
//FizzBuzz
function fizzBuzz(limit, word3, word5){

    var limit = document.getElementById("fizz");
    var word3 = document.getElementById("fizz");
    var word5 = document.getElementById("fizz");

    var limit1 = limit.elements["number1"].value;
    var word33 = word3.elements["word333"].value;
    var word55 = word5.elements["word555"].value;

    for(var i=1; i<=limit1; i++){

        if(i%3==0 && i%5==0){

            console.log(word33 + word55);
        }
        else if(i%5==0){
            console.log(word55);
        }
        else if(i%3==0){
            console.log(word33);
        }
        else{
            console.log(i);
        }
    }
}
*/

//----------------------------------

/*
// Iteration 2
for(var i=1; i<=10; i++){

    if(i%2==0){

        window.alert(i);
    }
}
*/

//----------------------------------

/*
//Iteration 1
for(var i=1; i<=10; i++){

    window.alert(i);
}
*/

//---------------------------------

/*
//Conditionals 1
function function3() {
    var name;
    var age;
    var job;

    var userNameInput = document.getElementById("form");
    var userAgeInput = document.getElementById("form");
    var userJobInput = document.getElementById("form");

    name = userNameInput.elements["name"].value;
    age = userAgeInput.elements["age"].value;
    job = userJobInput.elements["job"].value;

    createPerson(name, age, job)
}

var p1 = createPerson("Nabeel", 23, "Snake");

if(p1.age > 20 && p1.age <40){

    window.alert("True Fact Fam");
}

function createPerson(name, age, job) {

    person1 = {
        name: name,
        age: age,
        job: job
    }
    return person1;
}
function editAge() {

    person1.age = +person1.age + 1;
    window.alert(person1.age);
}
*/

//--------------------------------

/*
// Arrays 1 / Strings 3:
var myArray = ["Nabeel ", " Chad", " Snake"];
myArray.push("Another String");
var removedItem = myArray.splice(myArray.length-1, 1);

window.alert(myArray);

//window.alert("This was kept: " + myArray);
//window.alert("This was removed: " + removedItem);
*/

/*
//Strings
var string = " He said 'My name is Elliot' ";

var stringNew = string.toLocaleUpperCase();
var stringConcat = "this is a string" + 1;

window.alert(stringConcat);

*/

//------------------------------

/*
// Function 3
var person1;
function function3() {
    var name;
    var age;
    var job;

    var userNameInput = document.getElementById("form");
    var userAgeInput = document.getElementById("form");
    var userJobInput = document.getElementById("form");

    name = userNameInput.elements["name"].value;
    age = userAgeInput.elements["age"].value;
    job = userJobInput.elements["job"].value;

    createPerson(name, age, job)
}

function createPerson(name, age, job) {

    person1 = {
        name: name,
        age: age,
        job: job
}
    //window.alert(person1.name + " " + person1.age + " " + person1.job);
    //console.log(person1.name + " " + person1.age + " " + person1.job);

}

function editAge() {

    person1.age = +person1.age + 1;
    window.alert(person1.age);

}
*/

//------------------------------

/*
//Below code performs mainly the in class tasks;
// ----------------------------------------------------
 // ---------------------------------------------------

var input = prompt("put a number now human, empty");
square(input);

function square(input) {

    input = input * input;
    window.alert(input);
}

function person(name, age, occupation) {

    var it = {};

    it.name = name;
    it.age = age;
    it.occupation = occupation;
    return it;
}

var person1 = person("Chad", 25, "Part time snake, full time serpent");
console.log(person1.name, person1.age, person1.occupation);

function test123() {

    person1.age = person1.age + 1;
    console.log(person1.name, person1.age, person1.occupation);
}3

v

/* Below is a bunch of code that does a bunch of stuff
-------------------------------------------------------
-------------------------------------------------------

window.alert("Script and stuff here");
document.write("B is also a b monster");
console.log("asdlkfjasdkljflkd");

var a = "Hello" + 5;

window.alert(a);
document.write(a);
console.log(a);
var v1 = 5;
var v2 = 10;
myFunction(v1, v2);
function myFunction(v1, v2){
    window.alert(v1 + v2);
    var c = {name: "chad"};
    window.alert(c.name);
}
var a = 1; var b = 2; var c = 3; var d = 4;

add(a, b , c, d);
function add(a, b , c, d){

    var n = arguments.length;
    var total = 0;

    for(var i = 0; i < n, i++;){
        total = total + arguments[i];
    }
    window.alert(total);
}
*/