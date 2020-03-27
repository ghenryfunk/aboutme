'use strict';

var userName = prompt('What is your name?');
console.log(userName + ' is the answer to \'What is your name?\'');
alert('Hi ' + userName + '! Welcome to my \'About Me\' website');

var guessingGame = prompt('Would you like to learn more about me, ' + userName + '?').trim().toLowerCase();
console.log('asking ' + userName + ' if they want to play my guessing game');
if((guessingGame === 'yes') || (guessingGame === 'y')){
    alert('Great, let\'s see if you can guess a few fun facts about me, ' + userName);
}
else if((guessingGame === 'no') || (guessingGame === 'n')){
    alert('Too bad, ' + userName + '. My site, my rules. You\'re going to try and guess a few fun facts about me whether you like it or not!');
} else {
    // while((((guessingGame !== 'yes') || (guessingGame !== 'y') || (guessingGame !== 'no') || (guessingGame !== 'n'))) {

    // }{
    alert('Please answer \'Yes\' or \'No\' ' + userName);
}

var age = prompt('Do you think I\'m 30 years old, ' + userName + '?').trim().toLowerCase();
console.log('asking ' + userName + ' if they think I\'m 30 years old');
if((age === 'yes') || (age === 'y')){
    alert('You got it, ' + userName);
}
else if((age === 'no') || (age === 'n')){
    alert('Not quite, ' + userName + '. I am indeed 30! Better luck on this next one.');
} else {
    alert('Please answer \'Yes\' or \'No\' ' + userName);
}

var tv = prompt('Do you think I\'ve ever been on national Japanese TV, ' + userName + '?').trim().toLowerCase();
console.log('asking ' + userName + ' if they think I\'ve ever been on Japanese TV');
if((tv === 'yes') || (tv === 'y')){
    alert('You got it, ' + userName + '! I was talking about Kentucky Fried Chicken when I studied abroad there back in 2010... Long story');
}
else if((tv === 'no') || (tv === 'n')){
    alert('Believe it or not, ' + userName + '. I was on Japanese TV! Weird times.');
} else {
    alert('Please answer \'Yes\' or \'No\' ' + userName);
}

var pct = prompt('Do you think I\'ve ever hiked from Mexico to Canada, ' + userName + '?').trim().toLowerCase();
console.log('asking ' + userName + ' if they think I\'ve ever hiked across the country');
if((pct === 'yes') || (pct === 'y')){
    alert('You got it, ' + userName + '! I hiked the PCT in 2017! Not the best year to try a thru-hike... had to skip about 500 miles due to fire.');
}
else if((pct === 'no') || (pct === 'n')){
    alert('Well, ' + userName + ', you\'re kind of right on this one. I had to skip 500 miles due to fire, but I still hiked 2,100 miles of the PCT in 2017!');
} else {
    alert('Please answer \'Yes\' or \'No\' ' + userName);
}

var tp = prompt('Do you think I insert a fresh roll of TP waterfall style, ' + userName + '?').trim().toLowerCase();
console.log('asking ' + userName + ' if I know how to properly install a fresh roll of TP');
if((tp === 'yes') || (tp === 'y')){
    alert('You\'re damn right I do, ' + userName + '! I\'m not an animal');
}
else if((tp === 'no') || (tp === 'n')){
    alert('What kind of person do you think I am, ' + userName + '? I\'m not an animal');
} else {
    alert('Please answer \'Yes\' or \'No\' ' + userName);
}

alert('Thank you for playing my guessing game, ' + userName + '! As a reward, you can see my site now. Enjoy!')