let score = 0;
let answeredQuestions = 0;


function answer(isCorrect) {
    if (isCorrect) {
        score = score + 1;      //Öka poäng om svaret är rätt
    }
    answeredQuestions = answeredQuestions + 1;  //Räknar att en fråga har svarats på
}

function showResult() {
    let resultText = document.getElementById("resultText"); //Kontrollera HTML ID på elementet. Ändra om de är olika.

    if (score === 5) {
        resultText.textContent = "Grymt! Du hade rätt på alla frågor!";
    } else if (score === 4) {
        resultText.textContent = "Superbra jobbat! Du hade rätt 4/5 frågor!";
    } else if (score === 3) {
        resultText.textContent = "Bra jobbat! Du hade rätt på 3/5 frågor!";
    } else if (score === 2) {
        resultText.textContent = "Bra försök! Du hade rätt på 2/5 frågor";
    } else if (score === 1) {
        resultText.textContent = "Bättre kan du! Du hade rätt på 1/5 frågor. Försök igen";
    } else if (score === 0) {
        resultText.textContent = "Du hade 0 rätt. Försök igen!";
    }
}


//Testing


//Detta behövs i HTML för min answer funktion
<button onclick="answer(true)">Correct answer</button>
<button onclick="answer(false)">Wrong answer</button>

<button onclick="showResult()">Visa resultat</button>

<p id="resultText"></p>
<button onclick="funktionNamn(parametrar)">Kör funktionen</button>
