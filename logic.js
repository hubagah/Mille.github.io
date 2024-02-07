let FirstNumber = 0
let SecondNumber = 0
let Total = 0
let selection = 0

document.getElementById("Addition").addEventListener("click", function(){ //Söker efter elementet "Addition" och startar en funktion när den trycks på.
    selection=0 //Funktionen sätter selection till 0.
})
document.getElementById("Subtraction").addEventListener("click", function(){  //Söker efter elementet "Subtraction" och startar en funktion när den trycks på.
    selection=1 //Funktionen sätter selection till 1.
})
document.getElementById("Multiplication").addEventListener("click", function(){ //Söker efter elementet "Multiplication" och startar en funktion när den trycks på.
    selection=2 //Funktionen sätter selection till 2.
})
document.getElementById("Division").addEventListener("click", function(){ //Söker efter elementet "Division" och startar en funktion när den trycks på.
    selection=3 //Funktionen sätter selection till 3.
})
document.getElementById("calculate").addEventListener("click", function(){ //Startar en function när knappen "calculate" trycks på.
    FirstNumber = document.getElementById("InputFirstNumber").value //kollar värdet av numren inmatade av användaren
    SecondNumber = document.getElementById("InputSecondNumber").value 
    switch(selection){ //En switch som kollar värdet av switch efter att man har tryckt på calculate
        case 0: 
            Total = Number(FirstNumber) + Number(SecondNumber) //Om selection = 0 så adderas båda inmatade nummer.
            break
        case 1:
            Total = Number(FirstNumber) - Number(SecondNumber) //Om selection = 1 så subtraheras båda inmatade nummer.
            break
        case 2:
            Total = Number(FirstNumber) * Number(SecondNumber) //Om selection = 2 så multipliceras båda inmatade nummer.
            break
        case 3: 
            Total = Number(FirstNumber) / Number(SecondNumber) //Om selection = 3 så divideras båda inmatade nummer.
            break
    }
    document.getElementById("total").innerText = "Total: " + Total //skriver ut den totala siffran efter att den har räknat ihop enligt rätt case.
})