// Iteration 1: Names and Input
// Creating two variables hacker1 and hacker2 and printing their names as below:

let hacker1 = "Armir";
console.log(`The driver's name is ${hacker1}!`);
let hacker2 = "Fjoralba";
console.log(`The navigator's name is ${hacker2}!`);

//Creating space to the next iteration
console.log(`\n`);

// Iteration 2: Conditionals

const hacker1namelength = hacker1.length;
const hacker2namelength = hacker2.length;

if (hacker1namelength > hacker2namelength)
  console.log(`The driver has the longest name, it has ${hacker1namelength} characters.`);
else if (hacker1namelength < hacker2namelength)
  console.log(`It seems that the navigator has the longest name, it has ${hacker2namelength} characters.`);
else 
  console.log(`Wow, you both have equally long names, ${hacker1namelength} characters!`);

//Creating space to the next iteration
console.log(`\n`);

// Iteration 3: Loops
//Driver's name, separated by space and in capital letters
//const upperCasehacker1nameWithSpaces = hacker1.split('').join(' ').toUpperCase();
//console.log(upperCasehacker1nameWithSpaces);

let upperCasehacker1nameWithSpaces = "";
for(i=0; i <hacker1namelength; i++)
    {
  upperCasehacker1nameWithSpaces += hacker1[i].toUpperCase() + " ";
    }
console.log(upperCasehacker1nameWithSpaces);

//Navigator's name in reverse order
//const hacker2namereverse = hacker2.split("").reverse().join("");
//console.log(hacker2namereverse);

let hacker2namereverse = "";
for (i = hacker2namelength - 1; i>=0; i--)
     {
  hacker2namereverse += hacker2[i]; 
     }
console.log(hacker2namereverse);

//Creating space to the next iteration
console.log(`\n`)

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}



//Creating space to the next iteration
console.log(`\n`);

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum quam quis fermentum dictum. Suspendisse consequat eros at nisi tincidunt dictum. Nam sit amet nulla in tellus consequat condimentum ut sed mauris. Morbi gravida risus nulla, at porta lectus egestas ac. Sed pellentesque porta dui posuere luctus. Cras consequat consequat nibh, non ornare orci finibus id. Duis elementum malesuada sodales. Vestibulum in bibendum felis. Vivamus finibus odio at odio aliquet facilisis. Cras in odio luctus, luctus tortor a, vehicula dolor.

Nulla euismod justo ut ,enim vulputate varius. Duis ac ligula vitae risus tincidunt facilisis volutpat sit amet odio. Maecenas non euismod nunc. Duis bibendum sollicitudin ligula vitae vestibulum. Sed mattis bibendum rutrum. Nullam at pellentesque dolor. Fusce ut lectus nibh. Nunc accumsan vestibulum magna.

Donec maximus posuere scelerisque. Nam dapibus nisl elit, sed placerat erat euismod id. Cras tempus euismod elit a volutpat. Phasellus purus magna, gravida non leo non, venenatis interdum orci. Duis at fermentum massa. Maecenas vel varius mi, nec mollis risus. Mauris ornare, enim vitae ultrices tempus, augue nunc lobortis leo, quis porta ex lectus vitae mauris. Aenean hendrerit, quam non facilisis cursus, nibh nibh mollis turpis, sit amet interdum augue neque nec ex. Nam vulputate nisl ipsum, eu elementum libero rhoncus nec. Ut in nisl vitae massa gravida condimentum sed at erat.`;

let wordnumber = 1;

for (let i = 0; i < longText.length; i++)
  {
  if (longText[i] === " " || longText[i] === "\n\n"){
    wordnumber ++;
}
  }
console.log("Number of words in these paragraphs are: " + wordnumber);
//Creating space to the next iteration
console.log(`\n`);

searchFor = ' et ';
count_et = 0;
pos = longText.indexOf(searchFor);

while (pos > -1) {
  ++count_et;
  pos = longText.indexOf(searchFor, ++pos);
}


console.log(`There are ${count_et} occurrences of the word 'et'`);

//Creating space to the next iteration
console.log(`\n`)
function isItaPalindrome(phraseToCheck) {
// Start from leftmost and // rightmost corners of string
let phraseToCheckwithSpaces = phraseToCheck.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
let phraseToCheckwithoutSpaces = phraseToCheckwithSpaces.replace(/\s+/g, '');
    let l = 0;
    let h = phraseToCheckwithoutSpaces.length - 1;
    
    while (h > l) {
        if (phraseToCheckwithoutSpaces[l++] != phraseToCheckwithoutSpaces[h--]) {
            console.log(`The string ${phraseToCheck} is not a palindrome!`);
            return 0;
            // will return from here
        }
    }
  
    console.log(`The string '${phraseToCheck}' is a palindrome!\n`);
    return 0;
}


isItaPalindrome("A man, a plan, a canal, Panama!")
isItaPalindrome("step on no pets")
isItaPalindrome("&get !teg&")
isItaPalindrome("tag")