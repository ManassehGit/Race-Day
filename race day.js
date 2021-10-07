let raceNumber = Math.floor(Math.random() * 1000);

//Variable to check if runner registered early 
let registeredEarly = true;

//Storing the age of runner 
let age = 18;

//Checking if runner is an adult and registered early
if(age > 18 && registeredEarly){
  raceNumber += 1000;
}

//Checking ages and displaying various race numbers and their respective race times
if(age > 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber} and you would be racing at 9:30 am`);
}else if(age > 18 && !registeredEarly){
  console.log(`Your race number is ${raceNumber} and you would be racing at 11:00 am`);
}else if((age < 18 && registeredEarly) || (age < 18 && !registeredEarly)){
  console.log(`Your race number is ${raceNumber} and you would be racing at 12:30 pm`);
}else{
  console.log("Kindly visit the registration desk");
}
