//Ex 13.1
const x = 10;

if (x < 10) {
    console.log("The condition was true!");
    console.log(`${x} is less than 100`);
}
console.log("This will be displayed regardless.");
//Ex 13.2
const myPassword = "FireForce73";

if (myPassword.length < 10) {
    console.log("Sorry this password isn't long enough, try again.");
} else {
    console.log("Great password length!");
}
//Ex 13.3
let day = "Sunday";
let special = "egg "; //you don't know what the special will be yet so make it an empty string for now
if (day == "Monday") {
    special = "blueberry muffin";
} else if (day == "Tuesday") {
    special = "coffee cake";
} else if (day == "Wednesday") {
    special = "chocolate croissant";
} else if (day == "Thursday") {
    special = "lemon bar";
} else if (day == "Friday") {
    special = "cupcake";
} else {
    console.log(`Today's ${day}!`);
    console.log("Sorry we're closed on the weekend!");
}


//if the length of special is not greater than 0 it means it’s still empty and thus it must be a weekend
if (special.length > 0) {
    console.log(`Today is ${day} and the special is ${special}.`);
}
//Ex 13.4
/*Fill in the provided code template to let someone know which movie ratings they are able to see based on their age. People aged 17 and up can see any movie; people aged 13-16 can see PG-13, PG, or G movies, and everyone else can only see PG or G movies. */

const age = 25

if (age >= 25) /*replace with your own code*/ {
    console.log(`You are ${age}. You are old enough to see any movie: R, PG-13, PG, or G.`);
} else if (age >= 13) {
    console.log(`You are ${age}. You can see PG-13 or G movies`) //replace with your own code
} else {
    console.log(`You are ${age}. You are only old enough to see PG and G movies.`);
}