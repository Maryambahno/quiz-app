let score = 0;
let answeredQuestions = 0;
const totalQuestions = 5;

function answer(isCorrect) {
    if (answeredQuestions >= totalQuestions) {
        return; // stoppar fler klick efter att quizet är klart
    }

    if (isCorrect) {
        score++;
    }

    answeredQuestions++;

    if (answeredQuestions === totalQuestions) {
        showResult();
    }
}

function showResult() {
    let resultText = document.getElementById("resultText");

    if (score === 5) {
        resultText.textContent = "Grymt! Du hade rätt på alla frågor!";
    } else if (score === 4) {
        resultText.textContent = "Superbra jobbat! Du hade rätt på 4 av 5 frågor!";
    } else if (score === 3) {
        resultText.textContent = "Bra jobbat! Du hade rätt på 3 av 5 frågor!";
    } else if (score === 2) {
        resultText.textContent = "Bra försök! Du hade rätt på 2 av 5 frågor.";
    } else if (score === 1) {
        resultText.textContent = "Bättre kan du! Du hade rätt på 1 av 5 frågor. Försök igen!";
    } else {
        resultText.textContent = "Du hade 0 rätt. Försök igen!";
    }
}