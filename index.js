
var all_questions = [{
  question_string: "What color is the sky?",
  choices: {
    correct: "Blue",
    wrong: ["Pink", "Orange", "Green"]
  }
}, {
  question_string: "Which of the following elements aren’t introduced in HTML5?",
  choices: {
    correct: "<input>",
    wrong: ["<article>", "<footer>", "<hgroup>"]
  }
}, {
  question_string: "How many wheels are there on a tricycle?",
  choices: {
    correct: "Three",
    wrong: ["One", "Two", "Four"]
  }
}, {
  question_string: 'Who is the main character of Harry Potter?',
  choices: {
    correct: "Harry Potter",
    wrong: ["Hermione Granger", "Ron Weasley", "Voldemort"]
  }
}];
for(var i=0;i<kbc.length;i++){
    var output=prompt(kbc[i].question);
    if(output==kbc[i].answer){
        alert("Correct answer!");
        prizeMoney+=1000;
        score++;
    }
    else{
        alert("WRONG answerr!");
        break;
    }
}

