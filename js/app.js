'use strict';

var userName = prompt('What is your name?');
// console.log(userName + ' is the answer to \'What is your name?\'');
alert('Hi ' + userName + '! Welcome to my \'About Me\' website');

function q1() {
  var guessingGame = prompt('Would you like to learn more about me, ' + userName + '?').trim().toLowerCase();
  // console.log('asking ' + userName + ' if they want to play my guessing game');
  while((guessingGame !== 'yes') && (guessingGame !== 'no')){
    guessingGame = prompt('Please answer \'yes\' or \'no\'').trim().toLowerCase();
  }
  if((guessingGame === 'yes') || (guessingGame === 'y')){
    alert('Great, let\'s see if you can guess a few fun facts about me, ' + userName);
  }
  else if((guessingGame === 'no') || (guessingGame === 'n')){
    alert('Too bad, ' + userName + '. My site, my rules. You\'re going to try and guess a few fun facts about me whether you like it or not!');
  }
  return guessingGame; 
}

var guessingGame = q1();

//   // while((((guessingGame !== 'yes') || (guessingGame !== 'y') || (guessingGame !== 'no') || (guessingGame !== 'n'))) {

//   // }{
//   alert('Please answer \'Yes\' or \'No\' ' + userName);
// }

function q2() {
var age = prompt('Do you think I\'m 30 years old, ' + userName + '?').trim().toLowerCase();
// console.log('asking ' + userName + ' if they think I\'m 30 years old');
while(age !== 'yes' && age !== 'no'){
  age = prompt('Please answer \'yes\' or \'no\'').trim().toLowerCase();
}
if((age === 'yes') || (age === 'y')){
  alert('You got it, ' + userName);
}
else if((age === 'no') || (age === 'n')){
  alert('Not quite, ' + userName + '. I am indeed 30! Better luck on this next one.');
}
return age;
}
var age = q2();

// } else {
//   alert('Please answer \'Yes\' or \'No\' ' + userName);
// }

function q3() {
  var tv = prompt('Do you think I\'ve ever been on national Japanese TV, ' + userName + '?').trim().toLowerCase();
// console.log('asking ' + userName + ' if they think I\'ve ever been on Japanese TV');
while(tv !== 'yes' && tv !== 'no'){
  tv = prompt('Please answer yes or no!').trim().toLowerCase();
}
if((tv === 'yes') || (tv === 'y')){
  alert('You got it, ' + userName + '! I was talking about Kentucky Fried Chicken when I studied abroad there back in 2010... Long story');
}
else if((tv === 'no') || (tv === 'n')){
  alert('Believe it or not, ' + userName + '. I was on Japanese TV! Weird times.');
} else {
  alert('Please answer \'Yes\' or \'No\' ' + userName);
}
return tv;
}
var tv = q3();

function q4() {
  var pct = prompt('Do you think I\'ve ever hiked from Mexico to Canada, ' + userName + '?').trim().toLowerCase();
  // console.log('asking ' + userName + ' if they think I\'ve ever hiked across the country');
  while(pct !== 'yes' && pct !== 'no'){
    pct = prompt('Please answer yes or no!').trim().toLowerCase();
  }
  if((pct === 'yes') || (pct === 'y')){
    alert('You got it, ' + userName + '! I hiked the PCT in 2017! Not the best year to try a thru-hike... had to skip about 500 miles due to fire.');
  }
  else if((pct === 'no') || (pct === 'n')){
    alert('Well, ' + userName + ', you\'re kind of right on this one. I had to skip 500 miles due to fire, but I still hiked 2,100 miles of the PCT in 2017!');
  } else {
    alert('Please answer \'Yes\' or \'No\' ' + userName);
  }
return pct;  
}
var pct = q4();



function q5(){
var tp = prompt('Do you think I insert a fresh roll of TP waterfall style, ' + userName + '?').trim().toLowerCase();
// console.log('asking ' + userName + ' if I know how to properly install a fresh roll of TP');
while(tp !== 'yes' && tp !== 'no'){
  tp = prompt('Please answer yes or no!').trim().toLowerCase();
}
if((tp === 'yes') || (tp === 'y')){
  alert('You\'re damn right I do, ' + userName + '! I\'m not an animal');
}
else if((tp === 'no') || (tp === 'n')){
  alert('What kind of person do you think I am, ' + userName + '? I\'m not an animal');
} else {
  alert('Please answer \'Yes\' or \'No\' ' + userName);
}
return tp;
}
var tp = q5();

// while(isNaN(siblings)){
//     siblings = prompt('Must be a number! Guess again:')
// }

console.log('asking ' + userName + ' how many siblings they think I have');

var siblings = prompt('How many siblings do you think I have?').trim();
while(isNaN(siblings)){
  alert('Answer must be a number!');
  for(var i = 0; i < 4; i++){
    console.log(i);
    siblings = prompt('How many siblings do you think I have?').trim();
    if(i >= 3){
      alert('Correct answer is 0. I\'m an only child, can\'t you tell??');
    }
    else if(siblings > 0){
      alert('That\'s too high ' + userName + '. Guess again.');
    }
    else if(siblings === '0'){
      alert('You got it, ' + userName + '!');
      break;
    }
  }
//   else if(siblings !== isNaN){
//     alert('Please answer with a number');
//   }
}

// QUESTION 7 - using arrays for multiple correct answers

var faveFruits = ['persimmon', 'avocado', 'grapes'];
console.log(faveFruits.length);
// console.log(faveFuits);

for(i = 0; i < 6; i++){
  var faveFruitsQ = prompt('Can you guess one of my 3 favorite fruits?').trim().toLocaleLowerCase();
  if(i >=5){
    alert('Correct answers are: 1) Persimmon 2) Avocado 3) Grapes');
  }
  else if((faveFruitsQ === faveFruits[0]) || (faveFruitsQ === faveFruits[1]) || (faveFruitsQ === faveFruits[2])){
    alert('Yes! You guessed one of my 3 faves! Persimmon, avocados, and grapes are the best!');
    break;
  }
  else if(faveFruitsQ !== faveFruits){
    alert('Not bad, but not one of my top 3! Guess again');
  }
}

alert('Thank you for playing my guessing game, ' + userName + '! As a reward, you can see my site now. Enjoy!');
