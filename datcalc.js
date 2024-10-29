
let date = new Date();
let dob = new Date("1995-12-17T03:24:00");
console.log(date);
console.log(date.getFullYear());
let age = date.getFullYear() - dob.getFullYear();
if (date.getMonth() < dob.getMonth() || (date.getMonth() == dob.getMonth() && date.getDate() < dob.getDay())) {
    age--;
}
console.log("age is " + age);
//asd